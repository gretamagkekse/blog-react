import PostList from "./Components/PostList";
import useFetch from "./CustomHooks/useFetch";

export default function Home() {
    const {data: posts, isPending, error} = useFetch('http://localhost:8008/posts');
    return (
        <>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}

            {posts && <PostList posts={posts} title="All Posts"/>}

            {posts && <PostList posts={posts.filter((post) => post.author.name === 'Greta Moeller')} title="My Posts"
            />}

        </>
    )
}

