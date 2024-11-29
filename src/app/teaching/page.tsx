const teachingData = [
  {
    title: "Introduction to Computer Science",
    years: "2022-2024",
    tldr: "Fundamentals of programming using Python, covering algorithms and data structures",
    materials: [
      { name: "Lecture Slides", url: "/materials/intro-cs-slides.pdf" },
      { name: "Practice Problems", url: "/materials/practice-problems.pdf" },
    ],
  },
  // ... add more courses as needed
];

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
    <h1 className="text-4xl font-bold text-blue-600 mb-8">Teaching</h1>
      
      <div className="space-y-6">
        {teachingData.map((course, index) => (
          <div key={index} className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p className="text-gray-600">{course.years}</p>
            <p className="mt-2">{course.tldr}</p>
            
            {course.materials && course.materials.length > 0 && (
              <div className="mt-4">
                <h3 className="font-medium mb-2">Materials:</h3>
                <div className="space-x-4">
                  {course.materials.map((material, idx) => (
                    <a
                      key={idx}
                      href={material.url}
                      className="inline-block text-blue-600 hover:text-blue-800"
                      download
                    >
                      {material.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
