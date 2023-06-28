const Game = ({id, name, background_image, released, rating, genres}) => {
    return(
        <>
        <div className='relative w-full h-[200px]'>
          <img src={background_image}
          alt={name}
          className="w-full h-full object-cover"/>
        </div>        
        <div className='mt-5 px-5 h-[150px]'>
          <h3 className='text-web-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-web-highlight text-[14px]'>Released: {released}</p>
          <p className='mt-2 text-web-highlight text-[14px]'>Rating: {rating}</p>
        </div>
        <div
        className='mt-4 flex flex-wrap px-5 py-2 gap-2'
        >
          {genres.map((genre) => (
            <p key={genre.name} className={`text-[14px] text-web-light`}>#{genre.name}</p>
          ))}
        </div>
        </>

    )
}

export default Game