import React from 'react';

const certificates = [
  {
    title: 'Introduction to software engineering',
    organization: 'Coursera',
    date: 'November 8, 2024',
    link: 'https://coursera.org/share/301eb05a78d7ad6dfa507a1b9eb06014',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Udemy_Logo.svg',
  },
  {
    title: 'Introduction to cloud computing',
    organization: 'Coursera',
    date: 'October 22, 2024',
    link: 'https://coursera.org/share/053bf00e38e609c46f944d30e71ee62b',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png',
  },
  {
    title: 'Introduction to Agile development and scrum',
    organization: 'Coursera',
    date: 'November 1, 2024',
    link: 'https://coursera.org/share/8774a82144739159fd5c4327aba1ad7a',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png',
  },
  {
    title: 'Introduction to DevOps',
    organization: 'Coursera',
    date: 'October 11, 2024',
    link: 'https://coursera.org/share/bf437dcbcf5c0511ab9be18a8646ed95',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png',
  },
  {
    title: 'Getting Started with Git and Github',
    organization: 'Coursera',
    date: 'Nov 10, 2024',
    link: 'https://coursera.org/share/c3cf2cb72c51bd284d4338c0494d1433',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png',
  },
];

export default function Certificates() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Certificates</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all"
            >
              <img
                src={certificate.logo}
                alt={`${certificate.organization} logo`}
                className="h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-center">
                {certificate.title}
              </h3>
              <p className="text-gray-400 text-center">
                {certificate.organization} - {certificate.date}
              </p>
              <div className="mt-4 text-center">
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600 transition-colors"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
