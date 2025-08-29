import Navbar from '../components/navbar';
import Headline from '../components/headline';
import Footer from '../components/footer';

const CountryCard = ({ image, title, description }) => {
  return (
    <div className="bg-white border border-gray-200 shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-lg overflow-hidden flex flex-col">
      {/* Image Section with thick white border + rounded corners */}
      <div className="w-full p-4 bg-white">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover border-4 border-white rounded-xl"
        />
      </div>

      {/* Text Section */}
      <div className="p-6 sm:p-8 flex flex-col gap-4 text-[#831515] w-full">
        <h4 className="text-xl sm:text-2xl font-bold">{title}</h4>
        <p className="text-base sm:text-lg leading-relaxed text-justify">{description}</p>
      </div>
    </div>
  );
};

const Homepage = () => {
  return (
    <div className="w-full">
      {/* Navbar always on top */}
      <header className="relative z-50 w-full">
        <Navbar />
      </header>

      {/* Hero Section with Background Image */}
      <section className="relative h-screen flex items-center justify-start">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="./public/images/bg-description.png"
            alt="Happy family with passports"
            className="w-full h-full object-cover"
          />
          {/* Light overlay so black text stays readable */}
          <div className="absolute inset-0 bg-white/40 z-0"></div>
        </div>

        {/*Text content ABOVE overlay */}
        <div className="relative z-10 px-6 lg:px-12 max-w-7xl">
          <div className="max-w-2xl text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-gray-900 leading-tight mb-6">
              Expert Global
              <span className="text-[#831515] block">Migration</span>
              <span className="block">Professionals</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-900 leading-relaxed mb-8 max-w-lg">
              At Accentrex, we simplify the path to your dream life overseas. From expert
              consultation to smooth settlement, our team is here to support you with
              reliable, personalized assistance — every step of the way.
            </p>

            <button className="bg-transparent border-2 border-gray-900 text-gray-900 px-6 sm:px-8 py-3 rounded-none hover:bg-[#831515] hover:border-[#831515] hover:text-white transition-all duration-300 flex items-center gap-2">
              Read More <span>→</span>
            </button>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <div className="mb-4">
            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 flex-wrap">
              <div className="w-8 sm:w-12 h-0.5 bg-[#831515]"></div>
              <span className="text-[#831515] text-xs sm:text-sm tracking-wide uppercase text-center">
                Trusted Migration Experts Guiding You Every Step of the Way
              </span>
              <div className="w-8 sm:w-12 h-0.5 bg-[#831515]"></div>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
              About Accentrex
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 text-gray-600 leading-relaxed px-2 sm:px-0">
            <p className="text-sm sm:text-lg">
              At Accentrex, we simplify the path to your dream life overseas. From expert
              consultation to smooth settlement, our team is here to support you with
              reliable, personalized assistance — every step of the way.
            </p>
            <p className="text-sm sm:text-lg">
              Our experienced team provides comprehensive immigration services for multiple destinations
              including Australia, Canada, and New Zealand. We understand that each client's journey is unique,
              and we're committed to finding the best pathway that fits your individual circumstances and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 sm:gap-4 mb-8 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#831515] text-center sm:text-left">
              Available Countries
            </h3>
            <img
              src="./public/images/arrow.png"
              alt="Arrow Icon"
              className="w-20 sm:w-32 md:w-48 lg:w-56 h-4 sm:h-6 md:h-8"
            />
          </div>

          {/* Responsive Grid*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <CountryCard
              image="./public/images/australia.jpg"
              title="Live Your Dream Life in Australia"
              description="Start your journey as a permanent resident through skilled migration. With our expert guidance, you’re one step closer to building a future in one of the world’s most livable countries."
            />
            <CountryCard
              image="./public/images/canada.jpg"
              title="Make Canada Your New Home"
              description="Experience world-class opportunities, inclusive communities, and a better quality of life. Our team will help you navigate the path to permanent residency with ease and confidence."
            />
            <CountryCard
              image="./public/images/newzealand.png"
              title="Start Fresh in Peaceful New Zealand"
              description="Enjoy a balanced lifestyle, stunning landscapes, and great career prospects. Let us assist you in making your move hassle-free through skilled migration or family sponsorship."
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;
