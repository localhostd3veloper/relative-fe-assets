import { FC } from "react";

interface CardProps {
  name: string;
  price: string;
  tvl: string;
  change: string;
  pairs: any[];
  Icon: FC;
}

function Card({ name, price, tvl, change, pairs, Icon }: CardProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-full h-[100px] -mb-14  w-[100px] flex justify-center items-center p-3 bg-gradient-to-b from-[#626A88]/10 to-[#EAB300]/5">
        <Icon />
      </div>
      <div className="bg-card mx-5 bg-center bg-no-repeat flex flex-col gap-3 pb-8 w-full h-full pt-10 justify-center items-center">
        <div id="name" className="text-[#737BAE] font-medium text-sm mt-10">
          {name}
        </div>
        <div
          id="price"
          className="text-[#F2F2F2] font-medium text-lg rounded-2xl bg-[#14172B] flex items-center justify-center text-center px-4"
        >
          {price}
          {change.charAt(0) === "-" ? (
            <span className="text-red-500 pl-3 text-xs">{change}</span>
          ) : (
            <span className="text-green-500 pl-3 text-xs">{change}</span>
          )}
        </div>
        <div id="name" className="text-[#737BAE] font-medium text-sm">
          Price
        </div>
        <div
          id="tvl"
          className="text-[#F2F2F2] font-medium text-lg rounded-2xl bg-[#14172B] flex items-center justify-center text-center px-4"
        >
          {tvl}
        </div>
        <div id="name" className="text-[#737BAE] font-medium text-sm">
          TVL
        </div>
        <div className="rounded-2xl bg-[#14172B] flex px-3 py-2 gap-2">
          {pairs.map((Pair, index) => (
            <Pair key={index} />
          ))}
        </div>
        <div id="name" className="text-[#737BAE] font-medium text-sm">
          Popular Pairs
        </div>
      </div>
    </div>
  );
}

export default Card;
