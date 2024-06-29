import React from "react";

const page = () => {
  return (
    <div>
      <section className="quizbox mt-14 mb-20 flex justify-center">
        <div className="w-[1057px] h-[377px] rounded-[70px] bg-red p-4 text-white flex items-center justify-center">
          <h1 className="text-[140px] text-center leading-[160px]">
            What Color Is This Box ?
          </h1>
        </div>
      </section>
      <section>
        <div className="flex justify-center items-center">
          <button className="w-[243px] h-[93px] border-[4px] border-black text-[40px] bg-blue-500 text-white font-bold py-2 px-4 rounded-full mx-2">
            How to play
          </button>
          <div className="w-[542px] h-[252px] rounded-[70px] bg-orange p-4 text-white flex items-center justify-center border-[6px] border-black">
            <button className="text-[90px] text-center text-red">
              START GAME
            </button>
          </div>
          <button className="w-[243px] h-[93px] border-[4px] border-black text-[40px] bg-blue-500 text-white font-bold py-2 px-4 rounded-full mx-2">
            Highscore
          </button>
        </div>
      </section>
    </div>
  );
};

export default page;
