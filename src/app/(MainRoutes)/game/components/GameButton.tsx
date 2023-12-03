// import { Questions } from "@/config/Questions";
// import { UseZustand } from "@/config/UseZustand";
// import React, { FC, useState } from "react";
// import { useRouter } from "next/navigation";

// type TGameButtonProp = {
//   text: string;
// };
// const GameButton: FC<TGameButtonProp> = ({ text }) => {
//   const { setData } = UseZustand();
//   const [count, setCount] = useState(1);
//   const router = useRouter();
//   console.log(count);
//   return (
//     <button
//       onClick={() => {
//         setData(
//           Questions[0].quests[count].options
//         );
//         // @ts-ignore
//         document.getElementById("my_modal_2")?.showModal();
//         if (count === 4) {
//           router.push("/main");
//         }

//         setCount((prev) => prev + 1);
//       }}
//       className={`rounded-xl relative inline-flex group items-center justify-center px-3.5 py-3.5 m-1 cursor-pointer border-b-4 border-l-2 active:border-[#] active:shadow-none shadow-lg bg-gradient-to-tr from-[#] to-[#] border-[#] text-black h-[158px] w-[150px]`}
//     >
//       <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
//       <span className="relative">{text}</span>
//     </button>
//   );
// };

// export default GameButton;
