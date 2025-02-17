import React from 'react';
import { GraduationCap, Award, Coffee } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
            I'm an aspiring data scientist and software developer passionate about building innovative solutions through data and technology. Currently pursuing the Coursera Data Science Professional Certificate, I'm gaining hands-on experience in data analysis, visualization, and AI/ML. Alongside my data science journey, I have a strong foundation in software development, working on web applications, APIs, and system integrations.

            With a background in mathematics and programming, I enjoy solving complex problems through code and data-driven decision-making. I'm always eager to collaborate on projects, explore new technologies, and contribute to impactful solutions. Open to networking, learning opportunities, and industry connections in both software development and data science.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="font-semibold mb-2">Education</h3>
                <p className="text-sm text-gray-600">
                  B.S. Computer Science<br />
                  Riara University
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="font-semibold mb-2">Experience</h3>
                <p className="text-sm text-gray-600">
                  1+ Years<br />
                  Software Development
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Coffee className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="font-semibold mb-2">Projects</h3>
                <p className="text-sm text-gray-600">
                  5+ Projects<br />
                  Completed
                </p>
              </div>
            </div>

            <p className="text-gray-600 mb-6">
              When I'm not coding, you can find me contributing to open-source projects, reading critical thinking articles,
              or learning emerging technologies. I believe in continuous learning and staying up-to-date with the latest
              technologies and best practices in software development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}