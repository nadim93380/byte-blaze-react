import { Link } from "react-router-dom";
import wave from "../assets/wave.svg"

const Hero = () => {
    return (
        <div>
            <div className="hero min-h-[calc(100vh-112px)] relative">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-5xl font-bold">Welcome to <span className="bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300%">ByteBlaze</span></h1>
                        <p className="py-6 max-w-md">ByteBlaze is the bridge between the complex world of technology and the curious minds eager to understand it</p>
                        <div className="flex justify-center items-center gap-4 ">
                            <Link to='/blogs' className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white font-bold">
                                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                                <span className="relative">Read Blogs</span>
                            </Link>
                            <Link to='/blogs' className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white font-bold">
                                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                                <span className="relative">Bookmarks</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full absolute bottom-0">
                    <img className="w-full" src={wave} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Hero;