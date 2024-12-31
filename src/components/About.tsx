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
              I'm a passionate software developer with over 2 years of experience in building web applications.
              My journey in technology began during after my highschool years when I discovered my love for problem-solving through code.
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
                  2+ Years<br />
                  Full-Stack Development
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