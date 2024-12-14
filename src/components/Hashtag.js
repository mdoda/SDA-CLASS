const Hashtag = (props) => {
  return (
    <>
      <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
        #{props.tag1}
      </span>
      <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
        #{props.tag2}
      </span>
      <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
        #{props.tag3}
      </span>
      </>
  );
};

export default Hashtag;
