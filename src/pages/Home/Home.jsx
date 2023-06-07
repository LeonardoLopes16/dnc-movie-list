import { useEffect, useState } from "react";
import { MovieService } from "../../api/MovieService";


const Home = () => {
const [movie, setMovie] = useState([])

  async function getMovies(){
    const data = await MovieService.getMovies();
    console.log(data.data.results);
  }
  useEffect(() => {
    getMovies
  
  })
  
  return (
    <section className="Home">
      {

      }
    </section>
  );
};

export default Home;
