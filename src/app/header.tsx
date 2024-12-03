import React, { useState } from 'react';
import { Home, User, Briefcase, Code, Contact, LucideIcon } from 'lucide-react';


type NavItemProps = {
  id: string;
  icon: LucideIcon; // Lucide icons are components, so we use their type
  label: string;
  activeSection: string;
  onClick: (sectionId: string) => void; // Callback function that gets a string
};

const navItems = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About Me' },
  { id: 'resume', icon: Briefcase, label: 'Work Experience' },
  { id: 'projects', icon: Code, label: 'Projects' },
  { id: 'contact', icon: Contact, label: 'Contact' }
];

const NavItem: React.FC<NavItemProps> = ({ id, icon: Icon, label, activeSection, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className={`cursor-pointer flex items-center transition-all duration-500 ease-in-out
        ${activeSection === id ? 'text-blue-500' : 'hover:text-blue-500'}`}
      onClick={() => onClick(id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center">
        <Icon size={24} />
        <div 
          className={`overflow-hidden transition-all duration-500 ease-in-out flex items-center
            ${isHovered ? 'max-w-36 ml-2 hover:underline' : 'max-w-0'}`}
        >
          <span className="whitespace-nowrap text-slate-400 font-bold font-serif">
            {label}
          </span>
        </div>
      </div>
    </li>
  );
};

type HeaderProps = {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
};

const Header: React.FC<HeaderProps> = ({ activeSection, scrollToSection }) => (
  <header className="bg-gray-900 text-white fixed top-0 left-0 right-0 z-10 py-4 px-6 flex justify-between items-center shadow-md">
    <nav>
      <ul className="flex items-center">
        {navItems.map((item, index) => (
          <React.Fragment key={item.id}>
            <NavItem
              {...item}
              activeSection={activeSection}
              onClick={scrollToSection}
            />
            {index < navItems.length - 1 && (
              <div className="w-6" /> 
            )}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;