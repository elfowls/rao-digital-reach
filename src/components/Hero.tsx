
import { ArrowDown, Mail, Linkedin, MessageCircle } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const Hero = () => {
  const [searchParams] = useSearchParams();
  const firstName = searchParams.get('first_name');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Hi, {firstName ? <span className="text-green-600 font-bold">{firstName}</span> : ''}
                <br />
                I'm Rao
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Muneeb
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-6">
                Digital Marketer & GTM Operations Engineer
              </p>
              <p className="text-lg text-gray-600 max-w-2xl">
                I help B2B businesses accelerate their growth through strategic lead generation, 
                data-driven marketing campaigns, and optimized go-to-market operations.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a 
                href="https://wa.me/447492991611"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                WhatsApp Me
              </a>
              <button 
                onClick={() => scrollToSection('services')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                View Services
              </button>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <a href="https://wa.me/447492991611" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
                <MessageCircle size={24} className="text-green-600" />
              </a>
              <a href="mailto:rao.muneeb@example.com" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
                <Mail size={24} className="text-blue-600" />
              </a>
              <a href="https://www.linkedin.com/in/rao-muneeb-34aa51340/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
                <Linkedin size={24} className="text-blue-600" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-2">
                <img
                  src="/lovable-uploads/ffe19722-a6ab-4fa3-ad85-311489c3a1a9.png"
                  alt="Rao Muneeb - Digital Marketer & GTM Operations Engineer"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={() => scrollToSection('about')} className="p-2">
            <ArrowDown size={24} className="text-gray-400" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
