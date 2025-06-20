import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import smallogo from '../assets/small-logo.svg';
import SearchIcon from '../components/icons/SearchIcon';
import SignInIcon from '../components/icons/SignInIcon';

function NavBar() {
  return (
    <nav className="bg-[#423E37] text-[#EFEFEF] p-4 border-b-4 border-white fixed top-0 left-0 w-full z-50">
        <div className="w-full px-4 flex items-center justify-between">
            
            <Link to="/" className="flex items-center">
            
            <img
                src={logo}
                alt="Re:Hop Logo"
                className="h-11 w-auto hidden xs:hidden smmd:block"
            />

            <img
                src={smallogo}
                alt="Re:Hop Small Logo"
                className="h-11 w-auto block xs:block smmd:hidden"
            />
            </Link>

            
            <div className="xs:ml-8 md:ml-0 flex items-center bg-[#A39594] focus-within:bg-[#423E37] rounded-full h-10 px-3 py-1 md:w-1/3 xs:w-1/2 focus-within:ring-2 focus-within:ring-white">
            <SearchIcon className="h-5 w-5 mr-2 text-[#EFEFEF] flex-shrink-0" />
            <input
                type="text"
                className="flex-grow w-fulltext-[#EFEFEF] placeholder-[#EFEFEF] outline-none bg-transparent"
            />
            </div>

            <div className="flex items-center space-x-2">
                <Link
                className="
                    flex items-center space-x-2
                    text-lg font-medium
                    px-4 py-2
                    rounded-md
                    hover:bg-[#534E46]
                    text-[#EFEFEF]
                    transition-colors duration-200 ease-in-out
                "
                >
                <SignInIcon className="h-9 w-9" />
                <span className="hidden smmd:inline text-xl">SIGN IN</span>
                </Link>
            </div>
        </div>
    </nav>
  );
}

export default NavBar;