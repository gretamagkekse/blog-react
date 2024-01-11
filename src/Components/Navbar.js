
import {Link} from "react-router-dom";

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Create Post', href: '/create' },


]

export default function Navbar() {
    

    return (
        <>

        <header className="bg-indigo-500">
            <nav className="flex items-center justify-between w-11/12 mx-auto py-6" aria-label="Global">
            
                <div className="flex flex-1 justify-end gap-x-12">
                    {navigation.map((item) => (
                        <Link key={item.name} to={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                            {item.name}
                        </Link>
                    ))}
                </div>


            </nav>

            
        </header>

        </>
    )
}
