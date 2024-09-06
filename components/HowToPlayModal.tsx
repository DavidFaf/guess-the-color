// import React from "react";

// type HowToPlayModalProps = {
//   isOpen: boolean;
//   onClose: () => void;
// };

// const HowToPlayModal: React.FC<HowToPlayModalProps> = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
//         <h2 className="text-4xl font-bold text-center mb-4">How to Play</h2>
//         <p className="text-2xl mb-4">
//           - A box will appear on the screen with a specific color.
//           <br />
//           - Two options will be presented below the box.
//           <br />
//           - Your goal is to click the option with the correct color name that matches the box.
//           <br />
//           - The text color of the options is intentionally misleading.
//           <br />
//           - The game gets progressively harder as you answer more questions.
//           <br />
//           - Try to reach the highest level and score as much as possible!
//         </p>
//         <div className="flex justify-center">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 bg-blue-500 text-white rounded-md"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HowToPlayModal;

// Responsive version

import React from "react";

type HowToPlayModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const HowToPlayModal: React.FC<HowToPlayModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4"> {/* Added px-4 for small screen padding */}
      <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg w-full max-w-lg sm:max-w-xl md:max-w-2xl"> {/* Adjusted width for different screens */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4"> {/* Scaled text size */}
          How to Play
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl mb-4"> {/* Scaled paragraph text */}
          - A box will appear on the screen with a specific color.
          <br />
          - Two options will be presented below the box.
          <br />
          - Your goal is to click the option with the correct color name that matches the box.
          <br />
          - The text color of the options is intentionally misleading.
          <br />
          - The game gets progressively harder as you answer more questions.
          <br />
          - Try to reach the highest level and score as much as possible!
        </p>
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-blue-500 text-white rounded-md text-lg sm:text-xl"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowToPlayModal;
