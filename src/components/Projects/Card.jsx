import React from "react";
import { ArrowUpRight } from "lucide-react";

const Card = ({
  src,
  name,
  desc,
  T1,
  T2,
  T3,
  T4,
  btn,
  LiveLink,
  GithubLink,
}) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      className="w-[300px] rounded-md border mb-10 dark:border-gray-600"
    >
      <img src={src} alt="img" className="h-[200px] w-full rounded-t-md " />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg dark:text-white font-semibold">
          {name} &nbsp;
          <a href={LiveLink} target="_blank" rel="noreferrer">
            <ArrowUpRight className="h-4 w-4 cursor-pointer" />
          </a>
        </h1>
        <p className="mt-3 dark:text-gray-400 text-sm text-gray-600">{desc}</p>
        <div className="mt-4">
          <span className="mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            {T1}
          </span>
          <span className="mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            {T2}
          </span>
          <span className="mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            {T3}
          </span>
        </div>
        <a href={GithubLink} target="_blank" rel="noreferrer">
          <button
            type="button"
            className="mt-4 w-full rounded-sm bg-orange-600 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            {btn}
          </button>
        </a>
      </div>
    </div>
  );
};

export default Card;
