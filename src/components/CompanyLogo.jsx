import shopee from '../assets/shopee.jpg'
import amazon from '../assets/amazon.png'
import lazada from '../assets/lazada.jpg'
import ebay from '../assets/ebay.jpg'
import bpi from '../assets/bpi.jpg'

const CompanyLogo = () => {
  const logos = [shopee, amazon, lazada, ebay, bpi];

  return (
    <div className="w-full container mx-auto py-20 overflow-hidden flex  flex-col sm:flex-row sm:items-center items-start ">
      <div className="w-[300px] shrink-0 px-8 text-gray-600 border-l-4 border-blue-500 bg-white py-2 z-10 sm:text-base text-xl font-semibold sm:text-left  mb-8 sm:mb-0">
        Proud partner at <br /> Hubspot & Segment
      </div>
      <div className="flex animate-marquee whitespace-nowrap">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Company Logo ${index + 1}`}
            className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
          />
        ))}
        {/* Duplicate logos for seamless loop */}
        {logos.map((logo, index) => (
          <img
            key={`duplicate-${index}`}
            src={logo}
            alt={`Company Logo ${index + 1}`}
            className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyLogo; 