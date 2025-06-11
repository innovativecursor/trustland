import Image from 'next/image';

import image1 from '../../public/assets/ServicesAssets/service_img1.png'
import image2 from '../../public/assets/ServicesAssets/service_img2.png'
import image3 from '../../public/assets/ServicesAssets/service_img3.png'
import image4 from '../../public/assets/ServicesAssets/service_img4.png'

const images = [image1, image2, image3,image4];

const ImgGridService: React.FC = () => {
  return (
    <div className="hidden md:flex">
      {images.map((src, index) => (
        <div key={index} className="relative w-full h-74">
          <Image src={src} layout="fill" objectFit="cover" alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};



export default ImgGridService;