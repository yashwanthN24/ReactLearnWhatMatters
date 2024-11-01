"use client"
import React, { useState } from 'react'
import Header from '@/Components/Header'
import Link from 'next/link'

const page = () => {
  const [user, setUser] = useState("yash")
  const [editor, setEditor] = useState("Aakash")
  return (
    <>
    <h1>This is Home Page</h1>
    
    </>
    
  )
}

export default page