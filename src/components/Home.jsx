import Game from "./Game";

const Home = () => {

    const games = {id: 1, title: "GTA", released: "12-12-12"};
    return(
        <>
        <Game {...games}/>
        </>
    )
}

export default Home