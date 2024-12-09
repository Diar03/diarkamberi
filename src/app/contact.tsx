import React, { RefObject } from 'react';
import { Mail, Linkedin } from 'lucide-react';

type ContactSectionProps = {
  contactRef: RefObject<HTMLElement>;
};

const ContactSection: React.FC<ContactSectionProps> = ({ contactRef }) => {
  return (
    <section
      ref={contactRef}
      className="bg-gradient-to-t from-gray-800 to-white text-white py-24 px-6 min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full bg-gray-800 p-8 rounded-lg shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="text-left">
              <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
              <p className="text-lg text-gray-300 mb-8">
                I&apos;m always interested in hearing about new opportunities, projects, or just having a chat about technology.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-blue-500" />
                <div>
                  <h3 className="text-xl font-semibold">Email</h3>
                  <p className="text-gray-300">diarkamberi1@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Linkedin className="h-6 w-6 text-blue-500" />
                <div>
                  <h3 className="text-xl font-semibold">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/diar-kamberi-277818234/"
                    className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
                  >
                    Connect with me
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Geometric Shapes Section */}
          <div className="flex flex-wrap justify-center items-center space-x-2 space-y-2 p-4 bg-gray-700 rounded-lg shadow-xl sm:space-x-4 sm:space-y-4 md:space-x-6 md:space-y-6">
            <div className="w-16 h-16 bg-blue-500 hover:bg-blue-600 hover:scale-50 rounded-full transition duration-300 sm:w-20 sm:h-20 md:w-24 md:h-24"></div>
            <div className="w-16 h-16 bg-red-500 hover:bg-red-600 hover:rotate-12 rounded-lg transition duration-300 sm:w-20 sm:h-20 md:w-24 md:h-24"></div>
            <div className="w-14 h-14 bg-green-500 hover:bg-green-600 hover:-rotate-90 rounded-md transition duration-300 sm:w-18 sm:h-18 md:w-20 md:h-20"></div>
            <div className="w-18 h-18 bg-yellow-500 hover:bg-yellow-600 rounded-lg hover:-rotate-12 transition duration-300 sm:w-22 sm:h-22 md:w-28 md:h-28"></div>
            <div className="w-14 h-14 bg-purple-500 hover:bg-purple-600 rounded-full hover:scale-x-150 transition duration-300 sm:w-18 sm:h-18 md:w-20 md:h-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
