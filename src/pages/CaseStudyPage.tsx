import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from '../data/projects';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CaseStudyPage = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="py-16 bg-white min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Project Not Found</h1>
          <p className="text-gray-700 mb-4">Sorry, the project you are looking for does not exist.</p>
          <Link to="/portfolio" className="text-blue-600 hover:underline">← Back to Portfolio</Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-28 py-16 bg-white min-h-screen max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-lg shadow-lg object-cover mb-6"
          />
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{project.title}</h1>
          <p className="text-sm text-gray-500 mb-6">
            {new Date(project.date).toLocaleDateString()} • {project.skills?.join(', ')}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.skills?.map((skill) => (
              <span
                key={skill}
                className="bg-black text-white text-xs px-2 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
          <p className="text-gray-700 leading-7 mb-10 whitespace-pre-line">{project.content}</p>
          <Link
            to="/portfolio"
            className="inline-block text-sm bg-black text-white px-5 py-2 rounded hover:bg-gray-900 transition"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CaseStudyPage;
