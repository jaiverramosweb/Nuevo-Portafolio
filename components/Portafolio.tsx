import { dataPortfolio } from "@/data"
import Title from "@/components/shared/Title"
import Image from "next/image"
import Link from "next/link"
import { Button, buttonVariants } from "./ui/button"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

const Portafolio = () => {
    return (
        <div className="p-4 max-w-4xl md:py-24 mx-auto" id="portfolio">
            <Title title="Portafolio" subTitle="Trabajos realizados 💼" />

            <div className="grid md:grid-cols-3 gap-14 mt-4">
                { dataPortfolio.map(data => (
                    <div key={data.id}>
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl mb-4">{ data.title }</h3> 
                            <span>{ data.is_public == true ? <span className="p-2 border rounded-md bg-green-600">Publicado</span> : <span  className="p-2 border rounded-md bg-red-600">No publicado</span> }</span>
                        </div>

                        <Image src={data.image} alt="Image" width={300} height={300} className="rounded-2xl w-full aspect-[2/2]" />

                        <div className="mt-5 flex gap-5">

                        <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline">Detalle</Button>
                        </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Breve descripción del proyecto { data.title }</DialogTitle>
                                    <DialogDescription>
                                        <p className="mb-4">
                                            { data.details }
                                        </p>
                                        <ul>
                                            { data.tecnology?.map(tecno => (
                                                <li key={tecno.id}>
                                                    { tecno.title } { tecno.url }
                                                </li>
                                            )) }
                                        </ul>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>

                            { data.urlGithub !== '' && (
                                <Link 
                                    href={data.urlGithub} 
                                    className={buttonVariants({variant: "outline"})}
                                    target="_blank"
                                >Github</Link>
                            )} 

                            { data.urlDemo !== '' && (
                                <Link
                                    href={data.urlDemo} 
                                    className={buttonVariants()}
                                    target="_blank"
                                >Demo</Link>
                            ) }

                        </div>

                    </div>
                )) }
            </div>
        </div>
    )
}

export default Portafolio