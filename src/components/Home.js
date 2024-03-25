import React, { useState } from 'react';
import ElementTransfer from './ElementTransfer';
import NestedList from './NestedList';
import InfiniteScroll from './InfiniteScroll';
import Game from './Game';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(null);

  const buttons = [
    { name: 'Element Transfer Problem', route: 'element-transfer' },
    { name: 'Nested List Component', route: 'nested-list' },
    { name: 'Infinite Scroll', route: 'infinite-scroll' },
    { name: 'Click on the right box', route: 'game' }
  ];
  const [selectedProblom,setSelectedProbloms]=useState(null);

  // Function to handle page navigation
  const navigateToPage = (pageName,i) => {
    setCurrentPage(pageName);
    setSelectedProbloms(i)
  };

  // Render the current page based on currentPage state
  const renderPage = () => {
    switch (currentPage) {
      case 'element-transfer':
        return <ElementTransfer />;
      case 'nested-list':
        return <NestedList />;
      case 'infinite-scroll':
        return <InfiniteScroll />;
      case 'game':
        return < Game/>;
      default:
        return <h3 className='home'>Please select a problem from the list.</h3>;
    }
  };

  return (
    <div className='hole-home-wrap'>
      <h2 className='tittle-probloms'>Problems</h2>
      <div className='problem-list'>
        {buttons.map((button, index) => (
          <button key={index}  className={`${selectedProblom===index?"selected-problom":""}`} onClick={() => navigateToPage(button.route,index)}>
            {button.name}
          </button>
        ))}
      </div>
      <div className='current-page'>
        {/* Render the current page */}
        {renderPage()}
      </div>
    </div>
  );
};

export default Home;
