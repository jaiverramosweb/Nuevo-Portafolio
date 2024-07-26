import { Resend } from "resend"
import { EmailTemplate } from "@/components/EmailTemplate"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    try {
        const dataForm = await req.json()

        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['jaiver.ramos7942@gmail.com'],
            subject: "Pagina del portafolio",
            react: EmailTemplate({ 
                firstName: dataForm.username,
                message: dataForm.message,
                email: dataForm.email,
            }),
            text: "Jaiver Ramos"
        })

        if (error) {
            return Response.json(error);
        }
    
        return Response.json(data);

    } catch (error) {
        console.log(error)
        return Response.json({ message: "a ocurrido un error" })
    }
}