import Title from "./shared/title"


const AboutMe = () => {
  return (
    <div className="p-6 md:px-12 md:py-30 max-w-5xl mx-auto" id="about-me">
        <Title title="Sobre mi" subTitle="Conóceme" />

        <div className="mt-6 border border-white-10 rounded-xl p-4 shadow-md shadow-slate-400 dark:bg-slate-800">
            <p className="text-md">Soy Ingeniero en Informática, con más de 2 años de experiencia en el desarrollo de aplicaciones web, Un desarrollador apacionado continuamente aprendiendo y adquiriendo nuevas habilidades en función a las actuales y futuras demandas y tendencias tecnológicas en el campo del diseño y desarrollo de aplicaciones.</p>
        </div>
    </div>
  )
}

export default AboutMe