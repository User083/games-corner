import {Game} from "./";
// import  {fakeList}  from "../fakeData";

const Home = () => {

    const fakeList = 
    {id: 1, name: "GTA", background_image: "", released: "12-12-12", rating: 3, genres: [{name: "Action"}, {name:"Adventure"}]};
    return(
        <>
        <div className='w-full bg-secondary'>
    
            <Game key={fakeList.id} {...fakeList}/>
          
  
        </div>
        </>
    )
}

export default Home