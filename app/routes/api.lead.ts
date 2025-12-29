// app/routes/api.lead.ts
import type { ActionFunctionArgs } from "react-router";

export async function action({ request }: ActionFunctionArgs) {
    if (request.method !== "POST") {
        return new Response(
            JSON.stringify({ error: "Méthode non autorisée" }),
            {
                status: 405,
                headers: { "Content-Type": "application/json" },
            }
        );
    }

    const body = await request.json().catch(() => null);
    const { firstname, lastname, email, phone } = (body || {}) as {
        firstname?: string;
        lastname?: string;
        email?: string;
        phone?: string;
    };

    if (!firstname || !lastname || !email) {
        return new Response(
            JSON.stringify({
                error: "firstname, lastname, email obligatoires",
            }),
            {
                status: 400,
                headers: { "Content-Type": "application/json" },
            }
        );
    }

    const lead = { firstname, lastname, email, phone };
    console.log("💡 Nouveau lead (React Router API) :", lead);

    return new Response(JSON.stringify({ ok: true, lead }), {
        status: 201,
        headers: { "Content-Type": "application/json" },
    });
}