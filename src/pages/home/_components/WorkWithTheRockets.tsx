import { ArrowRight } from "lucide-react";

function WorkWithTheRockets() {
  return (
    <div className="p-[17.5px] bg-white flex justify-between rounded-[15px] w-full">
      <div className="image rounded-[15px] py-[20px] px-[21px] w-full relative ">
        <div className="absolute inset-0 bg-gradient-to-r from-[#313860]/30 to-[#151928]/80 rounded-[15px]"></div>

        <div className="flex flex-col justify-between h-full relative z-10">
          <div>
            <h3 className="font-bold text-lg text-white mb-2">
              Work with the Rockets
            </h3>
            <p className="text-sm text-white leading-[140%] max-w-[384.5px]">
              Wealth creation is an evolutionarily recent positive-sum game. It
              is all about who take the opportunity first.
            </p>
          </div>
          <button className="flex text-white text-[10px] font-bold items-center mt-2 cursor-pointer">
            Read more <ArrowRight className="size-[12px] ml-1.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default WorkWithTheRockets;
