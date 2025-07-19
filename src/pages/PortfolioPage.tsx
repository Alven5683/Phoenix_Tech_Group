import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PortfolioPage = () => {
  return (
    <>
      <Navbar />
      <main className="py-16 bg-white min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl pt-11 font-extrabold text-gray-900 mb-12 text-center">Our Project Portfolio</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.slug}
              to={`/portfolio/${project.slug}`}
              className="group block bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h2>
                <p className="text-gray-700 mb-3">{project.summary}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills?.map((skill) => (
                    <span
                      key={skill}
                      className="bg-black text-white text-xs px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-400">{new Date(project.date).toLocaleDateString()}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PortfolioPage;
