import React from 'react';
// const getPost = async()=>{
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     return res.json();
// }

const getPost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if(!res.ok) throw new Error('failed to fetch data');
    return res.json();
}

// const getPost = async()=>{
//     try{
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     return res.json();
//     }
//     catch(err){
//         throw new Error ('failed to fetch data');
//     }
// }

const PostsPage = async () => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const posts = await res.json();
    const posts = await getPost();
    return (
        <div className='flex justify-center items-center h-screen'>
            <h2 className='text-4xl text-red-500 font-extrabold'>{posts.length}</h2>
        </div>
    );
};

export default PostsPage;