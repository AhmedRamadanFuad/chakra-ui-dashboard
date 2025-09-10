import { ArrowRight } from "lucide-react";
import chakraImage from "../../../assets/chakra.png";

function Purity() {
  return (
    <div className="py-[17.5px] px-[21px] bg-white flex justify-between rounded-[15px] w-full">
      <div className="flex flex-col justify-between rounded=[15px]">
        <div>
          <span className="text-xs text-accent font-bold mb-1">
            Built by developers
          </span>
          <h3 className="font-bold text-lg text-secondary mb-2">
            Purity UI Dashboard
          </h3>
          <p className="text-sm text-accent leading-[140%] max-w-[284.5px]">
            From colors, cards, typography to complex elements, you will find
            the full documentation.
          </p>
        </div>
        <button className="flex text-secondary text-[10px] font-bold items-center mt-2 cursor-pointer">
          Read more <ArrowRight className="size-[12px] ml-1.5" />
        </button>
      </div>
      <div className="max-xl:hidden">
        <img src={chakraImage} alt="" />
      </div>
    </div>
  );
}

export default Purity;
