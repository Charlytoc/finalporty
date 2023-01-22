'use client'
import { useEffect, useState } from "react"
import Article from "../components/article"
import CreatePost from "../components/createPost"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
export default function Blog () {
    const [posts, setPosts] = useState([])
    const fetching = () => {
        return fetch('https://charlytocapi.onrender.com/api/blog/', {
            accept: '/'
        }).then((response) => 
            response.json()
        ).then((res) => setPosts(res))
          }
        useEffect(()=>{
            fetching()
        }, [])
        // category
// : 
// "FUNCIONa"
// created_at
// : 
// "2023-01-22T01:24:57.795708Z"
// description
// : 
// "ESPERO QUE"
// id
// : 
// 4
// title
// : 
// "PROBANDO"
// user
// :
    return <>
    <div className="blog-container">
    {/* <Navbar /> */}
    <h1>Welcome to my personal blog, here you can know me the best</h1>
    {/* <CreatePost /> */}
    <div id="posts-container">  {posts.map((item, index) => {
        return <div key={index}><Article 
        title={item.title}
        user={'Charlytoc'}
        category={item.category}
        description={item.description}
      /></div>
        
    })}

    </div></div>
    <Footer />
      </>
}