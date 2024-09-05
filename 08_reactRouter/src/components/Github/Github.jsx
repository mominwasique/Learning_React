import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

 export default function Github() {
    const data = useLoaderData()

//     const [data, setData] = useState([])
//     useEffect(() => {
//         fetch('https://api.github.com/users/mominwasique')
//             .then(response => (response.json()))
//             .then(data => {
//                 console.log(data);
//                 setData(data);
//             })
//     }, [])




    return (
        <div className='text-left  bg-gray-800 text-white p-4 text-xl '> Name: {data.name}
            <img className='mt-4' src={data.avatar_url} alt="Profile picture" height={150}/>
        </div>

    )
}

export const githubInfoLoader = async () => {
    const response = (await fetch('https://api.github.com/users/mominwasique'))
    return response.json();
}

