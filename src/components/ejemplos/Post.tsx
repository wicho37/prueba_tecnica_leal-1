import { useContext } from "react";
import { useFetch } from "../../hook/useFetch";
import { CartContext } from "../../context/CartContext";


const Post = () => {
    const contexto = useContext(CartContext)
    console.log(contexto)
    const {data: posts} = useFetch("https://jsonplaceholder.typicode.com/posts")
    console.log(posts)

    return (
        <div>
            <h2>Json Placeholder</h2>
            <hr />

            {
                posts && posts.map(post => (
                    <div key={post.id}>
                        <h5>{post.tittle}</h5>
                        <h5>{post.body}</h5>
                    </div>
                ))
            }
        </div>
    )
}


export default Post