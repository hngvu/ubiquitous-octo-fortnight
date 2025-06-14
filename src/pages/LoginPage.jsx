import { useState } from 'react';
import { Navigate, NavLink, useNavigate } from 'react-router';
import { useAuth } from '../hooks/useAuth';

function LoginPage() {
const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const {auth, login} = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('email:', email);
    console.log('Password:', password);
    if (email === 'admin' && password === 'admin') {
      login({role: 'admin'})
      navigate('/admin/products');
    }

    if (email === 'king' && password === 'king') {
      login({role: 'king'})
      navigate('/');
    }
  };

  if (auth) {
    if (auth.role === 'admin') {
      return <Navigate to="/admin/products" replace />;
    }
    if (auth.role === 'king') {
      return <Navigate to="/" replace />;
    }
  }


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans">

      {/* Login Card */}
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg space-y-6">
        <div className="text-center">
          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Welcome back (admin/admin)
          </h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          {/* email Input */}
          <div>
            <label htmlFor="email" className="sr-only">
              email
            </label>
            <input
              id="email"
              name="email"
              type="text"
              autoComplete="email"
              required
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>


          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
        </form>


        {/* Register Button */}
        <div className="text-center text-sm text-gray-600">
          Don&apos;t have an account ?{' '}
          <NavLink to="/register" className="font-medium text-blue-600 hover:text-blue-500">
            Register
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
