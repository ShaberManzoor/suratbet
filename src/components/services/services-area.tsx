import {useState} from 'react';
import { NavLink } from 'react-router-dom';

// service images
const service_images: string[] = [
  "/assets/faqs-1.jpeg",
  "/assets/faqs-2.jpeg",
  "/assets/faqs-3.jpeg",
  "/assets/faqs-1.jpeg",
  "/assets/faqs-2.jpeg",
  "/assets/faqs-3.jpeg",
  "/assets/faqs-1.jpeg",
];

const service_items: {
  id: number;
  icon: string;
  title: string;
  desc: string;
}[] = [
  {
    id: 1,
    icon: "flaticon-diamond",
    title: "Fast Earnings",
    desc: "Bonuses on SpeedBet are fast and effective! With a 300% welcome bonus and 333 freespins, your winnings are turbocharged from the start.",
  },
  {
    id: 2,
    icon: "flaticon-user-profile",
    title: "Reliable Platform",
    desc: "SpeedBet is built on a strong Betco infrastructure with high performance, delivering smooth and seamless gameplay every time.",
  },
  {
    id: 3,
    icon: "flaticon-ethereum",
    title: "Diverse Games",
    desc: "From sports betting to live casino and slots, enjoy a wide variety of games on a secure, mobile-friendly platform.",
  },
  {
    id: 4,
    icon: "flaticon-settings-1",
    title: "Global Support",
    desc: "24/7 Turkish live support, fair gameplay with a Tobuque license, and constant bonus offers make SpeedBet a trusted choice worldwide.",
  },
];

const ServicesArea = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleMouseOver = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseOut = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <section id='about' className="services-area services__bg-color section-pt-120 section-pb-120">
    <div className="container">
        <div className="row align-items-end align-items-xl-start">
            <div className="col-lg-6">
                <div className="section__title text-start mb-65">
                    <span className="sub-title tg__animate-text">powerful services</span>
                    <h3 className="title">Our Powerful Services Done on time</h3>
                </div>
                <div className="services__wrapper">
                  {service_items.map((item,i) => (
                    <div key={item.id} className="services__item" onMouseOver={() => handleMouseOver(i)} onMouseOut={()=> handleMouseOut(i)}>
                        <div className="services__icon">
                            <i className={item.icon}></i>
                        </div>
                        <div className="services__content">
                            <h4 className="title"><NavLink to="/service-details">{item.title}</NavLink></h4>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                  ))}
                </div>
            </div>
            <div className="col-lg-6">
                <div className="services__images">
                  {service_images.map((s,i) => (
                    <div key={i} className={`services__images-item ${activeIndex === i ? "active" : ""}`}>
                        <img src={s} alt="img" />
                        <NavLink to="/service-details" className="services__link">
                            <i className="flaticon-next"></i>
                        </NavLink>
                    </div>
                  ))}
                </div>
            </div>
        </div>
    </div>
  </section>
  );
};

export default ServicesArea;