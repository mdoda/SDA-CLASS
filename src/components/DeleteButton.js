const DeleteButton = ({ label}) => {
  return (
    <button class='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'>
      {label}
    </button>

  );
};

export default DeleteButton;
