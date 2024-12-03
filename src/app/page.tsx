'use client'

import React, { useState, useEffect, useRef } from 'react';
import { Camera, Mail, Home, User, Briefcase, Code, Linkedin, Contact } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Separator } from '@/components/ui/separator';
import ProjectsSection from './projects';
import ContactSection from './contact';
import Header from './header';

export default function Page() {

  const [activeSection, setActiveSection] = useState<string>('home');
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3; // Adjusted to upper third
      const sections = [
        { id: 'home', ref: homeRef },
        { id: 'about', ref: aboutRef },
        { id: 'resume', ref: resumeRef },
        { id: 'projects', ref: projectsRef },
        { id: 'contact', ref: contactRef }
      ];

      // Find the current section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.ref.current) {
          const sectionTop = section.ref.current.offsetTop;
          const sectionHeight = section.ref.current.offsetHeight;
          const sectionBottom = sectionTop + sectionHeight;
          
          // Add some buffer to make transitions smoother
          const buffer = 50;
          
          if (
            scrollPosition >= (sectionTop - buffer) && 
            scrollPosition <= (sectionBottom + buffer)
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (section: string) => {
    const refs = {
      home: homeRef,
      about: aboutRef,
      resume: resumeRef,
      projects: projectsRef,
      contact: contactRef
    };

    const ref = refs[section as keyof typeof refs];
    if (ref.current) {
      const offset = 80; // Adjust this value based on your header height
      const elementPosition = ref.current.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <div className="font-sans">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />

      <main>
        <section ref={homeRef} className="pt-10 overflow-hidde bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div className="grid items-center grid-cols-1 md:grid-cols-2">

                  <div>
                      <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Hey 👋 I am
                          <br className="block sm:hidden" /> Diar Kamberi
                      </h2>
                      <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-300 md:mt-8">
                        I have a deep passion for computers and a degree in Computer Science, with interests spanning low-level programming, system security, and Artificial Intelligence among others.
                      </p>

                      <p className="mt-4 text-xl text-gray-200 md:mt-8">
                          <span className="relative inline-block">
                              <span className="absolute inline-block w-full bottom-0.5 h-2 bg-blue-700 dark:bg-gray-900"></span>
                          <span className="relative"> Have a question? </span>
                          </span>
                          <br className="block sm:hidden" /> Ask me on <a href="mailto:diarkamberi1@gmail.com" title=""
                              className="transition-all duration-200 text-sky-400 hover:text-sky-500 hover:underline">Gmail</a>
                      </p>
                  </div>

                  <div className="relative">
                      <img className="absolute inset-x-0 bottom-0 -mb-32 -translate-x-1/2 left-1/2 " src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />

                      <img className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="images/profile_cut.png" alt="" />
                  </div>

              </div>
          </div>
        </section>

        <section ref={aboutRef} className="bg-white py-20 px-6">
          <div className="max-w-4xl mx-auto flex items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p className="text-gray-700 mb-8">
                I am a computer science student with a passion for programming and problem-solving. I have a strong background in various programming languages and have gained practical experience through various projects and assignments.
                In the future I aspire to be a successful entrepreneur, contributing to the development of the tech scene in my home country of Kosovo.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Skills</h3>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Proficient in Java, Python, C++, and Scala</li>
                    <li>Experienced in Object-Oriented and Functional Programming</li>
                    <li>Knowledgeable in computer networking, operating systems, and machine learning</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Education</h3>
                  <p className="text-gray-700">
                    BSc. Computer Science, Vrije Universiteit Amsterdam
                    <br />
                    Expected Graduation: August 2024
                    <br />
                    GPA: 8.7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={resumeRef} className="bg-gray-100 py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold flex flex-col mb-8">Work Experience</h2>
            {/* Resume content from provided CV */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold">Object-Oriented And Functional Programming TA</h3>
                <p className="text-gray-700">Vrije Universiteit Amsterdam, 2022 - 2023</p>
                <ul className="list-disc pl-6 text-gray-700 mt-2">
                  <li>Assisting students with understanding both object-oriented and functional programming paradigms, specifically in Scala</li>
                  <li>Grading student assignments</li>
                  <li>Discussing how to improve student experience and enhance learning</li>
                </ul>
              </div>
            </div>

            <Separator className="my-4 bg-gray-300" />

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold">Computer Organization TA</h3>
                <p className="text-gray-700">Vrije Universiteit Amsterdam, 2023 - 2024</p>
                <ul className="list-disc pl-6 text-gray-700 mt-2">
                  <li>grading assignments written in x86-64 Assembly syntax, quizzes, and self-study exercises</li>
                  <li>helping students gain a deeper understanding of computer low-level architecture (e.g.
                    stack, memory addresses, CPU instructions)</li>
                  <li>grading lecture quizzes and ensuring students get rewarded for participation in lectures</li>
                </ul>
              </div>
            </div>

            <Separator className="my-4 bg-gray-300" />

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold">Computer Networks TA</h3>
                <p className="text-gray-700">Vrije Universiteit Amsterdam, 2023 - 2024</p>
                <ul className="list-disc pl-6 text-gray-700 mt-2">
                  <li>helping students gain a deeper understanding of networking concepts (e.g. TCP, UDP)</li>
                  <li>grading networking assignments written in Python, quizzes, and self-study exercises</li>
                  <li>creating midterm and exam questions requiring surface and in-depth knowledge about
                  the concepts discussed in the course</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        <section ref={projectsRef} className="bg-white py-20 px-6">
          <ProjectsSection />
        </section>

        <ContactSection contactRef={contactRef}/>
      </main>
      <div className="bg-gray-800 pt-8 pb-2">
        <footer className="bg-gray-700 md:flex md:items-center md:justify-between shadow rounded-lg p-4 md:p-6 xl:p-8 my-6 mx-4">
          <div className="flex items-left flex-wrap mb-6 md:mb-0 text-sm mr-auto text-gray-400">
            ©2024 Personal WebPage — Made by Diar Kamberi
          </div>
          <div className="flex sm:justify-center space-x-6">
              <a href="https://www.facebook.com/diar.kamberi.7" className="text-gray-400 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
              </a>
              <a href="https://www.instagram.com/diarkamberi/" className="text-gray-400 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
              </a>
              <a href="https://github.com/Diar03" className="text-gray-400 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
              </a>
          </div>
        </footer>
      </div>


    </div>
  );
}
