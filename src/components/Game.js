import React, { useState, useEffect } from 'react';


const Game = () => {
  const keywords = "HIT";
  const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60); // 1 minute
  const [gameOver, setGameOver] = useState(false);
  const box = [...Array(9)];
  const boxCount = 9;
  useEffect(() => {
    const timerId = setTimeout(() => {
      // Generate a random index for the keyword
      const randomIndex = Math.floor(Math.random() * boxCount);
      setCurrentKeywordIndex(randomIndex);
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);
  
    return () => clearTimeout(timerId);
  }, [currentKeywordIndex, timeLeft]);

  const handleClick = (clickedIndex) => {
    if (clickedIndex === currentKeywordIndex) {
      setScore((prevScore) => prevScore + 5);
    } else {
      if(score!==0){
        setScore((prevScore) => prevScore - 2.5);
      }
 
    }
  };

  useEffect(() => {
    if (timeLeft === 0) {
      setGameOver(true);
    }
  }, [timeLeft]);

  if (gameOver) {
    return (
      <div className="game-over">
        <h2>Game Over!</h2>
        <p>Your final score is: {score}</p>
      </div>
    );
  }

  return (
    <div className='hole-game-container'>
    <div className="box-game">
      <p>Time Left: {timeLeft} seconds</p>
      <p>Score: {score}</p>
      <div className="box-container">
        {box.map((_, index) => (
          <div key={index} className="box" onClick={() => handleClick(index)}>
            {currentKeywordIndex === index && <span className="keyword">{keywords}</span>}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Game;
