import { useEffect, useState } from "react";

type ScoreScreenProps = {
  score: number;
  total: number;
};

const ScoreScreen = ({ score, total }: ScoreScreenProps) => {
  const finalPercent = Math.round((score / total) * 100);

  // Animated value
  const [displayPercent, setDisplayPercent] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500; // 1.5 seconds
    const stepTime = 15;   
    const increment = finalPercent / (duration / stepTime);

    const counter = setInterval(() => {
      start += increment;
      if (start >= finalPercent) {
        start = finalPercent;
        clearInterval(counter);
      }
      setDisplayPercent(Math.round(start));
    }, stepTime);

    return () => clearInterval(counter);
  }, [finalPercent]);

  return (
    <div className="
      text-center 
      w-full min-h-screen 
      bg-white 
      flex flex-col items-center justify-center
      pt-10
    ">
      
      {/* Subtitle */}
      <p className="text-[20px] text-gray-500 mb-6 tracking-wide font-medium">
        Keep Learning!
      </p>

      {/* Title */}
      <h2 className="
        text-[54px] 
        font-serifHeading italic 
        text-[#1C5C7B] 
        font-bold
        mb-6
      ">
        Your Final score is
      </h2>

      {/* Animated Percentage */}
      <p className="
        text-[130px] 
        font-serifHeading font-bold 
        text-[#1C5C7B]
        leading-none
        mb-12
      ">
        {displayPercent}%
      </p>

      {/* Restart Button */}
      <button
        onClick={() => window.location.reload()}
        className="
          px-12 py-4
          bg-[#cfeffb]
          rounded-xl
          text-[22px]
          font-medium
          shadow-md
          hover:bg-[#b6e6f7]
          transition
        "
      >
        Start Again
      </button>
    </div>
  );
};

export default ScoreScreen;
