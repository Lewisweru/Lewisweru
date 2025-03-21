import React from 'react';

const dataScienceCertificates = [
  {
    title: 'What is Data Science',
    organization: 'Coursera',
    date: 'Feb 17, 2025',
    link: 'https://coursera.org/share/bd322eb1ea60f58b210cb2de2b36d68c',
    logo: 'https://i.imgur.com/RFi5Oyv.png',
  },
  {
    title: 'Python for Data Science, AI & Development',
    organization: 'Coursera',
    date: 'Feb 13, 2025',
    link: 'https://coursera.org/share/7d00e8e3aa30e7d0b5820e8ff6bac221',
    logo: 'https://i.imgur.com/RFi5Oyv.png',
  },
  {
    title: 'Hands-on Introduction to Linux Commands and Shell Scripting',
    organization: 'Coursera',
    date: 'Feb 10, 2025',
    link: 'https://coursera.org/share/c6cb26b1ef1045627e81443256eefd1b',
    logo: 'https://i.imgur.com/RFi5Oyv.png',
  },
  {
    title: 'Tools for data science',
    organization: 'Coursera',
    date: 'Feb 23, 2025',
    link: 'https://coursera.org/share/741a86125b1d4b6c23816a452ea6d383',
    logo: 'https://i.imgur.com/RFi5Oyv.png',
  },
  {
    title: 'Pandas',
    organization: 'Kaggle',
    date: 'Feb 27, 2025',
    link: 'https://www.kaggle.com/learn/certification/lewisweru/pandas',
    logo: 'https://i.imgur.com/tnVGFQO.png',
  },{
    title: 'Python',
    organization: 'Kaggle',
    date: 'March 21, 2025',
    link: 'https://www.kaggle.com/learn/certification/lewisweru/python',
    logo: 'https://i.imgur.com/tnVGFQO.png',
  }
  
];

const softwareDevCertificates = [
  {
    title: 'Introduction to Software Engineering',
    organization: 'Coursera',
    date: 'November 8, 2024',
    link: 'https://coursera.org/share/301eb05a78d7ad6dfa507a1b9eb06014',
    logo: 'https://i.imgur.com/RFi5Oyv.png',
  },
  {
    title: 'Introduction to Cloud Computing',
    organization: 'Coursera',
    date: 'October 22, 2024',
    link: 'https://coursera.org/share/053bf00e38e609c46f944d30e71ee62b',
    logo: 'https://i.imgur.com/RFi5Oyv.png',
  },
  {
    title: 'Introduction to Agile Development and Scrum',
    organization: 'Coursera',
    date: 'November 1, 2024',
    link: 'https://coursera.org/share/8774a82144739159fd5c4327aba1ad7a',
    logo: 'https://i.imgur.com/RFi5Oyv.png',
  },
  {
    title: 'Introduction to DevOps',
    organization: 'Coursera',
    date: 'October 11, 2024',
    link: 'https://coursera.org/share/bf437dcbcf5c0511ab9be18a8646ed95',
    logo: 'https://i.imgur.com/RFi5Oyv.png',
  },
  {
    title: 'Getting Started with Git and GitHub',
    organization: 'Coursera',
    date: 'Nov 10, 2024',
    link: 'https://coursera.org/share/c3cf2cb72c51bd284d4338c0494d1433',
    logo: 'https://i.imgur.com/RFi5Oyv.png',
  }
];

export default function Certificates() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Certificates</h2>

        {/* Data Science & AI Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold text-center mb-6 text-blue-400">
            Data Science & AI
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {dataScienceCertificates.map((certificate, index) => (
              <div key={index} className="bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
                <img src={certificate.logo} alt={`${certificate.organization} logo`} className="h-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-center">{certificate.title}</h3>
                <p className="text-gray-400 text-center">{certificate.organization} - {certificate.date}</p>
                <div className="mt-4 text-center">
                  <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition-colors">
                    View Certificate
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Software Development Section */}
        <div>
          <h3 className="text-3xl font-semibold text-center mb-6 text-green-400">
            Software Development
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {softwareDevCertificates.map((certificate, index) => (
              <div key={index} className="bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
                <img src={certificate.logo} alt={`${certificate.organization} logo`} className="h-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-center">{certificate.title}</h3>
                <p className="text-gray-400 text-center">{certificate.organization} - {certificate.date}</p>
                <div className="mt-4 text-center">
                  <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition-colors">
                    View Certificate
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
