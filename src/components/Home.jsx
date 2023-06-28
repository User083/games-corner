import {Game} from "./";
import useAxios from "../hooks/useAxios";
import { GameApp } from "../api";
import axios from "../../public/apis/rawg"



const Home = () => {
    
    const [games, error, loading] = useAxios({
        axiosInstance: axios,
        method: 'GET',
        url: "games" + GameApp.apiKey + GameApp.nrQ + "8",
        requestConfig: {
          timeout : 5000
        }
      });

      console.log(games)

    return(
        <>
            {loading && <p className='text-web-white font-medium animate-pulse'>Loading...</p>}
            {!loading && error && <p className='text-red'>{error}</p>}
        <div className='w-full bg-secondary'>
            {!loading && !error && games &&   

        <div
        className='mt-5 flex flex-wrap gap-10 justify-center'
        >  {games.map((game, index) => (
            <Game
            index={index}
            key={`game-${game.id}`}
            {...game}
            />
        ))}</div>}

        {!loading && !error && !games && <p className='text-web-white'>No results found</p>}
        </div>                    
        </>
    )
}

export default Home