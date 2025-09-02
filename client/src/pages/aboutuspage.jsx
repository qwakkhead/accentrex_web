import Navbar from '../components/navbar';
import Footer from '../components/footer';
import globeImage from '../assets/globe-image.png';
import AIcon from '../assets/icons/a-accountability.png';
import CIcon from '../assets/icons/c-commitment.png';
import CIcon2 from '../assets/icons/c-clarity.png';
import EIcon from '../assets/icons/e-empathy.png';
import NIcon from '../assets/icons/n-nurturing.png';
import TIcon from '../assets/icons/t-transparency.png';
import RIcon from '../assets/icons/r-reliability.png';
import EIcon2 from '../assets/icons/e-excellence.png';
import XIcon from '../assets/icons/x-experience.png';

export default function AboutUs() {
  const coreValues = [
    { letter: 'A', label: 'Accountability', icon: AIcon },
    { letter: 'C', label: 'Commitment', icon: CIcon },
    { letter: 'C', label: 'Clarity', icon: CIcon2 },
    { letter: 'E', label: 'Empathy', icon: EIcon },
    { letter: 'N', label: 'Nurturing', icon: NIcon },
    { letter: 'T', label: 'Transparency', icon: TIcon },
    { letter: 'R', label: 'Reliability', icon: RIcon },
    { letter: 'E', label: 'Excellence', icon: EIcon2 },
    { letter: 'X', label: 'Experience', icon: XIcon },
  ];

  return (
    <div className="font-sans text-[#660000] bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="flex items-center justify-center px-6 md:px-20 py-12">
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl w-full">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-[clamp(2.5rem,5vw,5rem)] font-bold leading-tight space-y-2 text-[#831515]">
              <p>Study</p>
              <p>Live</p>
              <p>Migrate</p>
            </h1>
          </div>
          {/* Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={globeImage}
              alt="Globe"
              className="rounded object-contain h-auto max-h-[400px] md:max-h-[500px] w-full"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-6 md:px-20 pb-12">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <div className="border border-[#660000] rounded-xl p-6 text-lg leading-relaxed bg-white">
          <p className="mb-4">
            At Accentrex, we help Filipinos turn their migration dreams into reality. Our mission is to simplify what can often be a long and overwhelming process by providing step-by-step guidance tailored to your personal circumstances.
          </p>
          <p>
            We have proudly assisted thousands of Filipinos in migrating to Australia, New Zealand, and Canada, opening new doors for careers, education, and a better life for their families.
          </p>
        </div>
      </section>

      {/* Why Choose / What We Do */}
      <section className="bg-[#611221] text-white py-12 px-6 md:px-20">
  <div className="flex flex-col md:flex-row gap-16 max-w-6xl mx-auto">
    
    {/* Left: Why Choose */}
    <div className="flex-1">
      <h2 className="text-4xl font-bold mb-6">Why Choose Accentrex?</h2>
      <p className="mb-8">
        We are led by experienced and qualified migration professionals with strong international credentials:
      </p>

      {/* Card Grid */}
      <div className="grid sm:grid-cols-2 gap-6">
        {[
          { title: "Graduate of Australian Migration Law" },
          { title: "Studied at the Australian National University" },
          { title: "Former Australian Registered Migration Agent" },
          { title: "Former New Zealand Licensed Immigration Adviser" },
          { title: "Processed over 500 visa applications" },
          { title: "More than 400 visa approvals" },
          { title: "15+ years experience in visa & migration processing" }
        ].map((item, index) => (
          <div 
            key={index} 
            className="bg-[#75182A] rounded-xl p-5 shadow-lg border border-[#8B1F37] hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
          </div>
        ))}
      </div>

      <p className="mt-8 text-base leading-relaxed">
        With Accentrex, you’re guided by experts who know immigration inside and out — not just by theory, but by real-world success.
      </p>
    </div>

    {/* Gap between columns */}
    <div className="hidden md:block w-10"></div>

    {/* Right: What We Do */}
    <div className="flex-1 bg-[#fff2f2] text-[#611221] rounded-lg p-8 shadow-lg">
      <h3 className="text-3xl font-bold mb-4 text-center">What We Do</h3>
      <p className="text-center mb-8">
        Through our <span className="font-semibold">Study, Live & Migrate Program</span>, we offer expert support and practical migration solutions whether you're a:
      </p>
      
      {/* Roles */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {/* Row 1 */}
        <div className="bg-[#611221] text-white py-4 px-2 rounded-xl font-semibold text-center hover:scale-105 transition-transform duration-200">
          01 <br /> Skilled Professional
        </div>
        <div className="bg-[#611221] text-white py-4 px-2 rounded-xl font-semibold text-center hover:scale-105 transition-transform duration-200">
          02 <br /> Student
        </div>
        <div className="bg-[#611221] text-white py-4 px-2 rounded-xl font-semibold text-center hover:scale-105 transition-transform duration-200">
          03 <br /> Business Owner
        </div>

        {/* Row 2 */}
        <div className="col-span-1"></div> {/* spacer sa kaliwa */}
        <div className="flex gap-4 col-span-1 justify-center">
          <div className="bg-[#611221] text-white py-4 px-9 rounded-xl font-semibold text-center hover:scale-105 transition-transform duration-200 w-full">
            04 <br /> Family Member
          </div>
          <div className="bg-[#611221] text-white py-4 px-5 rounded-xl font-semibold text-center hover:scale-105 transition-transform duration-200 w-full">
            05 <br /> Simple Holidaymaker
          </div>
        </div>
        <div className="col-span-1"></div> {/* spacer sa kanan */}
      </div>


      <p className="text-center mb-6">
        We provide full assistance — from identifying the best migration pathway for you to completing your visa application with confidence and clarity.
      </p>
      
      <p className="font-semibold text-center text-lg">
         Currently, we are inviting IT professionals and engineers with at least 5 years of experience to attend our FREE seminar on migrating to Australia.
      </p>
    </div>

  </div>
</section>


      {/* Core Values */}
      <section className="bg-white text-[#660000] py-12 px-6 md:px-20 relative">
        <img
          src="./public/images/bg-mission.jpg"
          alt="Mission background"
          className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
        />
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-2">Our Core Values</h2>
          <p className="text-lg mb-2 font-medium">ACCENTREX is our core values</p>
          <p className="text-lg mb-10">
            Here at Accentrex, our team possess the following core values intrinsic to our daily operations and lives:
          </p>

          <div className="grid grid-cols-3 gap-8 justify-items-center max-w-2xl mx-auto">
            {coreValues.map(({ letter, label, icon }) => (
              <div
                key={label}
                className="group relative flex flex-col items-center justify-center h-40 w-32 rounded-lg overflow-hidden bg-white shadow-md cursor-pointer"
              >
                <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-[#660000] group-hover:opacity-0 transition duration-300">
                  {letter}
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-[#660000] to-white group-hover:opacity-100 opacity-0 transition duration-300">
                  <img src={icon} alt={label} className="w-12 h-12 mb-2" />
                  <p className="text-white text-sm font-semibold">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
