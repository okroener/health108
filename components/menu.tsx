'use client'
 
import { useState } from 'react'
 
export default function Menu() {
 
  return (
    /** create side menu with tailwind */    
    /** flyin from right */
    <div className="fixed inset-0 overflow-hidden z-50">
        <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      <h1>Menu</h1>
      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>

  )
}