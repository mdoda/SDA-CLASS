import {useLocation} from 'react-router-dom';

const MovieDetails = () => {
  const location = useLocation();


  if(!location.state){
    return <h1> No State Available</h1>
  }
  return (
    <div>
  <h1 class="text-4xl">{location.state.title} {location.state.likeCount}</h1>
  <p>{location.state.description} </p>
  <img
        class='w-full'
        src={`http://localhost:3001/${location.state.image}`}
        alt='Sunset in the mountains'
        style={{ height: '400px' }}
      />
  </div>
  ) ;
};

export default MovieDetails;
