
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
    <div className="container mx-auto flex flex-col items-center sm:flex-row sm:justify-between">
        <span className="ml-2 text-small font-semibold sm:text-lg">CZ2M Event Management</span>
        <div className="text-base pt-2 pb-4">
          <ul className="flex flex-col">
            <li>
              <a href="#" className="hover:text-gray-400">
                  Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                  Events
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                  About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                  Contact
              </a>
            </li>
          </ul>
      </div>
      <span className="text-base sm:text-lg py-2">©2023 by CODINGZ2M</span>
    </div>
  </footer>
  )
}

export default Footer