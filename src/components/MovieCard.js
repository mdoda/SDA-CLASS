import React, { useState } from 'react';
import logo from '../images/like.png';
import Hashtag from './Hashtag';
import { useNavigate } from 'react-router-dom';
import DeleteButton from './DeleteButton';
import NavigateButton from './NavigateButton';
import { useFavoritesStore } from '../store/favoriteMovies';
import { useMovieLikes } from '../store/likeState';


const MovieCard = ({ movieProps }) => {
  //const [likeCount, setLikeCount] = useState(0); // State for like count
  const navigate = useNavigate();
  const addToFavorites = useFavoritesStore((state) => state.addToFavorites);
  const removeFromFavorites = useFavoritesStore((state) => state.removeFromFavorites);
  const addToLikes = useMovieLikes((state) => state.addToLikes);
  const likeCount = useMovieLikes((state) => state.likeCount )
  const favorites = useFavoritesStore((state) => state.favorites);
  const isAlreadyFavorite = favorites.some((fav) => fav.id === movieProps.id);

  const handleClick = () => {
    navigate('/details', { state: {...movieProps} });
  };

  const handleLikeClick = () => {
    addToLikes();
    //setLikeCount(prevCount => prevCount + 1); // Increment the like count
  };

  const handleAddToFavorites = () => {
    if (!isAlreadyFavorite) {
      addToFavorites(movieProps); // Add the current movie to favorites
    }else {
      removeFromFavorites(movieProps)
    }
  };

  return (
    <div className='max-w-md rounded overflow-hidden shadow-lg h-full'>
      <img
        className='w-full'
        src={`http://localhost:3001/${movieProps.image}`}
        alt='Sunset in the mountains'
        style={{ height: '400px' }}
      />
      <div className='px-6 py-4 flex items-center justify-between'>
        {/* Like Button */}
        <button
          type='button'
          onClick={handleLikeClick} // Add the click handler
          className='text-white bg-transparent hover:bg-red-700/90 focus:outline-none font-medium rounded-lg text-sm inline-flex items-center'
        >
          <div className='flex items-center'>
            <img className='h-8 w-auto' src={logo} alt='like' />
          </div>
        </button>
        
        {/* Like Count */}
        <span className='text-gray-800 font-bold text-lg'>{likeCount}</span>
        
      </div>
      <div className='px-6'>
        <div className='font-bold text-xl mb-2'>{movieProps.title}</div>
        <p className='text-gray-700 text-base'>{movieProps.description}</p>
      </div>
      <NavigateButton label='See Details' onNavigate={handleClick} />
      <button   onClick={handleAddToFavorites} class='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full'>
     {isAlreadyFavorite ? 'Remove from Favorites ' : 'Add to Favorites'}
    </button>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
</svg>

      <DeleteButton label='Delete' />
      <div className='px-6 pt-4 pb-2'>
        <Hashtag tag1='action' tag2='drama' tag3='winter' />
      </div>
    </div>
  );
};

export default MovieCard;
