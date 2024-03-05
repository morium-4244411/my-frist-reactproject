import Navbar from './components/navbarSection/Navbar';
import ServicesMain from './components/sarviceSection/SarvicesMain';
import PricingMain from './components/Pricing/PricingMain';
import TestimonialsMain from './components/Tastimonial/TestimonialsMain';
import ContactMain from './components/Contact/ContactMain';
import FooterMain from './components/footer/FooterMain';
import HeroMain from './components/HeroSection/HeroMain';


function App() {
  return (
    <div className="App">
  <div className='navbar__section sticky top-0 bg-black h-20 z-50'>
      <Navbar/>
      </div>
    <div className='herosection bg-[#f1f5f9] py-14'>
  <HeroMain />
    </div>
      
      <div id='services' className='services__section py-9 lg:py-16 bg-[#e2e8f0]'>
        <ServicesMain />
      </div>.

      <div className='festimonials__section pt-12 pb-6 md:py-12 lg:py-16'>
        <TestimonialsMain/>
      </div>

     <div className='Pricing py-9 lg:py-16 bg-[#e2e8f0]'>
     <PricingMain />
     </div>
     <div className='contact__section pb-9 lg:pt-4 lg:pb-16 bg-[#e2e8f0] flex items-center relative'>
        <div className='w-full h-[300px] absolute bg-[#0bb827]  z-0'></div>
        <ContactMain />
      </div>
    
      <div className='footer__section bg-[#000000] pt-12 pb-7 lg:py-20'>
        <FooterMain/>
      </div>

     
     

    </div>
  );
};

export default App;
