type ProgressBarProps = {
  total: number;
  current: number;
};

const ProgressBar = ({ total, current }: ProgressBarProps) => {
  return (
    <div className="flex justify-center gap-10 mt-6 mb-12">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className="relative w-[165px] h-[6px] bg-gray-300 rounded-full overflow-hidden"
        >
          {/* FILL BAR */}
          <div
            className={`absolute top-0 left-0 h-full rounded-full transition-all duration-500 ${
              i < current ? "bg-[#0F4C68]" : "bg-transparent"
            }`}
            style={{
              width: i < current ? "100%" : "0%",
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
