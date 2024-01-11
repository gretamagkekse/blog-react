import PostList from "./Components/PostList";
import useFetch from "./CustomHooks/useFetch";

export default function Home() {
    const {data: posts, isPending, error} = useFetch('http://localhost:8008/posts');
    const sortedPosts = posts ? [...posts].sort((a, b) => new Date(b.datetime) - new Date(a.datetime)) : null;
    return (
        <>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}

            {posts && <PostList posts={sortedPosts} title="All Posts"/>}

        
          

        </>
    )
}

