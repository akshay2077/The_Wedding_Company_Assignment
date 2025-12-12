// type OptionButtonProps = {
//   label: string;
//   selected: boolean;
//   onClick: () => void;
//   variant: number;
// };

// const gradients = [
//   "from-[#ffffff] to-[#f1f9ff]",
//   "from-[#f7fcff] to-[#e4f3ff]",
//   "from-[#eff9ff] to-[#d8edff]",
// ];

// const OptionButton = ({ label, selected, onClick, variant }: OptionButtonProps) => {
//   return (
//     <button
//       onClick={onClick}
//       className={`
//   w-full h-[72px]
//   flex items-center justify-center
//   rounded-xl
//   border ${selected ? "border-brandBlue" : "border-[#c9dff3]"}
//   bg-gradient-to-r ${gradients[variant]}
//   text-gray-700 text-[18px] font-medium
//   shadow-sm hover:shadow-md transition-all
//   ${selected ? "scale-[1.03]" : ""}
// `}

//     >
//       {label}
//     </button>
//   );
// };



// export default OptionButton;


type OptionButtonProps = {
  label: string;
  selected: boolean;
  onClick: () => void;
  variant: number;
};

const gradients = [
  "from-[#F0FBFF] to-[#F0FBFF]",
  "from-[#F0FBFF] to-[#F0FBFF]",
  "from-[#F0FBFF] to-[#F0FBFF]",
];

const selectedGradients = [
  "from-[#DAF1FA] to-[#E9F9FE]",
  "from-[#DAF1FA] to-[#E9F9FE]",
  "from-[#DAF1FA] to-[#E9F9FE]",
];

const OptionButton = ({ label, selected, onClick, variant }: OptionButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
         w-[55%] mx-auto
         h-[85px]
        flex items-center justify-center
        rounded-lg
        border ${selected ? "border-[#c9dff3]" : "border-[#c9dff3]"}
        bg-gradient-to-r ${selected ? selectedGradients[variant] : gradients[variant]}
        text-gray-700 text-[18px] font-medium
        shadow-sm hover:shadow-md transition-all
        ${selected ? "scale-[1.03]" : ""}
      `}
    >
      {label}
    </button>
  );
};

export default OptionButton;
