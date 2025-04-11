'use client';

import Link from 'next/link';
import { useTheme } from '../../context/ThemeProvider';

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink = ({ href, label }: NavLinkProps) => {
  const { theme } = useTheme();
  
  return (
    <Link 
      href={href}
      className={`font-medium transition-colors duration-200 hover:text-blue-500 relative group ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
    >
      {label}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
};

export default NavLink; 