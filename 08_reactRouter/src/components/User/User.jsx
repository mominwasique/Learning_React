import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {

    const {userid} = useParams()



  return (
    <div className='bg-gray-800 text-white text-3xl p-5 text-center'>User: {userid.toUpperCase()}</div>
  )
}

 
