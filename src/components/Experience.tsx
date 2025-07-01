
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Senior GTM Operations Engineer",
      company: "TechScale Solutions",
      period: "2022 - Present",
      location: "Remote",
      description: "Leading go-to-market operations for B2B SaaS companies, implementing scalable lead generation systems and optimizing sales funnels.",
      achievements: [
        "Increased qualified leads by 400% through multi-channel campaign optimization",
        "Implemented marketing automation workflows that improved conversion rates by 65%",
        "Reduced customer acquisition cost by 45% through strategic process improvements"
      ]
    },
    {
      role: "Digital Marketing Specialist",
      company: "GrowthPath Agency",
      period: "2020 - 2022",
      location: "Hybrid",
      description: "Managed digital marketing campaigns for B2B clients, focusing on lead generation, content marketing, and performance optimization.",
      achievements: [
        "Managed $500K+ in annual ad spend across multiple clients",
        "Achieved average ROAS of 350% across all campaigns",
        "Developed lead scoring models that improved sales team efficiency by 60%"
      ]
    },
    {
      role: "Marketing Operations Analyst",
      company: "DataDriven Corp",
      period: "2018 - 2020",
      location: "On-site",
      description: "Analyzed marketing performance data, optimized campaigns, and supported the implementation of marketing technology stack.",
      achievements: [
        "Built comprehensive analytics dashboards that improved decision-making speed by 40%",
        "Optimized email marketing campaigns resulting in 80% improvement in open rates",
        "Streamlined lead management processes reducing response time by 50%"
      ]
    }
  ];

  const certifications = [
    "Google Analytics 4 Certified",
    "HubSpot Marketing Software Certified",
    "Facebook Marketing Professional",
    "Salesforce Administrator",
    "Google Ads Certified Professional"
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Experience & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A proven track record of driving growth for B2B companies through strategic 
            marketing operations and data-driven lead generation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Professional Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-1">{exp.role}</h4>
                        <p className="text-lg text-blue-600 font-semibold mb-2">{exp.company}</p>
                      </div>
                      <div className="flex flex-col sm:text-right text-sm text-gray-600">
                        <div className="flex items-center gap-1 mb-1">
                          <Calendar size={16} />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2 text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Certifications</h3>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                    <span className="text-gray-700">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 text-white">
              <h4 className="text-lg font-bold mb-3">Ready to grow your business?</h4>
              <p className="text-blue-100 text-sm mb-4">
                Let's discuss how I can help accelerate your B2B lead generation and optimize your go-to-market operations.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Start Conversation
                <ExternalLink size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
