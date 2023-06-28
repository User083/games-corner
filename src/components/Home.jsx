import {Game} from "./";
import useAxios from "../hooks/useAxios";
import { GameApp } from "../api";
import axios from "../../public/apis/rawg"
import { useState } from "react";

const Home = () => {
    const [option, setOption] = useState("");
    const [games, error, loading, refetch] = useAxios({
        axiosInstance: axios,
        method: 'GET',
        url: "games" + GameApp.apiKey + GameApp.nrQ + "8" + option,
        requestConfig: {
          timeout : 5000
        }
      });

    return(
        <>
         <div className='w-full xl:w-screen bg-black-100 flex flex-col justify-evenly items-center py-10 px-5'>
         <div className='flex flex-wrap gap-10 py-10 '>
      <h1 className='text-highlight font-bold text-4xl'>Filter Games by...</h1>
        <div>
    <button 
      className='py-2 px-6 bg-primary rounded hover:animate-pulse'
      onClick={() =>
        {
          setOption(GameApp.ratings);
          refetch()
        }
        }
     >Highest Rated</button>
    </div>
    <div>
    <button 
      className='py-2 px-6 bg-secondary rounded hover:animate-pulse'
      onClick={() =>
        {
          setOption(GameApp.updated);
          refetch()
        }}
     >Recently Updated</button>
    </div>
    </div>
    </div> 
    <div className='bg-black-100'>
            {loading && <p className='text-highlight font-medium animate-pulse'>Loading...</p>}
            {!loading && error && <p className='text-red'>{error}</p>}
        <div className='w-full bg-black-100'>
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

        {!loading && !error && !games && <p className='text-highlight'>No results found</p>}
        </div>
        </div>                
        </>
    )
}

export default Home