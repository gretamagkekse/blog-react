import {useParams} from "react-router-dom";
import PageTitle from "./Components/PageTitle";
import useFetch from "./CustomHooks/useFetch";

export default function PostDetail() {
    const {id} = useParams();
    const {data: post, isPending, error} = useFetch('http://localhost:8008/posts/' + id);
    return (
        <>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {post && (<article>
                <PageTitle title={post.title}/>
                <p> Written by {post.author.name}
                </p>
                <div> {post.description}</div>

            </article>)}


        </>
    );
}