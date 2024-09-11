// components/Game.tsx
"use client";
import { useState, useEffect } from "react";
import GameOverModal from "./GameOverModal";
import LevelUpNotification from "./LevelUpNotification";

type Option = {
  text: string;
  color: string;
};

const colors = [
  "red",
  "blue",
  "green",
  "gray",
  "orange",
  "purple",
  "pink",
  "brown",
  "lime",
];

const getRandomColor = (): string =>
  colors[Math.floor(Math.random() * colors.length)];

const Game: React.FC = () => {
  const [boxColor, setBoxColor] = useState<string>(getRandomColor());
  const [options, setOptions] = useState<Option[]>([]);
  const [round, setRound] = useState<number>(1);
  const [timeLeft, setTimeLeft] = useState<number>(5); // 3 seconds for each round
  const [level, setLevel] = useState<string>("Easy");
  const [score, setScore] = useState<number>(0);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [levelUpVisible, setLevelUpVisible] = useState(false);

  useEffect(() => {
    generateOptions();
  }, [boxColor]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      nextRound(false); // End round with no selection
    }
  }, [timeLeft]);



  const generateOptions = () => {
    const correctText = boxColor;
    let wrongText = getRandomColor();

    // Ensure the wrongText is not the same as the correctText
    while (wrongText === correctText) {
      wrongText = getRandomColor();
    }

    const correctColor = getRandomColor();
    let wrongColor = getRandomColor();

    // Ensure the wrongColor is not the same as the correctColor
    while (wrongColor === correctColor) {
      wrongColor = getRandomColor();
    }

    setOptions(
      [
        { text: correctText, color: wrongColor },
        { text: wrongText, color: correctColor },
      ].sort(() => Math.random() - 0.5)
    ); // Randomize options
  };

  const handleOptionClick = (option: Option) => {
    if (option.text === boxColor) {
      setScore(score + 1); // Increase score
      nextRound(true);
    } else {
      setIsGameOver(true);
      // resetGame(); // Reset game or handle wrong answer
    }
  };

  useEffect(() => {
    let newLevel = "Easy";
    if (score >= 35) newLevel = "God Mode";
    else if (score >= 11) newLevel = "Hard";
    else if (score >= 6) newLevel = "Mid";

    if (newLevel !== level) {
      setLevel(newLevel);
      setLevelUpVisible(true); // Show the notification
    }
  }, [score]);

  const nextRound = (correctAnswer: boolean) => {
    if (!correctAnswer) {
      setIsGameOver(true);
      // resetGame();
    } else {
      setBoxColor(getRandomColor());
      setRound(round + 1);
      // setTimeLeft(3); // Reset the timer to 3 seconds for each round

      // Update level and time based on round number
      if (round >= 45) {
        setTimeLeft(0.6); // God Mode
        setLevel("God Mode");
        // setLevelUpVisible(true)
      } else if (round >= 35) {
        setTimeLeft(1); // Hard Mode
        setLevel("Impossible");
        // setLevelUpVisible(true)
      } else if (round >= 25) {
        setTimeLeft(2); // Hard Mode
        setLevel("Hard");
        // setLevelUpVisible(true)
      } else if (round >= 15) {
        setTimeLeft(3); // Mid Mode
        setLevel("Almost Hard");
        // setLevelUpVisible(true)
      } else {
        setTimeLeft(5); // Easy Mode (default)
        setLevel("Easy");
        // setLevelUpVisible(true)
      }
    }
  };

  const resetGame = () => {
    setRound(1);
    setScore(0);
    setBoxColor(getRandomColor());
    setTimeLeft(5);
    setIsGameOver(false);
    generateOptions();
  };

  return (
    // <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    //   {/* Scoreboard */}
    //   <div className="w-full flex justify-between items-center p-4 fixed top-0">
    //     {/* Difficulty */}
    //     <div className="text-[40px] font-bold text-black">
    //       Level : <span className="text-7xl">{level}</span>{" "}
    //     </div>

    //     {/* Timer */}
    //     <div className="flex-1 text-center text-[40px] font-bold text-black">
    //       Time: <span className="text-7xl">{timeLeft.toFixed(1)}</span> sec
    //     </div>

    //     {/* Score */}
    //     <div className="text-[40px] font-bold text-black">
    //       Score: <span className="text-7xl">{score}</span>{" "}
    //     </div>
    //   </div>

    //   <section className="quizbox mt-14 mb-20 flex justify-center">
    //     <div
    //       className={`w-[1057px] h-[377px] rounded-[70px] p-4 text-white flex items-center justify-center`}
    //       style={{ backgroundColor: boxColor }}
    //     >
    //       <h1 className="text-[140px] text-center leading-[160px]">
    //         What Color Is This Box?
    //       </h1>
    //     </div>
    //   </section>

    //   <div className="flex space-x-4">
    //     {options.map((option, index) => (
    //       <button
    //         className="w-72 text-[90px] text-center rounded-[70px] bg-[#EBE5D5] p-4 flex items-center justify-center border-[6px] border-black"
    //         key={index}
    //         onClick={() => handleOptionClick(option)}
    //         style={{ color: option.color }}
    //       >
    //         {option.text}
    //       </button>
    //     ))}
    //   </div>

    //   <GameOverModal
    //     isOpen={isGameOver}
    //     onClose={resetGame}
    //     score={score}
    //     level={level}
    //   />

    //   {/* <div className="mt-4">
    //     <p>Round: {round}</p>
    //     <p>Score: {score}</p>
    //     <p>Time left: {timeLeft} seconds</p>
    //   </div> */}
    // </div>

    // Responsive Version

    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4">
      {/* Scoreboard */}
      <div className="w-full flex justify-between items-center p-4 bg-gray-300 fixed top-0 sm:text-2xl lg:text-3xl xl:text-4xl">
        <div className="font-bold text-black">Level: {level}</div>

        <div className="flex-1 text-center font-bold text-black">
          Time: {timeLeft.toFixed(1)} sec
        </div>

        <div className="font-bold text-black">Score: {score}</div>
      </div>

      {/* Game Box */}
      <section className="quizbox mt-28 mb-20 flex justify-center w-full max-w-screen-lg">
        <div
          className={`rounded-[70px] p-4 text-white flex items-center justify-center w-full max-w-sm h-48 sm:h-64 lg:h-80 xl:h-96`}
          style={{ backgroundColor: boxColor }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl text-center leading-[normal]">
            What Color Is This Box?
          </h1>
        </div>
      </section>

      {/* Options */}
      <div className="flex space-x-4 mt-8 w-full max-w-screen-lg justify-center">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            className="w-40 h-16 sm:w-48 sm:h-20 lg:w-56 lg:h-24 xl:w-64 xl:h-28 flex items-center justify-center rounded-[40px] bg-white border-[6px] border-black text-xl sm:text-2xl lg:text-3xl xl:text-4xl"
            style={{ color: option.color }}
          >
            {option.text}
          </button>
        ))}
      </div>

      {/* How to Play Button
      <div className="mt-4">
        <button
          onClick={() => setIsHowToPlayOpen(true)}
          className="px-4 py-2 bg-green-500 text-white rounded-md text-lg sm:text-xl lg:text-2xl"
        >
          How to Play
        </button>
      </div> */}

      {/* Game Over Modal */}
      <GameOverModal
        isOpen={isGameOver}
        onClose={resetGame}
        score={score}
        level={level}
      />

      <LevelUpNotification isVisible={levelUpVisible} level={level} />
      {/* How to Play Modal
      <HowToPlayModal
        isOpen={isHowToPlayOpen}
        onClose={() => setIsHowToPlayOpen(false)}
      /> */}
    </div>
  );
};

export default Game;
