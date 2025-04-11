'use client'

import React from 'react'
import { useTheme } from '../context/ThemeProvider';

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className={`py-4 border-t border-primary bg-black`}>
        <div className="container mx-auto px-4 text-center">
        <p className="text-xl font-bold text-gradient">Funnel Design | Lei Zhi Guang</p>
        <p className={`text-sm text-white mt-2`}>© {new Date().getFullYear()} All Rights Reserved</p>
        </div>
  </footer>
  )
}

export default Footer