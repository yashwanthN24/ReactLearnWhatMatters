"use client"
import React, { useState } from 'react'
import Header from '@/Components/Header'

const page = () => {
  const [user, setUser] = useState("yash")
  const [editor, setEditor] = useState("Aakash")
  return (
    <>
      <Header user={user} edit = { editor} />
      <br/>
      {user}
      {editor}
    
    </>
  )
}

export default page