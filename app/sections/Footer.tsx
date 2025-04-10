import React from 'react'

const Footer = () => {
  return (
    <footer className="py-8 bg-white dark:bg-gray-900">
    <div className="container mx-auto px-4 text-center">
      <p className="text-xl font-bold text-gradient">Funnel Design | Lei Zhi Guang</p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">© {new Date().getFullYear()} All Rights Reserved</p>
    </div>
  </footer>
  )
}

export default Footer