import type { JSX } from "react";

type Props = {
  title: string;
  value: string;
  percentage: string;
  icon: JSX.Element;
};
function Card(props: Props) {
  return (
    <div className="bg-white rounded-[15px] py-[17.5px] pr-[17.5px] pl-[21.5px] flex justify-between items-center">
      <div>
        <h4 className="text-accent mb-[5px] text-xs font-bold">
          {props.title}
        </h4>
        <div className="text-lg font-bold text-secondary">
          {props.value}{" "}
          <span className="ml-[5px] text-green-400 text-sm">
            {props.percentage}
          </span>
        </div>
      </div>
      <div className="p-[11.75px] bg-primary rounded-[15px]">{props.icon}</div>
    </div>
  );
}

export default Card;
