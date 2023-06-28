import Game from "./Game";
const Home = () => {

    const games = [{id: 1, title: "GTA", released: "12-12-12"}];
    return(
        <>
        <div className="bg-black">
            {games.map((game) => {
                <Game key={game.id} {...game}/>
            })}
        </div>
        </>
    )
}

export default Home