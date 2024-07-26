import { dataExperience } from "@/data"
import Title from "./shared/title"
import { BadgeCheck } from "lucide-react"

const Experience = () => {
  return (
    <div className="p-6 md:px-12 md:py-28 max-w-5xl mx-auto">
        <Title title="Experiencia" subTitle="Skills que tengo"/>

        <div className="grid md:grid-cols-2 gap-2 mt-5">
            { dataExperience.map(data => (
                <div key={data.id} className="p-6 rounded-xl border border-gray-400">
                    <h3 className="text-center text-xl">{ data.title }</h3>
                    <div className="grid md:grid-cols-2 gap-4 justify-center items-center">
                        { data.experience.map(item => (
                            <div key={item.name} className="my-2 text-center">
                                <p className="flex gap-2 mb-2"> 
                                    { item.icon }
                                    { item.name }
                                </p>
                            </div>
                        )) }
                    </div>
                </div>
            )) }
        </div>
    </div>
  )
}

export default Experience