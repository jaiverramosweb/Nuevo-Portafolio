import Link from "next/link"
import Image from "next/image"
import { Mail, Paperclip } from "lucide-react"
import { buttonVariants } from "./ui/button"
import Container from "./shared/Container"

const Introduction = () => {
  return (
    <Container>
        <div className="text-center" id="home">
            <h3 className="text-xl mb-3">Hola, Soy</h3>
            <h1 className="text-4xl font-bold mb-3">Jaiver Ramos 🧑🏽‍💻</h1>
            <h2 className="text-2xl text-gray-400">Desarrollador Web</h2>

            <div className="flex items-center mb-10">
                <div className="flex flex-col md:flex-row gap-4 justify-between mt-10 mx-auto">
                    <Link href="#contact" className={buttonVariants()}>
                        <Mail className="mr-2" /> Contacta conmigo
                    </Link>
                    <Link href="/cv-jaiverramos.pdf" className={buttonVariants({ variant: "secondary" })} target="_black">
                        <Paperclip className="mr-2" /> Descargar CV
                    </Link>
                </div>
            </div>

            <div className="flex justify-center">
                <Image src="/images/jaiver.jpg" alt="imagen" width={250} height={250} className="rounded-full" />
            </div>

        </div>
    </Container>
  )
}

export default Introduction