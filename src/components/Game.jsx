const Game = ({id, name, background_image, released, rating, genres}) => {
    return(
        <>
        <div className="bg-black-100 sm:w-[250px] w-full shadow-card rounded">

                  <div className='relative w-full h-[200px]'>
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

        </>

    )
}

export default Game