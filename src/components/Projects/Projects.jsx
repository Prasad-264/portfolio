import React from "react";
import Card from "./Card";
import Social from "../../assets/img/quizgem_home_page.png";

const Projects = () => {
  return (
    <>
      <div className="dark:bg-[#00091D]">
        <div className="flex justify-center items-center p-8 h-full mx-auto">
          <h1 className="text-4xl dark:text-white  font-bold">My Projects</h1>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-14 justify-center md:justify-start md:mx-auto py-6 sm:py-0 w-full max-w-screen-lg  dark:bg-[#00091D]">
          <Card
            src={Social}
            name="QuizGem"
            desc="QuizGem is an innovative web application designed to create customized quizzes from just URL of blogs/Articles."
            T1="Next.js"
            T2="Gemini APIs"
            T3="Tailwind CSS"
            btn="Get Code"
            LiveLink="https://quiz-gem.vercel.app/"
            GithubLink="https://github.com/Prasad-264/QuizGem"
          />
        </div>
      </div>
    </>
  );
}

export default Projects;
