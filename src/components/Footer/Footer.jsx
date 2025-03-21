import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="dark:bg-gray-900 border-t-2 dark:border-0">
      <div className="container p-5">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 dark:text-white text-black font-[600] mb-5 md:text-[1.7rem]">
              Want to create innovative products?
            </h2>
            <a href="mailto:prasadkandekar555@gmail.com">
              <button className="button-42">
                Hire Me <i className="ri-mail-send-line"></i>
              </button>
            </a>
          </div>

          <div className="w-full sm:w-1/2">
            <p className="dark:text-gray-300 text-gray-500 leading-7 pt-4 mt-4 sm:mt-0">
              Thank you for visiting my portfolio! I'm always eager to
              collaborate on exciting projects and take on new challenges. Feel
              free to connect with me through LinkedIn, GitHub, or Email to
              discuss potential opportunities or just to say hello. Let's create
              something amazing together!
            </p>
            <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
              <span className="dark:text-gray-300 font-[600] text-[15px]">
                Connect with Me:{" "}
              </span>

              <span className="icons w-[35px] h-[35px] bg-slate-700 dark:bg-gray-700 p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://github.com/Prasad-264"
                  target="_blank"
                  className="text-white font-[500] text-[18px]"
                  rel="noreferrer"
                >
                  <i className="ri-github-line"></i>
                </a>
              </span>
              <span className="icons w-[35px] h-[35px] bg-slate-700 dark:bg-gray-700 p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://x.com/i_m_prasad_"
                  target="_blank"
                  className="text-white font-[500] text-[18px]"
                  rel="noreferrer"
                >
                  <i className="ri-twitter-x-line"></i>
                </a>
              </span>
              <span className="icons w-[35px] h-[35px] bg-slate-700 dark:bg-gray-700 p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://www.linkedin.com/in/prasad-kandekar-719583205/"
                  target="_blank"
                  className="text-white font-[500] text-[18px]"
                  rel="noreferrer"
                >
                  <i className="ri-linkedin-line"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Footer bottom */}
      <div className="bg-[#1b1e29] py-5 mt-14">
        <div className="container">
          <div className="flex items-center justify-center sm:justify-between">
            <div className="hidden sm:block">
              <div className="flex items-center gap-[10px]">
                <span className="w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center">
                  PK
                </span>

                <div className="leading-[20px]">
                  <h2 className="text-gray-200 font-[500] text-[18px]">
                    Prasad Kandekar
                  </h2>
                  <p className="text-gray-500 text-[14px] font-[500]">
                    prasadkandekar555@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-300 text-[14px]">
                Copyright {year} developed by Prasad - All right reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;