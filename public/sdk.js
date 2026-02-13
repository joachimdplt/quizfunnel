// ══════════════════════════════════════════════════════════════
// sdk.js — Script analytics universel v1.1
//
// INSTALLATION (1 ligne dans le HTML de n'importe quel site) :
// <script defer data-site="SITE_ID" src="https://cdn.tondomaine.com/sdk.js"></script>
//
// ══════════════════════════════════════════════════════════════

(function () {
  "use strict";

  // ┌─────────────────────────────────────────────┐
  // │  BLOC 1 — LECTURE DE LA CONFIGURATION       │
  // └─────────────────────────────────────────────┘

  // Mode 1 : attributs HTML (<script data-site="..." src="sdk.js">)
  // Mode 2 : config globale (window.__analytics = { site: "..." })
  // Le mode 2 permet l'intégration dans React, Next.js, Remix, etc.
  var script = document.currentScript;
  var cfg = window.__analytics_config || {};

  var siteId = (script && script.getAttribute("data-site")) || cfg.site;
  if (!siteId) return;

  var endpoint = (script && script.getAttribute("data-api")) || cfg.api || "https://api.tondomaine.com/api/event";
  var spaEnabled = (script ? script.getAttribute("data-spa") !== "false" : cfg.spa !== false);
  var vitalsEnabled = (script ? script.getAttribute("data-no-vitals") !== "true" : cfg.vitals !== false);


  // ┌─────────────────────────────────────────────┐
  // │  BLOC 2 — SESSION ÉPHÉMÈRE                  │
  // │                                             │
  // │  ID de session en mémoire (jamais persisté) │
  // │  + compteur de séquence pour ordonner les   │
  // │  events côté serveur.                       │
  // └─────────────────────────────────────────────┘

  var sessionId = Math.random().toString(36).substring(2, 10);
  var seq = 0;
  var currentUserId = null;


  // ┌─────────────────────────────────────────────┐
  // │  BLOC 3 — COLLECTE DU CONTEXTE              │
  // │                                             │
  // │  Capture le contexte page + first-touch     │
  // │  referrer/UTMs pour l'attribution revenus.  │
  // └─────────────────────────────────────────────┘

  // First-touch : capturés une seule fois au chargement
  var firstReferrer = document.referrer;
  var firstUtms = {};

  try {
    var initParams = new URLSearchParams(window.location.search);
    firstUtms.source = initParams.get("utm_source");
    firstUtms.medium = initParams.get("utm_medium");
    firstUtms.campaign = initParams.get("utm_campaign");
    firstUtms.term = initParams.get("utm_term");
    firstUtms.content = initParams.get("utm_content");
  } catch (e) {
    // IE11 : pas de URLSearchParams
  }

  function getContext() {
    var loc = window.location;
    var params;

    try {
      params = new URLSearchParams(loc.search);
    } catch (e) {
      params = { get: function () { return null; } };
    }

    return {
      url: loc.href,
      path: loc.pathname,
      title: document.title,
      referrer: document.referrer,

      // First-touch (attribution revenus)
      first_referrer: firstReferrer,
      first_utm_source: firstUtms.source || null,
      first_utm_medium: firstUtms.medium || null,
      first_utm_campaign: firstUtms.campaign || null,

      // UTM params courants
      utm_source: params.get("utm_source"),
      utm_medium: params.get("utm_medium"),
      utm_campaign: params.get("utm_campaign"),
      utm_term: params.get("utm_term"),
      utm_content: params.get("utm_content"),

      // Device
      sw: screen.width,
      sh: screen.height,
      lang: navigator.language
    };
  }


  // ┌─────────────────────────────────────────────┐
  // │  BLOC 4 — FONCTION D'ENVOI                  │
  // │                                             │
  // │  sendBeacon = fire-and-forget.              │
  // │  Inclut sid, seq, uid dans chaque payload.  │
  // └─────────────────────────────────────────────┘

  function send(type, data) {
    var payload = JSON.stringify({
      s: siteId,
      t: type,
      d: data || {},
      c: getContext(),
      sid: sessionId,
      seq: seq++,
      uid: currentUserId,
      ts: Date.now()
    });

    if (navigator.sendBeacon) {
      navigator.sendBeacon(endpoint, payload);
    } else {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", endpoint, true);
      xhr.setRequestHeader("Content-Type", "text/plain");
      xhr.send(payload);
    }
  }


  // ┌─────────────────────────────────────────────┐
  // │  BLOC 5 — PAGEVIEW AUTOMATIQUE              │
  // └─────────────────────────────────────────────┘

  var lastPath = "";

  function trackPageview() {
    var currentPath = window.location.pathname + window.location.search;
    if (currentPath === lastPath) return;
    lastPath = currentPath;
    send("p");
  }


  // ┌─────────────────────────────────────────────┐
  // │  BLOC 6 — SUPPORT SPA                       │
  // │                                             │
  // │  Intercepte pushState, replaceState et      │
  // │  popstate pour les SPA.                     │
  // └─────────────────────────────────────────────┘

  if (spaEnabled) {
    var originalPush = history.pushState;
    history.pushState = function () {
      originalPush.apply(history, arguments);
      setTimeout(trackPageview, 50);
    };

    var originalReplace = history.replaceState;
    history.replaceState = function () {
      originalReplace.apply(history, arguments);
      setTimeout(trackPageview, 50);
    };

    window.addEventListener("popstate", function () {
      setTimeout(trackPageview, 50);
    });
  }


  // ┌─────────────────────────────────────────────┐
  // │  BLOC 7 — CORE WEB VITALS                   │
  // │                                             │
  // │  LCP, FCP, CLS, INP, TTFB                   │
  // └─────────────────────────────────────────────┘

  var vitals = {};

  if (vitalsEnabled && window.PerformanceObserver) {

    // LCP — Largest Contentful Paint
    try {
      new PerformanceObserver(function (list) {
        var entries = list.getEntries();
        if (entries.length) {
          vitals.lcp = Math.round(entries[entries.length - 1].startTime);
        }
      }).observe({ type: "largest-contentful-paint", buffered: true });
    } catch (e) { }

    // FCP — First Contentful Paint
    try {
      new PerformanceObserver(function (list) {
        var entries = list.getEntries();
        for (var i = 0; i < entries.length; i++) {
          if (entries[i].name === "first-contentful-paint") {
            vitals.fcp = Math.round(entries[i].startTime);
          }
        }
      }).observe({ type: "paint", buffered: true });
    } catch (e) { }

    // CLS — Cumulative Layout Shift
    try {
      var clsValue = 0;
      new PerformanceObserver(function (list) {
        var entries = list.getEntries();
        for (var i = 0; i < entries.length; i++) {
          if (!entries[i].hadRecentInput) {
            clsValue += entries[i].value;
          }
        }
        vitals.cls = Math.round(clsValue * 1000) / 1000;
      }).observe({ type: "layout-shift", buffered: true });
    } catch (e) { }

    // INP — Interaction to Next Paint
    try {
      var maxINP = 0;
      new PerformanceObserver(function (list) {
        var entries = list.getEntries();
        for (var i = 0; i < entries.length; i++) {
          if (entries[i].duration > maxINP) {
            maxINP = entries[i].duration;
          }
        }
        vitals.inp = Math.round(maxINP);
      }).observe({ type: "event", buffered: true, durationThreshold: 16 });
    } catch (e) { }

    // TTFB — Time to First Byte
    try {
      var navEntry = performance.getEntriesByType("navigation")[0];
      if (navEntry) {
        vitals.ttfb = Math.round(navEntry.responseStart);
      }
    } catch (e) { }
  }


  // ┌─────────────────────────────────────────────┐
  // │  BLOC 8 — TEMPS SUR LA PAGE                 │
  // └─────────────────────────────────────────────┘

  var startTime = Date.now();
  var totalTime = 0;
  var isVisible = true;

  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") {
      if (isVisible) {
        totalTime += Date.now() - startTime;
        isVisible = false;
      }
    } else {
      startTime = Date.now();
      isVisible = true;
    }
  });

  function getTimeOnPage() {
    if (isVisible) {
      return totalTime + (Date.now() - startTime);
    }
    return totalTime;
  }


  // ┌─────────────────────────────────────────────┐
  // │  BLOC 9 — SCROLL DEPTH                      │
  // └─────────────────────────────────────────────┘

  var maxScroll = 0;

  function updateScroll() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight;
    var winHeight = window.innerHeight;

    if (docHeight <= winHeight) {
      maxScroll = 100;
      return;
    }

    var percent = Math.round((scrollTop + winHeight) / docHeight * 100);
    if (percent > maxScroll) maxScroll = percent;
  }

  var scrollTimer;
  window.addEventListener("scroll", function () {
    if (!scrollTimer) {
      scrollTimer = setTimeout(function () {
        updateScroll();
        scrollTimer = null;
      }, 200);
    }
  }, { passive: true });


  // ┌─────────────────────────────────────────────┐
  // │  BLOC 10 — ENVOI À LA SORTIE DE PAGE        │
  // └─────────────────────────────────────────────┘

  var exitSent = false;

  function sendExitData() {
    if (exitSent) return;
    exitSent = true;

    if (Object.keys(vitals).length > 0) {
      send("v", vitals);
    }

    send("e", {
      name: "__exit",
      props: {
        time: getTimeOnPage(),
        scroll: maxScroll
      }
    });
  }

  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") {
      sendExitData();
    }
  });

  window.addEventListener("pagehide", sendExitData);


  // ┌─────────────────────────────────────────────┐
  // │  BLOC 11 — AUTO-TRACKING DES CLICS          │
  // │                                             │
  // │  Capture automatiquement les clics sur les  │
  // │  liens <a> et boutons <button>.             │
  // └─────────────────────────────────────────────┘

  document.addEventListener("click", function (e) {
    var el = e.target;

    // Remonter le DOM pour trouver le lien ou bouton cliqué
    while (el && el !== document) {
      var tag = el.tagName;
      if (tag === "A" || tag === "BUTTON" || (el.getAttribute && el.getAttribute("role") === "button")) {
        var text = (el.innerText || "").trim().substring(0, 100);
        var props = { tag: tag.toLowerCase(), text: text };

        if (tag === "A") {
          props.href = el.getAttribute("href") || "";
          props.external = el.hostname !== window.location.hostname;
        }

        if (el.id) props.id = el.id;
        if (el.className && typeof el.className === "string") {
          props.class = el.className.split(" ").slice(0, 3).join(" ");
        }

        send("e", { name: "__click", props: props });
        return;
      }
      el = el.parentElement;
    }
  }, true);


  // ┌─────────────────────────────────────────────┐
  // │  BLOC 12 — API PUBLIQUE                     │
  // │                                             │
  // │  window.analytics = { track, revenue,       │
  // │  identify, funnel }                         │
  // └─────────────────────────────────────────────┘

  window.analytics = window.analytics || {};

  // analytics.track("signup_click", { plan: "pro" })
  window.analytics.track = function (name, props) {
    if (!name) return;
    send("e", { name: name, props: props || {} });
  };

  // analytics.revenue({ amount: 29.99, currency: "EUR", product: "Plan Pro" })
  window.analytics.revenue = function (data) {
    if (!data || !data.amount) return;
    send("r", {
      amount: data.amount,
      currency: data.currency || "EUR",
      product: data.product || "",
      order_id: data.order_id || ""
    });
  };

  // analytics.identify("user_123", { email: "...", plan: "pro" })
  // Persiste le userId pour tous les events suivants de la session
  window.analytics.identify = function (userId, traits) {
    if (!userId) return;
    currentUserId = userId;
    send("i", { user_id: userId, traits: traits || {} });
  };

  // analytics.funnel("checkout", "payment")
  // Raccourci pour tracker les étapes d'un tunnel de conversion
  window.analytics.funnel = function (funnelName, stepName) {
    if (!funnelName || !stepName) return;
    send("e", {
      name: "__funnel",
      props: { funnel: funnelName, step: stepName }
    });
  };


  // ┌─────────────────────────────────────────────┐
  // │  DÉMARRAGE                                   │
  // └─────────────────────────────────────────────┘

  trackPageview();

})();
