import postsData from "../posts.json"
import Article from "../components/Article"
import Search from "../components/Search"
import { useState } from "react"
function Homepage(){
    const {posts, setPosts} = useState(postsData)
    const onSearchChange = (value)=>{
        console.log(value);
        const filteredPosts = postsData.filter(item => 
            item.tittle.includes(value));
        setPosts(filteredPosts);
    
    }
    return (
        <>
            <h1>Simpleblog</h1>
            <Search onSearchChange={onSearchChange}/>
            {posts.map((props, index) => {
                <Article {...props} key={index}/>
            })};
        </>
    );
};

export default Homepage