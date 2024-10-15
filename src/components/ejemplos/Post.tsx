import { useFetch } from "../../hook/useFetch";


const Post = () => {
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