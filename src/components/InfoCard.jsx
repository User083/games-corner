
const InfoCard = ({id, name, released, background_image}) => {

    return(
        <div
        className="w-screen h-screen flex justify-center items-center bg-black-100 bg-opacity-50">
        <div className="bg-highlight rounded w-[250px]">

        <h1>{name}</h1>
        <h1>{released}</h1>
        <h1>{id}</h1>

        </div>
        </div>
    )
}

export default InfoCard