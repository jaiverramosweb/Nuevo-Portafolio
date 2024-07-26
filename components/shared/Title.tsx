
interface Props {
    title: string
    subTitle?: string
}

const Title = ({ title, subTitle }: Props) => {
  return (
    <div className="flex flex-col items-center">
        <h3 className="text-gray-400">{ title }</h3>
        <h2 className="text-3xl">{ subTitle }</h2>
    </div>
  )
}

export default Title