import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const App = () => {
  return (
    <div className="bg-blue-400 text-white min-h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to LearnLink</h1>
        <p className="text-lg mb-8">Empowering Education, Empowering You</p>
        <Link to="/courses" className="bg-white text-blue-900 px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-blue-800 hover:text-white transition duration-300">
          Get Started
        </Link>
      </div>
      <div className="mt-16 flex items-center justify-center">
        <FaGraduationCap className="text-6xl mr-4" />
        <h2 className="text-3xl font-bold">Learn Anytime, Anywhere</h2>
      </div>
      <div className="mt-16 flex items-center justify-center">
        <h2 className="text-3xl font-bold">Discover Our Courses</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <div className="bg-blue-800 rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-2">Programming Basics</h3>
          <p className="text-lg mb-4">Learn the fundamentals of programming from scratch.</p>
          <Link to="/courses" className="bg-blue-900 text-white px-4 py-2 rounded-lg font-bold shadow-md hover:bg-blue-800 hover:text-white transition duration-300">
            Enroll Now
          </Link>
        </div>
        <div className="bg-blue-800 rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-2">Web Development</h3>
          <p className="text-lg mb-4">Build stunning websites and web applications.</p>
          <Link to="/courses" className="bg-blue-900 text-white px-4 py-2 rounded-lg font-bold shadow-md hover:bg-blue-800 hover:text-white transition duration-300">
            Enroll Now
          </Link>
        </div>
        <div className="bg-blue-800 rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-2">Data Science</h3>
          <p className="text-lg mb-4">Explore the world of data and unlock insights.</p>
          <Link to="/courses" className="bg-blue-900 text-white px-4 py-2 rounded-lg font-bold shadow-md hover:bg-blue-800 hover:text-white transition duration-300">
            Enroll Now
          </Link>
        </div>
      </div>
      <footer className="mt-16 text-center">
        <p>&copy; 2024 LearnLink. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
