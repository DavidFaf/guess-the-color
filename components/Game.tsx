// components/Game.tsx
import { useState, useEffect } from 'react';

type Option = {
  text: string;
  color: string;
};

const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];

const getRandomColor = (): string => colors[Math.floor(Math.random() * colors.length)];

const Game: React.FC = () => {
  const [boxColor, setBoxColor] = useState<string>(getRandomColor());
  const [options, setOptions] = useState<Option[]>([]);
  const [round, setRound] = useState<number>(1);
  const [timeLeft, setTimeLeft] = useState<number>(3); // 3 seconds for each round

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
      nextRound();
    }
  }, [timeLeft]);

  const generateOptions = () => {
    const correctText = boxColor;
    const wrongText = getRandomColor();
    const correctColor = getRandomColor();
    const wrongColor = getRandomColor();

    setOptions([
      { text: correctText, color: wrongColor },
      { text: wrongText, color: correctColor }
    ].sort(() => Math.random() - 0.5)); // Randomize options
  };

  const handleOptionClick = (option: Option) => {
    if (option.text === boxColor) {
      nextRound();
    } else {
      alert('Wrong answer!');
      // Reset game or handle wrong answer
    }
  };

  const nextRound = () => {
    setBoxColor(getRandomColor());
    setRound(round + 1);
    setTimeLeft(3); // Reset the timer to 3 seconds for each round
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div
        className={`w-32 h-32 mb-4`}
        style={{ backgroundColor: boxColor }}
      >color</div>
      <div className="flex space-x-4">
        {options.map((option, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-white border border-gray-300"
            style={{ color: option.color }}
            onClick={() => handleOptionClick(option)}
          >
            {option.text}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <p>Round: {round}</p>
        <p>Time left: {timeLeft} seconds</p>
      </div>
    </div>
  );
};

export default Game;
