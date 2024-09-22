import React from "react";
import { Link } from "react-router-dom";
import Type from "./Type";
import About from "../About/About";
import Down from "../../assets/down.svg";

const Home = () => {
  return (
    <>
      <section
        className="min-h-[95vh] md:min-h-[90vh] relative pt-0 overflow-hidden bg-[#fff] dark:bg-[#0e1630] dark:text-white bg-[radial-gradient(#0000004f_1px,#ffffff1a_1px)] bg-[size:20px_20px] dark:bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] dark:bg-[size:20px_20px ] overflow-hidden"
        id="about"
      >
        <div className="container max-w-7xl pt-14">
          <div className="md:flex items-center justify-between sm: flex-col md:flex-row">
            {/* Left side */}
            <div className="w-full md:basis-1/2 mb-10">
              <h1
                data-aos="fade-left"
                data-aos-duration="1600"
                className="md:text-5xl text-center md:text-left text-3xl font-bold md:leading-[4.5rem] leading-[3rem]"
              >
                I am Prasad Kandekar,
                <h5
                  data-aos="fade-right"
                  data-aos-duration="1500"
                  className="text-[#fd5e2b] pt-2 text-center  sm:flex sm:justify-start  text-2xl uppercase font-semibold mb-4 text-primary tracking-[4px]"
                >
                  <Type />
                </h5>
              </h1>

              <p
                data-aos="fade-right"
                data-aos-duration="1700"
                className="flex gap-2 font-medium text-[18px] leading-7  sm:pr-10 text-center sm:text-start text-black dark:text-white mt-3"
              >
                <br></br>
                I'm a full-stack developer focused on crafting clean &
                user-friendly experiences.<br></br>I am passionate about
                building excellent software that enhances the lives of those
                around me.
              </p>

              <div
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="200"
                className="flex items-center justify-center sm:justify-start gap-6 mt-7"
              >
                <Link to="/contact">
                  <button className="button-87 p-2">
                    Contact Me
                    <i className="ri-contacts-line ml-2"></i>
                  </button>
                </Link>
                <a href={"/Prasad Resume SDE.pdf"} download={true}>
                  <button className="button-87 p-2" role="button">
                    Download CV
                    <i className="ri-download-2-line ml-2"></i>
                  </button>
                </a>
              </div>
              {/* Social Icons  */}
              <div
                className="flex items-center justify-center sm:justify-start gap-9 mt-10"
                data-aos="fade-up"
                data-aos-duration="1600"
              >
                <a
                  href="https://github.com/Prasad-264"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[35px] font-[400] hover:text-orange-500 transition-all ease-in duration-200"
                >
                  <i className="ri-github-fill"></i>
                </a>
                <a
                  href="https://x.com/i_m_prasad_"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[31px] font-[400] hover:text-orange-500 transition-all ease-in duration-200"
                >
                  <i className="ri-twitter-x-line"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/prasad-kandekar-719583205/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[35px] font-[400] hover:text-orange-500 transition-all ease-in duration-200"
                >
                  <i className="ri-linkedin-box-fill"></i>
                </a>
              </div>
            </div>
            {/* Right Side */}
            {/* <div className="rounded-full bg-gradient-to-r from-cyan-500 to-purple-800">
              <img
                className="rounded-full hidden lg:block sm:w-60 md:w-72 p-1"
                src="/sa_profile_img.jpg"
                alt="profile pic"
              />
            </div> */}
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={Down}
            alt=""
            className="hidden top-3/4 md:block animate-jump w-10 absolute "
          />
        </div>
      </section>
      <About />
    </>
  );
};

export default Home;
