import { useState, useRef, useEffect } from 'react';
import { UserIcon } from '../icons';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router';

const AccountMenu = () => {
  const { logout } = useAuth();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate('/login', { replace: true });
  };

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center w-6 h-6 rounded-full bg-white cursor-pointer"
      >
        <UserIcon className="w-5 h-5 rounded-2xl text-white" />
      </button>

      {open && (
        <div className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5">
          <div className="py-1">
            <button className="w-full px-4 py-2 text-sm hover:bg-gray-100 text-left">
              Profile
            </button>
            <button className="w-full px-4 py-2 text-sm hover:bg-gray-100 text-left">
              Settings
            </button>
            <button
              onClick={handleLogout}
              className="w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 text-left"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountMenu;
