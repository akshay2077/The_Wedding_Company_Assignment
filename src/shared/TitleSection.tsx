import pawImg from "../assets/paw.gif"; // paw image

type TitleSectionProps = {
  showPaw: boolean; // 👈 NEW PROP
};

const TitleSection = ({ showPaw }: TitleSectionProps) => (
  <div className="relative text-center mt-4 mb-10">

    {/* ------------------ MAIN TITLE ------------------ */}
    <h1
      className="
        text-[64px] font-serifHeading italic font-bold
        text-[#318AAF]
        leading-[1.05] tracking-wide
      "
    >
      Test Your Knowledge
    </h1>

    {/* ------------------ SUBTITLE ------------------ */}
    <div className="mt-3 flex justify-center">
      <p
        className="
          bg-white px-6 py-2 
          rounded-xl shadow-sm
          text-[18px] text-[#0b0b0b] font-medium
        "
      >
        Answer all questions to see your results
      </p>
    </div>

    {/* ------------------ PAW + BUBBLE (ONLY WHEN showPaw = TRUE) ------------------ */}
    {showPaw && (
      <div className="absolute left-[-20px] bottom-[-620px] flex flex-col items-center">

        {/* Speech Bubble */}
        <div
          className="
            relative
            bg-white 
            px-7 py-3
            rounded-[22px]
            shadow-md
            border-[3px] border-[#64B5D9]
            inline-block
            translate-x-[-120px]
            rotate-[-3deg]
          "
        >
          <span
            className="
              inline-block
              rotate-[3deg]
              text-[24px]
              text-[#0C4A6E]
              font-bold
              italic
              tracking-wide
              font-['Comic_Neue']
            "
          >
            Best of Luck!
          </span>

          {/* Bubble Tail */}
          <div
            className="
              absolute 
              left-[55%]
              bottom-[-14px]
              w-5 h-5 bg-white
              border-b-[3px] border-l-[3px] border-[#64B5D9]
              rotate-[-45deg]
            "
          ></div>
        </div>

        {/* Animated Paw */}
        <img
          src={pawImg}
          alt="paw"
          className="
            w-[180px] 
            animate-bounce-slow
          "
        />
      </div>
    )}
  </div>
);

export default TitleSection;
