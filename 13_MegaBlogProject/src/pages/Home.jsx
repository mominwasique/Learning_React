import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../components/index'
import appwriteService from '../appwriteServices/configData'
import authService from '../appwriteServices/auth'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getpost().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <div className='flex flex-wrap '>
                        <div className='p-2 w-full text-center'>
                            {authService.getUserAccount ? <h1 className='text-2xl font-bold hover:text-gray-500 '>
                                Please Login to access posts
                            </h1> : null }
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8 '>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div className='p-2 w-1/4 '
                        key={post.$id}>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
        
    )
}

export default Home;