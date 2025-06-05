import { NavLink } from 'react-router'; // Corrected import for NavLink

export function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-full max-w-4xl aspect-video md:aspect-auto md:h-[80vh] flex items-center justify-center overflow-hidden rounded-xl shadow-2xl">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="notfoundpage.png"
        />

        <NavLink
        to='/'
        className="px-8 py-3 text-white bg-red-500 text-xl font-semibold absolute bottom-2">
        Go to Home
      </NavLink>    
      </div>
    </div>
  );
}
