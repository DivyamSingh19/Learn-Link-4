import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from './components';
import { Outlet, useLocation } from 'react-router-dom';
import LandingPage from './components/landing_page'; 
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={location.pathname === '/' ? "bg-gradient-to-r from-blue-500 to-blue-300 min-h-screen" : ""}>
      {!loading ? (
        <div className="flex flex-col h-full">
          <Header />
          <main className="flex-grow">
            {location.pathname === '/' ? <LandingPage /> : <Outlet />}
          </main>
          <Footer />
        </div>
      ) : <div>Loading...</div>}
    </div>
  );
}

export default App;
