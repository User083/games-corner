import { motion } from "framer-motion"
import { useState } from "react"

const Game = ({id, name, background_image, released, rating, genres}) => {

    return(
        <>
                <motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 360, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20}}
  whileHover={{ scale: 1.2}}
  whileTap={{
    rotate: -10,
    borderRadius: "100%"
  }}
>
        <div className="bg-black-100 sm:w-[250px] w-full shadow-card rounded">

                  <div className='relative w-full h-[250px]'>
          <img src={background_image}
          alt={name}
          className="w-full h-full object-cover"/>
        </div>        
        <div className='mt-5 px-5 h-[150px]'>
          <h3 className='text-white-100 font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary font-mono text-[14px]'>Released: {released}</p>
          <p className='mt-2 text-secondary font-mono text-[14px]'>Rating: {rating}</p>
        </div>
        <div
        className='mt-4 flex flex-wrap px-5 py-2 gap-2'
        >
          {genres.map((genre) => (
            <p key={genre.name} className={`text-[10px] text-tertiary`}>+{genre.name}</p>
          ))}
        </div>  
        </div>
        </motion.div>
        </>

    )
}

export default Game