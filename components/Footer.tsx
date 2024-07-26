import Link from "next/link"
import { Separator } from "./ui/separator"

const Footer = () => {
  return (
    <footer className="max-w-3xl mx-auto">

        <Separator className="my-4" />

        <div className="md:flex md:justify-between">
            <div>
                <h4 className="text-3xl font-bold my-6 md:my-0">Jaiver Ramos</h4>
            </div>
            <div className="px-2 flex justify-between md:gap-8 items-center">
                <Link href="#home">Inicio</Link>
                <Link href="#about-me">Sobre mi</Link>
                <Link href="#portfolio">Portafolio</Link>
                <Link href="#contact">Contactame</Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer