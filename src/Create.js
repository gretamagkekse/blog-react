import {useState} from 'react'
import {Switch} from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Create() {
    const [agreed, setAgreed] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Maria Garcia');

    const handleSubmit = (e) => {
        e.preventDefault();
        const post = {title, body, author};
        fetch('http://localhost:8008/posts', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(post)
        }).then(()=> {console.log('new post added')})
    }

    return (
        <div className="isolate px-6 lg:px-8">
            <div
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                aria-hidden="true"
            >
            </div>
            <div className="mx-auto max-w-xl ">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Create post</h2>
                <p className="mt-2 text-lg leading-8 text-gray-900">
                    Aute magna irure deserunt veniam aliqua magna enim voluptate.
                </p>
            </div>
            <form onSubmit={handleSubmit} className="mx-auto mt-12 max-w-xl sm:mt-16">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

                    <div className="sm:col-span-2">
                        <label htmlFor="title" className="block text-sm font-semibold leading-6 text-gray-900">
                            Title
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="title"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="block w-full rounded-md border-0 bg-indigo-500 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                            Description
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="description"
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="block w-full rounded-md border-0 bg-indigo-500 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                            Content
                        </label>
                        <div className="mt-2.5">
              <textarea
                  name="body"
                  id="body"
                  rows={4}
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  className="block w-full rounded-md border-0 bg-indigo-500 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

              />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                            Author
                        </label>
                        <div className="mt-2.5">
                            <select
                                name="author"
                                id="author"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                className="block w-full rounded-md border-0 bg-indigo-500 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            >
                                <option value="Maria Garcia">Maria Garcia</option>
                                <option value="Justin Hoffmann">Justin Hoffmann</option>
                                <option value="Greta Moeller">Greta Moeller</option>
                            </select>
                        </div>
                    </div>

                    <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                        <div className="flex h-6 items-center">
                            <Switch
                                checked={agreed}
                                onChange={setAgreed}
                                className={classNames(
                                    agreed ? 'bg-indigo-800' : 'bg-indigo-200',
                                    'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                )}
                            >
                                <span className="sr-only">Agree to policies</span>
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        agreed ? 'translate-x-3.5' : 'translate-x-0',
                                        'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                                    )}
                                />
                            </Switch>
                        </div>
                        <Switch.Label className="text-sm leading-6 text-gray-900">
                            By selecting this, you agree to our{' '}
                            <a href="#" className="font-semibold text-gray-900">
                                privacy&nbsp;policy
                            </a>
                            .
                        </Switch.Label>
                    </Switch.Group>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-gray-900 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Submit
                    </button>
                </div>
            </form>


        </div>
    )
}
