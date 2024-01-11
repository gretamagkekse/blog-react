import Navbar from "./Components/Navbar";
import Home from "./Home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Create from "./Create";
import PostDetail from "./PostDetail";

export default function App() {
    return (
        <div className="min-h-screen bg-indigo-500">
        <Router>

                <Navbar/>
                <div className="flex w-11/12 mx-auto h-1 bg-black"/>
                <div className=" py-6 sm:py-12">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <Routes>
                            <Route exact path="/" element={<Home/>}/>
                            <Route path="/create" element={<Create/>}/>
                            <Route path="/posts/:id" element={<PostDetail/>}/>
                        </Routes>
                    </div>
                </div>

        </Router>
        </div>
    );
}

