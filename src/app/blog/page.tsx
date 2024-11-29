export default function Blog() {
  const articles = [
    {
      title: "The Impact of Artificial Intelligence on Modern Education",
      year: 2024,
      tldr: "An analysis of how AI technologies are transforming educational methodologies and learning outcomes in higher education",
      link: "/blog/ai-in-education"
    },
    {
      title: "Research Methodology in Social Sciences",
      year: 2023,
      tldr: "A comprehensive guide to qualitative and quantitative research methods, data collection techniques, and analysis frameworks",
      link: "/blog/research-methodology"
    },
    {
      title: "Understanding Quantum Computing Fundamentals",
      year: 2022,
      tldr: "An introductory exploration of quantum computing principles, qubits, and their potential impact on computational science",
      link: "/blog/quantum-computing"
    },
    {
      title: "Climate Change: A Multidisciplinary Perspective",
      year: 2023,
      tldr: "Examining climate change through the lens of environmental science, economics, and social policy",
      link: "/blog/climate-change-perspective"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Academic Articles</h1>
      <div className="space-y-6">
        {articles.map((article, index) => (
          <article key={index} className="border-b border-gray-200 pb-6">
            <div className="group">
              <h2 className="text-2xl font-semibold group-hover:text-blue-600 transition-colors">
                {article.title}
              </h2>
              <p className="text-gray-600 mt-1">{article.year}</p>
              <p className="text-gray-700 mt-2">{article.tldr}</p>
              <a 
                href={article.link}
                className="inline-block mt-3 text-blue-600 hover:text-blue-800 font-medium"
              >
                Read More →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

