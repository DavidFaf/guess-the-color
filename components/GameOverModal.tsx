import React from "react";
import { useRouter } from "next/navigation";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  score: number;
  level: string;
};

const GameOverModal: React.FC<ModalProps> = ({ isOpen, onClose, score, level }) => {
  const router = useRouter();

  if (!isOpen) return null;

  const handleExit = () => {
    router.push("/"); // Navigate to the home page
  };

  return (
    // <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50">
    //   <div className="bg-white p-8 rounded-[25px] shadow-lg w-1/3">
    //     <h2 className="text-6xl font-bold text-center mb-4">Game Over!</h2>
    //     <p className="text-3xl text-center mb-4">Score: {score}</p>
    //     <p className="text-3xl text-center mb-8">Highest Level: {level}</p>
    //     <div className="flex justify-center">
    //       <button
    //         onClick={onClose}
    //         className="px-4 py-2 bg-blue-500 text-white text-5xl rounded-[20px]"
    //       >
    //         Play Again
    //       </button>
         
    //     </div>
    //      <button 
    //         onClick={handleExit}
    //         className="text-sm px-4 py-2 bg-red-500 text-red rounded-md"
    //       >
    //         Exit
    //       </button>
    //   </div>
    // </div>

    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50 px-4"> {/* Added padding for small screens */}
      <div className="bg-white p-4 sm:p-6 md:p-8 rounded-[25px] shadow-lg w-full max-w-md sm:max-w-lg md:max-w-2xl"> {/* Adjust width for different screen sizes */}
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-4">Game Over!</h2> {/* Responsive text size */}
        <p className="text-xl sm:text-2xl md:text-3xl text-center mb-4">Score: {score}</p> {/* Responsive score text */}
        <p className="text-xl sm:text-2xl md:text-3xl text-center mb-8">Highest Level: {level}</p> {/* Responsive level text */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-blue-500 text-white text-lg sm:text-2xl md:text-5xl rounded-[20px] w-full sm:w-auto"
          >
            Play Again
          </button>
          <button
            onClick={handleExit}
            className="px-4 py-2 bg-red-500 text-red text-lg rounded-md w-full sm:w-auto"
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameOverModal;


// RESPONSIVE VERSION

// import React from "react";
// import { useRouter } from "next/navigation";

// type ModalProps = {
//   isOpen: boolean;
//   onClose: () => void;
//   score: number;
//   level: string;
// };

// const GameOverModal: React.FC<ModalProps> = ({ isOpen, onClose, score, level }) => {
//   const router = useRouter();

//   if (!isOpen) return null;

//   const handleExit = () => {
//     router.push("/"); // Navigate to the home page
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50 px-4"> 
//       <div className="bg-white p-4 sm:p-6 md:p-8 rounded-[25px] shadow-lg w-full max-w-md sm:max-w-lg md:max-w-2xl"> {/* Adjust width for different screen sizes */}
//         <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-4">Game Over!</h2> {/* Responsive text size */}
//         <p className="text-xl sm:text-2xl md:text-3xl text-center mb-4">Score: {score}</p> {/* Responsive score text */}
//         <p className="text-xl sm:text-2xl md:text-3xl text-center mb-8">Highest Level: {level}</p> {/* Responsive level text */}
//         <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
//           <button
//             onClick={onClose}
//             className="px-6 py-3 bg-blue-500 text-white text-lg sm:text-2xl md:text-5xl rounded-[20px] w-full sm:w-auto" {/* Button width and text scaling */}
//           >
//             Play Again
//           </button>
//           <button
//             onClick={handleExit}
//             className="px-4 py-2 bg-red-500 text-white text-lg rounded-md w-full sm:w-auto" {/* Button width and text scaling */}
//           >
//             Exit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GameOverModal;
