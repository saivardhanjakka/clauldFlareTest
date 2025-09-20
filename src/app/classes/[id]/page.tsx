'use client'
import { useParams } from 'next/navigation';
import React from 'react'

const Page = () => {
    const params = useParams<{ id: string }>(); 
  const id = params.id;

  return (
    <div>Mathssss : {id}</div>
  )
}

export default Page