
import { Target, TrendingUp, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With years of experience in digital marketing and go-to-market operations, 
            I specialize in helping B2B companies build scalable lead generation systems 
            that drive consistent, qualified pipeline growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Driving B2B Growth Through Strategic Operations
            </h3>
            <p className="text-gray-600 mb-6">
              Most people call me Rao, and I'm passionate about transforming how B2B companies 
              approach their go-to-market strategy. I believe that successful lead generation 
              isn't just about volume—it's about precision, process, and continuous optimization.
            </p>
            <p className="text-gray-600 mb-8">
              My approach combines data-driven insights with creative marketing strategies to 
              build sustainable growth engines. I work closely with sales and marketing teams 
              to ensure alignment and maximize ROI on every campaign.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Target className="text-white" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="text-white" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900">300%</div>
                <div className="text-gray-600">Avg Growth Rate</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="text-white" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900">25+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Core Expertise</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">B2B Lead Generation Strategy</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">Marketing Automation & CRM Setup</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Go-to-Market Operations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">Performance Analytics & Optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Sales Funnel Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">Multi-channel Campaign Management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
