import React from "react";

const About = () => {
  return (
    <section
      id="services"
      className="bg-white dark:bg-[#00091D] overflow-hidden"
    >
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="font-[800] text-[2.4rem] mb-5 dark:text-white ">
            About Me
          </h2>
          <p className="lg:max-w-[950px] lg:mx-auto font-[500] text-[16px] leading-7 dark:text-white">
            I am a dedicated Full-Stack Web Developer with a strong foundation
            in Data Structures and Algorithms, Object-Oriented Programming, and
            Database Management Systems. My recent internship at Rupeek Fintech
            provided valuable hands-on experience in designing and developing
            web applications. I hold a B.E. in Information Technology (2024) at
            JSCOE Pune. My expertise includes front-end technologies like HTML,
            CSS, JavaScript, React.js, Next.js, and Tailwind CSS, as well as
            backend development with Node.js, Express.js, API development,
            MongoDB and MySQL. I am dedicated to staying current with modern web
            practices.
          </p>
        </div>

        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-full sm:px-0">
            <div className="relative text-gray-700 dark:text-gray-300 antialiased text-sm font-semibold">
              {/* Vertical line  */}
              <div className="hidden absolute w-1 sm:block bg-orange-600 h-full left-1/2 transform -translate-x-1/2"></div>

              {/* left card -> Personal Info  */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1600"
                        className="bg-white dark:bg-gray-700 hover:dark:bg-[#fd7f0b] p-4 rounded shadow group hover:bg-[#fd7f0b] cursor-pointer ease-in duration-150"
                      >
                        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                        <h3 className="font-[700] my-3 group-hover:text-white text-orange-500 group-hover:font-[600] text-2xl text-center sm:text-start">
                          Personal Info
                        </h3>

                        <div className="text-[15px] flex flex-col gap-4 group-hover:text-white leading-7">
                          <div className="flex flex-col gap-2">
                            <h1>
                              <i className="ri-user-fill mr-2"></i>
                              Prasad Kandekar
                            </h1>
                            <h1>
                              <i className="ri-mail-fill mr-2"></i>
                              prasadkandekar555@gmail.com
                            </h1>
                            <h1>
                              <i className="ri-phone-fill mr-2"></i>
                              +91 9284132082
                            </h1>
                            <h1>
                              <i className="ri-graduation-cap-fill mr-2"></i>
                              B.E in - Information Technology at JSCOE (2024)
                            </h1>
                            <h1>
                              <i className="ri-map-pin-fill mr-2"></i>
                              Pune, Maharashtra, India
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-orange-500 border-white dark:border-[#0e1630] border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <i class="ri-account-circle-fill text-[18px]"></i>
                    </figure>
                  </div>
                </div>
              </div>

              {/* right card -> Internship Rupeek*/}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1600"
                        className="bg-white p-4 rounded shadow group dark:bg-gray-700 hover:dark:bg-[#fd7f0b]  hover:bg-[#fd7f0b] cursor-pointer ease-in duration-150"
                      >
                        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />

                        <h3 className="font-[700] my-3 group-hover:text-white text-orange-500 group-hover:font-[600] text-2xl text-center sm:text-start">
                          Internship
                        </h3>

                        <div className="text-[15px] flex flex-col gap-4 group-hover:text-white leading-7">
                          <h1>
                            <i className="ri-calendar-schedule-fill mr-2"></i>
                            Jan 2024 - July 2024
                          </h1>
                          <h1>
                            <i className="ri-shield-user-fill mr-2"></i>
                            Role: SDE Intern
                          </h1>
                          <h1>
                            <i className="ri-building-4-fill mr-2"></i>
                            Company: Rupeek fintech pvt. lmt
                          </h1>
                          <h1>
                            <i className="ri-honour-fill"></i>
                            &nbsp; Contributed to the development of
                            Rupeek&apos;s Gold Card web application, handling
                            frontend UI for Visa offers/rewards and backend
                            services integration using React.js, Next.js, and
                            Node.js.
                          </h1>
                          <h1>
                            <i className="ri-map-pin-fill mr-2"></i>
                            Bangalore, India
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-orange-500  border-white dark:border-[#0e1630] border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <i className="ri-building-2-fill text-[18px]"></i>
                    </figure>
                  </div>
                </div>
              </div>

              {/* right card -> Internship Geeksforgeeks*/}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1600"
                        className="bg-white p-4 rounded shadow group dark:bg-gray-700 hover:dark:bg-[#fd7f0b]  hover:bg-[#fd7f0b] cursor-pointer ease-in duration-150"
                      >
                        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />

                        <h3 className="font-[700] my-3 group-hover:text-white text-orange-500 group-hover:font-[600] text-2xl text-center sm:text-start">
                          Internship
                        </h3>

                        <div className="text-[15px] flex flex-col gap-4 group-hover:text-white leading-7">
                          <h1>
                            <i className="ri-calendar-schedule-fill mr-2"></i>
                            Feb 2023 - Aug 2023
                          </h1>
                          <h1>
                            <i className="ri-shield-user-fill mr-2"></i>
                            Role: TCW (Technical Content Writing) Intern
                          </h1>
                          <h1>
                            <i className="ri-building-4-fill mr-2"></i>
                            Company: Geeksforgeeks
                          </h1>
                          <h1>
                            <i className="ri-honour-fill"></i>
                            &nbsp; Authored 16 articles and enhanced 330+
                            articles on data structures and algorithms,
                            contributing valuable technical content to the
                            community.
                          </h1>
                          <h1>
                            <i className="ri-map-pin-fill mr-2"></i>
                            Remote, India
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-orange-500  border-white dark:border-[#0e1630] border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <i className="ri-building-2-fill text-[18px]"></i>
                    </figure>
                  </div>
                </div>
              </div>

              {/* left card -> Education */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1600"
                        className="bg-white dark:bg-gray-700 hover:dark:bg-[#fd7f0b] p-4 rounded shadow group hover:bg-[#fd7f0b] cursor-pointer ease-in duration-150"
                      >
                        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />

                        <h3 className="font-[700] my-3 group-hover:text-white text-orange-500 group-hover:font-[600] text-2xl text-center sm:text-start">
                          Education
                        </h3>

                        <div className="text-[15px] flex flex-col gap-4 group-hover:text-white leading-7">
                          <div className="">
                            <h1>
                              <i className="ri-graduation-cap-fill mr-2"></i>
                              Jaywantrao Sawant College of Engineering, Pune
                              <br></br>
                            </h1>
                            <h2 className="">
                              B.E in Information Technology{" | "}
                              <span>CGPA: 9.29{" | "}</span>
                              <span>2020 - 2024</span>
                            </h2>
                          </div>

                          <div className="">
                            <h1>
                              <i className="ri-graduation-cap-fill mr-2"></i>
                              Bhausaheb Gunjal Patil Sahyadri Junior College,
                              Sangamner
                            </h1>
                            <h2 className="">
                              HSC{" | "}
                              <span>Percentage: 82%{" | "}</span>
                              <span>2018 - 2020</span>
                            </h2>
                          </div>
                          <div className="">
                            <h1>
                              <i class="ri-graduation-cap-fill mr-2"></i>
                              Haribhau Sangle Yashwant Vidyalya, Nimon
                            </h1>
                            <h2 className="">
                              SSC{" | "}
                              <span>Percentage: 86.80%{" | "}</span>
                              <span>2017 - 2018</span>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-orange-500 border-white dark:border-[#0e1630] border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <i class="ri-graduation-cap-fill text-[18px]"></i>
                    </figure>
                  </div>
                </div>
              </div>

              {/* right card -> Skills */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1600"
                        className="bg-white p-4 rounded shadow group dark:bg-gray-700 hover:dark:bg-[#fd7f0b]  hover:bg-[#fd7f0b] cursor-pointer ease-in duration-150"
                      >
                        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />

                        <h3 className="font-[700] my-3 group-hover:text-white text-orange-500 group-hover:font-[600] text-2xl text-center sm:text-start">
                          Skills
                        </h3>

                        <div className="text-[15px] flex flex-col gap-4 group-hover:text-white leading-7">
                          <div>
                            <h1>
                              <i className="ri-server-fill mr-2"></i>
                              Programming Languages
                            </h1>
                            <p>C++, Java, JavaScript </p>
                          </div>
                          <div>
                            <h1>
                              <i className="ri-contrast-fill mr-2"></i>
                              Web Technologies Frameworks/Libraries:
                            </h1>
                            <p>
                              HTML, CSS, Bootstrap, Tailwind, API development,
                              React.js, Redux, Next.js, Node.js, Express.js,
                              REST APIs{" "}
                            </p>
                          </div>
                          <div>
                            <h1>
                              <i className="ri-database-2-fill mr-2"></i>
                              Database
                            </h1>
                            <p>MongoDB, MySQL, PostgreSQL, Appwrite </p>
                          </div>
                          <div>
                            <h1>
                              <i className="ri-terminal-window-fill mr-2"></i>
                              Tools
                            </h1>
                            <p>
                              GitHub, Postman, Strapi, google firebase, Netlify,
                              vercel, canava, figma, VS Code{" "}
                            </p>
                          </div>
                          <div>
                            <h1>
                              <i className="ri-server-fill mr-2"></i>
                              Expertise Area
                            </h1>
                            <p>
                              Data Structures and Algorithms, Object Oriented
                              Programming, Database Management System
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-orange-500  border-white dark:border-[#0e1630] border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <i className="ri-code-s-slash-line text-[18px]"></i>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;