import React, { useState } from 'react';
import Webdev from './course_images/Webdev.jpg';
import aoa from './course_images/aoa.jpg';
import python from './course_images/python.jpg';

function Courses() {
  // Sample course data
  const courses = [
    {
      id: 1,
      title: 'Web Development',
      image: Webdev,
      description: "Embark on a journey into the dynamic world of web development with our comprehensive course designed for beginners and enthusiasts alike. Dive deep into the fundamentals of front-end and back-end development, mastering essential languages and frameworks such as HTML, CSS, JavaScript, React, Node.js, and more. Through hands-on projects and guided tutorials, you'll learn to create stunning, responsive websites and dynamic web applications from scratch. Whether you're pursuing a career in web development or simply exploring your passion for coding, this course will equip you with the skills and knowledge needed to thrive in the digital landscape.",
      links: [
        { name: 'PDF Notes', url:  "https://mrcet.com/downloads/digital_notes/IT/WEB%20APPLICATION%20DEVELOPMENT.pdf" },
        // Add more links as needed
      ],
    },
    {
      id: 2,
      title: 'Analysis Of Algorithm',
      image: aoa,
      description: "Embark on a fascinating exploration of algorithms and their analysis in our Introduction to Algorithm Analysis course. Designed for students and professionals with a keen interest in computer science and problem-solving, this course delves into the fundamental principles and techniques used to design, analyze, and optimize algorithms. Through a blend of theoretical concepts and practical exercises, you'll gain a deep understanding of algorithmic complexity, efficiency, and correctness. Topics covered include algorithmic paradigms, data structures, sorting and searching algorithms, dynamic programming, and graph algorithms. Whether you're preparing for technical interviews, advancing your academic studies, or simply enhancing your problem-solving skills, this course will empower you to tackle complex computational challenges with confidence and precision. Join us on a journey to unravel the secrets of algorithm analysis and unlock your potential in the world of computing.",
      links: [
        { name: 'PDF Notes', url: "https://www.cet.edu.in/noticefiles/278_DAA%20Complete.pdf" },
        // Add more links as needed
      ],
    },
    {
      id: 3,
      title: 'Python',
      image: python,
      description: "'Welcome to our Python Programming Course! This course is designed to introduce you to the versatile and powerful world of Python programming. Whether you're a complete beginner or have some experience with programming, this course will help you build a strong foundation in Python and its applications.'",
      links: [
        { name: 'PDF Notes', url: " https://mrcet.com/downloads/digital_notes/CSE/III%20Year/PYTHON%20PROGRAMMING%20NOTES.pdf" },
        // Add more links as needed
      ],
    },
  ];

  // State to manage which course is selected
  const [selectedCourse, setSelectedCourse] = useState(null);
  // State to manage search query
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle clicking on a course card
  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setSelectedCourse(null);
  };

  // Filter courses based on search query
  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="py-8 px-4">
      {/* Add padding to create white breathing space */}
      {/* Search bar */}
      <div className="max-w-lg mx-auto mb-4">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Display courses or message if no courses found */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-blue-400 rounded-lg shadow-md overflow-hidden cursor-pointer relative"
              onClick={() => handleCourseClick(course)}
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-white text-lg font-bold text-center">{course.title}</h2>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">No courses found</div>
      )}

      {/* Display selected course details in a modal */}
      {selectedCourse && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{selectedCourse.title}</h2>
              <button className="text-gray-600" onClick={handleCloseModal}>
                Close
              </button>
            </div>
            <div className="flex justify-center mb-4">
              <img
                src={selectedCourse.image}
                alt={selectedCourse.title}
                className="w-64 h-auto rounded-md"
              />
            </div>
            <p className="mb-4">{selectedCourse.description}</p>
            <div>
              {selectedCourse.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  download={link.name} // Add the download attribute for downloading
                  className="block text-blue-500 hover:underline mb-2"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Courses;
