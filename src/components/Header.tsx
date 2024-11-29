import { UserRound } from 'lucide-react'

interface HeaderProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Header = ({ isOpen, setIsOpen }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-blue-600 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-8 py-4">
        <div className="flex items-center justify-between lg:justify-center lg:w-3/5">
          {/* Profile icon - visible on mobile only */}
          <div className="">
            <UserRound className="w-10 h-10 text-white rounded-full p-2" />
          </div>

          {/* Header content */}
          <div className="hidden md:block text-white text-center lg:relative lg:-right-[20rem]">
            <h1 className="text-2xl font-bold">Welcome to My Portfolio</h1>
            <p className="text-sm text-gray-200">
              Your one-stop destination to explore my work, research, and contributions to......
            </p>
          </div>

          {/* Hamburger menu - visible on mobile only */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden lg:invisible p-2 rounded-md"
          >
            <svg 
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 