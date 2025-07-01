
import { Zap, BarChart3, Settings, Users2, Mail, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Users2 size={32} />,
      title: "B2B Lead Generation",
      description: "Develop comprehensive lead generation strategies that attract high-quality prospects and convert them into qualified leads for your sales team.",
      features: ["Multi-channel outreach", "Lead scoring & qualification", "Prospect research & targeting"]
    },
    {
      icon: <Settings size={32} />,
      title: "GTM Operations",
      description: "Optimize your go-to-market operations with streamlined processes, better alignment between teams, and data-driven decision making.",
      features: ["Process optimization", "Sales & marketing alignment", "Revenue operations setup"]
    },
    {
      icon: <Mail size={32} />,
      title: "Marketing Automation",
      description: "Implement and optimize marketing automation workflows that nurture leads, engage prospects, and drive conversions at scale.",
      features: ["Email automation", "Lead nurturing workflows", "CRM integration & setup"]
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Performance Analytics",
      description: "Track, measure, and optimize your marketing performance with comprehensive analytics and reporting dashboards.",
      features: ["ROI tracking", "Campaign performance analysis", "Custom reporting dashboards"]
    },
    {
      icon: <Zap size={32} />,
      title: "Campaign Management",
      description: "End-to-end campaign management from strategy and execution to optimization and reporting across multiple channels.",
      features: ["Multi-channel campaigns", "A/B testing", "Conversion optimization"]
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Growth Strategy",
      description: "Develop data-driven growth strategies that align with your business goals and accelerate your path to market leadership.",
      features: ["Market analysis", "Competitive positioning", "Scalable growth frameworks"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Services I Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive B2B marketing and operations solutions designed to accelerate 
            your growth and maximize your revenue potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Let's Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
