import { useState } from "react";
import { quizData } from "../data/quizData";
import TitleSection from "../shared/TitleSection";
import ProgressBar from "../shared/ProgressBar";
import QuestionCard from "../components/QuestionCard";
import ScoreScreen from "../components/ScoreScreen";

const Quiz = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const current = quizData[currentQ];

  const handleNext = () => {
    if (selected === current.answerIndex) {
      setScore(score + 1);
    }

    if (currentQ === quizData.length - 1) {
      setFinished(true);
      return;
    }

    setCurrentQ(currentQ + 1);
    setSelected(null);
  };

  const handlePrev = () => {
    if (currentQ === 0) return;
    setCurrentQ(currentQ - 1);
    setSelected(null);
  };

  return (
    <>
      {/* --------------------------------------------- */}
      {/* SHOW QUIZ (with boxes) */}
      {/* --------------------------------------------- */}
      {!finished && (
        <div
          className="
            bg-gradient-to-br from-[#d8f0ff] to-[#e8eaff]
            rounded-[40px]
            shadow-[inset_0_12px_24px_rgba(255,255,255,0.6)]
            p-10
            w-full
            max-w-[1750px]
            min-h-[700px]
            mx-auto
            flex items-start justify-center
          "
        >
          <div
            className="
              bg-white/90 backdrop-blur-md
              rounded-[32px]
              shadow-[0_25px_45px_rgba(0,45,95,0.10)]
              p-14
              w-full
              max-w-[1700px]
              min-h-[500px]
              mx-auto
            "
          >
            <TitleSection showPaw={currentQ === 0} />

            <ProgressBar total={quizData.length} current={currentQ + 1} />

            <QuestionCard
              index={currentQ}
              question={current.question}
              options={current.options}
              selectedIndex={selected}
              onSelect={setSelected}
              onNext={handleNext}
              onPrev={handlePrev}
              showPrev={currentQ > 0}
              isLast={currentQ === quizData.length - 1}
            />
          </div>
        </div>
      )}

      {/* --------------------------------------------- */}
      {/* SHOW SCORE SCREEN (NO BOXES – FULL WHITE PAGE) */}
      {/* --------------------------------------------- */}
      {finished && (
        <div className="bg-white w-full min-h-screen flex items-center justify-center">
          <ScoreScreen score={score} total={quizData.length} />
        </div>
      )}
    </>
  );
};

export default Quiz;
