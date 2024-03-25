import React, { useState, useEffect } from 'react';

const InfiniteScroll = () => {

  const [loading, setLoading] = useState(false);
const [data,setData]=useState([
  {
    id:  1,
    title:"POST",
    content: `Content of post `,
  },
  {
    id:  2,
    title:"POST ",
    content: `Content of post `,
  }
  ,  {
    id:  3,
    title:"POST ",
    content: `Content of post `,
  }
])
   // Function to generate new instances of the same three elements
   const generateNewElements = () => {
    return [
      {
        id: data.length + 1,
        title: "POST",
        content: `Content of post`,
      },
      {
        id: data.length + 2,
        title: "POST",
        content: `Content of post`,
      },
      {
        id: data.length + 3,
        title: "POST",
        content: `Content of post`,
      }
    ];
  };

  // Function to load more data
  const loadMoreData = () => {
    setLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      const newData = generateNewElements();
      setData(prevData => [...prevData, ...newData]);
      setLoading(false);
    }, 1500);
  };
  
  
  // Function to load initial data

  // Event listener for scroll
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 20) { // Load more when scrolled near bottom
        loadMoreData();
      }
    };
  
    // Attach scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);
  
    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div>
      <div className='all-data'>
        <div className='hole-post-data'>
          {data.map((post,index )=> (
            <div className='single-data' key={index}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
          ))}
          
        </div>
        <div className='loading-text'>{loading && <p>Loading...</p>}</div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
