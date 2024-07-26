import { dataPortfolio } from "@/data"
import Title from "./shared/title"
import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "./ui/button"

const Portafolio = () => {
    return (
        <div className="p-4 max-w-4xl md:py-24 mx-auto" id="portfolio">
            <Title title="Portafolio" subTitle="Trabajos realizados 💼" />

            <div className="grid md:grid-cols-3 gap-14 mt-4">
                { dataPortfolio.map(data => (
                    <div key={data.id}>
                        <h3 className="text-xl mb-4">{ data.title }</h3>
                        <Image src={data.image} alt="Image" width={300} height={300} className="rounded-2xl w-full aspect-[2/2]" />

                        <div className="mt-5 flex gap-5">
                            <Link 
                                href={data.urlGithub} 
                                className={buttonVariants({variant: "outline"})}
                                target="_blank"
                            >Github</Link>

                            <Link
                                href={data.urlDemo} 
                                className={buttonVariants()}
                                target="_blank"
                            >Demo</Link>
                        </div>

                    </div>
                )) }
            </div>
        </div>
    )
}

export default Portafolio