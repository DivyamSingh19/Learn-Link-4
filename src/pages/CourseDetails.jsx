import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CourseDetails({ courses }) {
  const { slug } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const selectedCourse = courses.find((course) => course.slug === slug);
    setCourse(selectedCourse);
  }, [courses, slug]);

  return (
    <div>
      {course ? (
        <div>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default CourseDetails;
