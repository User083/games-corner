import {Game, InfoCard} from "./";
import useAxios from "../hooks/useAxios";
import { GameApp } from "../api";
import axios from "../../public/apis/rawg"
// import { useState } from "react";
import {loader} from "../assets"
// import { motion } from "framer-motion";


const Home = () => {
    const [option, setOption] = useState("");
    // const [selected, setSelected] = useState(null);
    const [games, error, loading, refetch] = useAxios({
        axiosInstance: axios,
        method: 'GET',
        url: "games" + GameApp.apiKey + GameApp.nrQ + "10" + option,
        requestConfig: {
          timeout : 5000
        }
      });
      
    return(
        <>
         <div className='w-full xl:w-screen bg-black-100 flex flex-col justify-evenly items-center py-10'>
         <div className='flex flex-wrap gap-10 py-10 '>
      <h1 className='text-highlight font-bold text-2xl'>Filter Games by...</h1>
        <div>
    <button 
      className='py-2 px-4 bg-primary rounded hover:animate-pulse font-medium text-white-100'
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
      className='py-2 px-4 bg-primary rounded hover:animate-pulse font-medium text-white-100'
      onClick={() =>
        {
          setOption(GameApp.updated);
          refetch()
        }}
     >Recently Updated</button>
    </div>
    </div>
    </div> 
     {/* <motion.div
        className="z-10 mt-20 flex justify-center items-start max-w-[1500px] max-h-[1000px] bg-white">
          <button className="bg-primary hover:animate-pulse rounded z-2 py-1 px-1"
          onClick={() => setSelected(null)}>X</button>
          <InfoCard {...selected}/>
        </motion.div> */}
    <div className='bg-black-100 flex flex-wrap justify-center items-center w-full'>
   
            {loading && <img src={loader} className="animate-spin h-[50px]"/>}
            {!loading && error && <p className='text-secondary text-center font-medium'>{error}</p>}
        <div className='w-full bg-black-100'>
          
            {!loading && !error && games &&   

        <div
        className='mt-5 flex flex-wrap gap-10 justify-center'
        >  {games.map((game, index) => (
            <Game
            index={index}
            key={game.id}
            {...game}
            
            />
        ))}
      
        
        </div>}
        {!loading && !error && !games && <p className='text-highlight'>No results found</p>}
        </div>
        </div>                
        </>
    )
}

export default Home