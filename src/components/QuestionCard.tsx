// import OptionButton from "./OptionButton";

// type QuestionCardProps = {
//   index: number;
//   question: string;
//   options: string[];
//   selectedIndex: number | null;
//   onSelect: (index: number) => void;
//   onNext: () => void;
//   onPrev: () => void;
//   showPrev: boolean;
//   isLast: boolean;
// };

// const QuestionCard = ({
//   index,
//   question,
//   options,
//   selectedIndex,
//   onSelect,
//   // onNext,
//   // onPrev,
//   showPrev,
// }: QuestionCardProps) => {
// return (
//   <div className="w-full flex flex-col items-center mt-12 gap-10">

//     {/* QUESTION BOX */}
//     <div className="
//       bg-gradient-to-r from-[#d8ecff] to-[#c8e2ff]
//       rounded-xl
//       py-5
//       w-[85%]
//       text-center text-gray-700 font-semibold text-[18px]
//       border border-[#bcd7f3]
//       shadow-[inset_0_4px_8px_rgba(255,255,255,0.6)]
//     ">
//       {index + 1}. {question}
//     </div>

//     {/* OPTIONS BOX */}
//     <div className="
//       bg-gradient-to-b from-[#e8f4ff] to-[#d4e9ff]
//       rounded-2xl
//       border border-[#bcd7f3]
//       shadow-[0px_18px_40px_rgba(0,0,0,0.08), inset_0px_6px_12px_rgba(255,255,255,0.6)]
//       w-[88%]
//       px-14 py-10
//       flex flex-col gap-7
//     ">
//       {options.map((op, i) => (
//         <OptionButton
//           key={i}
//           label={op}
//           selected={selectedIndex === i}
//           variant={i}
//           onClick={() => onSelect(i)}
//         />
//       ))}
//     </div>

//     {/* NAV BUTTONS */}
//     <div className="flex justify-end w-[88%] mt-8 gap-4">
//       {showPrev && (
//         <button className="w-12 h-12 rounded-lg bg-white/80 border shadow">←</button>
//       )}
//       <button className="w-12 h-12 rounded-lg bg-white/80 border shadow">→</button>
//     </div>

//   </div>
// );

// };

// export default QuestionCard;



import OptionButton from "./OptionButton";

type QuestionCardProps = {
  index: number;
  question: string;
  options: string[];
  selectedIndex: number | null;
  onSelect: (index: number) => void;
  onNext: () => void;
  onPrev: () => void;
  showPrev: boolean;
  isLast: boolean;
};

const QuestionCard = ({
  index,
  question,
  options,
  selectedIndex,
  onSelect,
  onNext,
  onPrev,
  showPrev,
  isLast,   // <-- FIXED
}: QuestionCardProps) => {

  return (
    <div className="mt-6">

      {/* QUESTION HEADER – SHORTER, CLEANER */}
     <div
  className="
    bg-gradient-to-r from-[#C8EAF8] to-[#E1F6FE]
    rounded-lg
    py-7

    text-center text-gray-700 font-semibold text-[20px]
    border border-[#bcd7f3]
    w-[55%] mx-auto            /* 🔥 NEW: reduce width + center */
  "
>
  {index + 1}. {question}
</div>


      {/* OPTIONS OUTER BOX — COMPACT HEIGHT */}
      <div className="mt-5 flex flex-col items-center gap-4">
        {options.map((op, i) => (
          <OptionButton
            key={i}
            label={op}
            selected={selectedIndex === i}
            variant={i}
            onClick={() => onSelect(i)}
          />
        ))}
      </div>

      {/* NAVIGATION */}
{/* NAVIGATION */}
<div className="w-[55%] mx-auto flex justify-end mt-8 gap-4">
  
  {/* ← Only show if NOT first question */}
  {showPrev && !isLast && (
    <button
      onClick={onPrev}
      className="
        w-14 h-14
        flex items-center justify-center
        bg-[#DFF5FD]
        border border-[#bcd7f3]
        rounded-xl
        shadow-md hover:shadow-lg
        hover:bg-[#CCEAF5]
        transition
        text-[22px] font-bold text-[#0C4A6E]
      "
    >
      ←
    </button>
  )}

  {/* If NOT last question → show → arrow */}
  {!isLast && (
    <button
      onClick={onNext}
      className="
        w-14 h-14
        flex items-center justify-center
        bg-[#DFF5FD]
        border border-[#bcd7f3]
        rounded-xl
        shadow-md hover:shadow-lg
        hover:bg-[#CCEAF5]
        transition
        text-[22px] font-bold text-[#0C4A6E]
      "
    >
      →
    </button>
  )}

  {/* If LAST question → show Submit button */}
  {isLast && (
    <button
      onClick={onNext}
      className="
        px-8 py-3
        bg-[#DFF5FD]
        border border-[#bcd7f3]
        rounded-xl
        shadow-md hover:shadow-lg
        hover:bg-[#CCEAF5]
        transition
        text-[20px] font-semibold text-[#0C4A6E]
      "
    >
      Submit
    </button>
  )}

</div>


    </div>
  );
};

export default QuestionCard;
