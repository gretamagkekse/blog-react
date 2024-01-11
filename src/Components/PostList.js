import { Link } from "react-router-dom";
import PageTitle from "./PageTitle";

export default function PostList({ posts, title }) {

    return (
        <div className="mx-auto mb-24 w-11/12">
            <PageTitle title={title} />
            <div
                className=" mt-6 grid grid-cols-1 gap-x-8 gap-y-20 lg:grid-cols-3 md:grid-cols-2">
                {posts.map((post) => (
                    <Link to={`/posts/${post.id}`} key={post.id}>
                        <article className="flex flex-col items-start justify-between">

                            <div className="max-w-xl">
                                <div className="mt-8 flex items-center gap-x-4 text-xs">
                                    <time dateTime={post.datetime} className="text-black">
                                        {new Date(post.datetime).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'numeric',
                                            day: 'numeric',
                                        })}
                                    </time>
                                    <div
                                        className="relative z-10 rounded-lg bg-indigo-500 px-3 py-1.5 font-medium text-gray-900 border-2 border-gray-900"
                                    >
                                        {post.department}
                                    </div>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-orange">
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-800">{post.body}</p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <div
                                        className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-900 text-indigo-500 text-xl">{post.author.charAt(0)}</div>
                                    <div className="text-sm leading-6">
                                        <div className="font-semibold text-gray-900">
                                            <div>
                                                <span className="absolute inset-0" />
                                                {post.author}
                                            </div>
                                        </div>
                                        <p className="text-gray-900">{post.role}</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </div>

    )
}
