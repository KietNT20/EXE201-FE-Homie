import ChatButton from '@/components/ButtonComp/ChatButton';
import { cleaner, logo } from '@/constant/image';
import { PATH } from '@/constant/path';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';

const HomieComponent = () => {
  const services = [
    { label: 'Dọn dẹp nhà cửa', icon: '🧹' },
    { label: 'Giặt giũ, ủi đồ', icon: '🧺' },
    { label: 'Nấu ăn', icon: '🍳' },
    { label: 'Chăm sóc người bệnh', icon: '❤️' },
    { label: 'Chăm sóc thú cưng', icon: '🐾' },
    { label: 'Chăm sóc trẻ em', icon: '👶' },
  ];

  return (
    <main className="bg-gray-50">
      <Container maxWidth="lg">
        {/* Hero Section */}
        <section className="hero relative pt-3 md:pt-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center items-center mb-6">
              <img
                src={logo}
                alt="Homie logo"
                className="h-16 w-16 object-contain outline-none border-none"
              />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 ml-4">
                Homie
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-600">
              Your Home's Guardian
            </p>
            {/* 
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <input
                type="text"
                placeholder="Tìm kiếm Phổ Biến: Dọn nhà, Giặt Giũ, Nấu Ăn"
                className="text-base w-full px-4 py-3 rounded-lg border border-gray-300 outline-none shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-base">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <span className="font-medium text-nowrap">Tìm kiếm</span>
              </button>
            </div> */}
          </div>
        </section>

        {/* Services Section */}
        <section className="services py-6 md:py-12">
          <h2 className="text-xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Dịch Vụ Của Homie
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
            {services.map((service, index) => (
              <Link
                to={PATH.SERVICE}
                key={index}
                className="flex items-center justify-center gap-3 text-base px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors text-gray-700 hover:text-blue-600"
              >
                <span className="text-2xl">{service.icon}</span>
                <span className="font-medium">{service.label}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-center">
            <img src={cleaner} alt="Service workers" className="object-cover" />
          </div>
        </section>
      </Container>
      {/* Chat */}
      <ChatButton />
    </main>
  );
};

export default HomieComponent;
