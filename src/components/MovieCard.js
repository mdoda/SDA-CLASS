import React from 'react';
import logo from '../images/like.png';
import Hashtag from './Hashtag';
import { useNavigate } from 'react-router-dom';
import DeleteButton from './DeleteButton';
import NavigateButton from './NavigateButton';

const MovieCard = ({ movieProps }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/details', { state: movieProps });
  };

  return (
    <div class='max-w-md rounded overflow-hidden shadow-lg h-full'>
      <img
        class='w-full'
        src={`http://localhost:3001/${movieProps.image}`}
        alt='Sunset in the mountains'
        style={{ height: '400px' }}
      />
      <div class='px-6 py-4'>
        <button
          type='button'
          class='text-white bg-transparent hover:bg-red-700/90 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2'
        >
          <div class='flex flex-shrink-0 items-center'>
            <img class='h-8 w-auto' src={logo} alt='Your Company' />
          </div>
        </button>
        <div class='font-bold text-xl mb-2'>{movieProps.title}</div>
        <p class='text-gray-700 text-base'> {movieProps.description}</p>
      </div>
      <NavigateButton label='See Details' onNavigate={handleClick}/>
      <DeleteButton label='Delete'/>
      <div class='px-6 pt-4 pb-2'>
        <Hashtag tag1='action' tag2='drama' tag3='winter' />
      </div>
    </div>
  );
};

export default MovieCard;
