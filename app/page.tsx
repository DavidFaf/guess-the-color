// "use client";
// import HowToPlayModal from "@components/HowToPlayModal";
// import { useRouter, notFound } from "next/navigation";
// import React, { useState } from "react";

// const page = () => {
//   const [isHowToPlayOpen, setIsHowToPlayOpen] = useState<boolean>(false);
//   const router = useRouter();
//   const startGame = () => {
//     router.push("/games/");
//   };
//   return (
//     <div>
//       <section className="quizbox mt-14 mb-10 flex justify-center">
//         <div className="w-[1057px] h-[377px] rounded-[70px] bg-red p-4 text-white flex items-center justify-center">
//           <h1 className="text-[140px] text-center leading-[160px]">
//             What Color Is This Box ?
//           </h1>
//         </div>
//       </section>
//       <section>
//         <div className="flex justify-center items-center mb-10">
//           <div className="w-[542px] h-[252px] rounded-[70px] bg-orange p-4 text-white flex items-center justify-center border-[6px] border-black">
//             <button
//               onClick={startGame}
//               className="text-[90px] text-center text-red"
//             >
//               START GAME
//             </button>
//           </div>
//         </div>
//         <div className="flex justify-center items-center">
//           {/* <button className="w-[243px] h-[93px] border-[4px] border-black text-[40px] bg-blue-500 text-white font-bold py-2 px-4 rounded-full mx-2">
//             How to play
//           </button> */}
//           <p
//             onClick={() => setIsHowToPlayOpen(true)}
//             className="text-4xl cursor-pointer hover:underline"
//           >
//             How to play
//           </p>
//         </div>

//         <HowToPlayModal
//           isOpen={isHowToPlayOpen}
//           onClose={() => setIsHowToPlayOpen(false)} // Close How to Play modal
//         />
//       </section>
//     </div>
//   );
// };

// export default page;

// Resonsive version
"use client";
import HowToPlayModal from "@components/HowToPlayModal";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const [isHowToPlayOpen, setIsHowToPlayOpen] = useState<boolean>(false);
  const router = useRouter();

  const startGame = () => {
    router.push("/games/");
  };

  return (
    <div className="px-4"> {/* Add padding for mobile view */}
      {/* Main Heading */}
      <section className="quizbox mt-14 mb-10 flex justify-center">
        <div className="w-full max-w-[1057px] h-[200px] sm:h-[250px] lg:h-[377px] rounded-[40px] sm:rounded-[70px] bg-red p-4 text-white flex items-center justify-center">
          <h1 className="text-4xl sm:text-6xl lg:text-[140px] text-center leading-tight lg:leading-[160px]">
            What Color Is This Box?
          </h1>
        </div>
      </section>

      {/* Start Game Button */}
      <section>
        <div className="flex justify-center items-center mb-10">
          <div className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[542px] h-[150px] sm:h-[180px] lg:h-[252px] rounded-[40px] sm:rounded-[70px] bg-orange p-4 text-white flex items-center justify-center border-[4px] sm:border-[6px] border-black">
            <button
              onClick={startGame}
              className="text-3xl sm:text-6xl lg:text-[90px] text-center text-red"
            >
              START GAME
            </button>
          </div>
        </div>

        {/* How to Play Button */}
        <div className="flex justify-center items-center">
          <p
            onClick={() => setIsHowToPlayOpen(true)}
            className="text-2xl sm:text-3xl lg:text-4xl cursor-pointer hover:underline"
          >
            How to play
          </p>
        </div>

        {/* How to Play Modal */}
        <HowToPlayModal
          isOpen={isHowToPlayOpen}
          onClose={() => setIsHowToPlayOpen(false)} // Close How to Play modal
        />
      </section>
    </div>
  );
};

export default Page;
