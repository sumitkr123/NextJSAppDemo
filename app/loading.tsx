import { FunctionComponent } from "react";

type LoadingProps = {};

const Loading: FunctionComponent<LoadingProps> = () => {
  return (
    <div className="fixed z-50 bg-slate-900 bg-opacity-50 top-0 left-0 w-full h-full flex justify-center items-center">
      <div className="flex flex-row items-center justify-center gap-2">
        <p className="text-light-1 bg-red-500 text-[30px] animate-bounce w-11 h-11 text-center rounded-full">
          L
        </p>
        <p className="text-light-1 bg-yellow-500 text-[30px] animate-bounce-down w-11 h-11 text-center rounded-full">
          O
        </p>
        <p className="text-light-1 bg-cyan-500 text-[30px] animate-bounce w-11 h-11 text-center rounded-full">
          A
        </p>
        <p className="text-light-1 bg-indigo-500 text-[30px] animate-ping w-11 h-11 text-center rounded-full">
          D
        </p>
        <p className="text-light-1 bg-yellow-500 mx-2 text-[30px] animate-bounce-down w-11 h-11 text-center rounded-full">
          I
        </p>
        <p className="text-light-1 bg-amber-500 text-[30px] animate-bounce w-11 h-11 text-center rounded-full">
          N
        </p>
        <p className="text-light-1 bg-lime-500 text-[30px] font-serif animate-bounce-down w-11 h-11 text-center rounded-full">
          G
        </p>
      </div>
    </div>
  );
};

export default Loading;
