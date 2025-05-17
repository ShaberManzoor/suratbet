import {useState} from 'react';
import { NavLink } from 'react-router-dom';

// service images
const service_images:string[] = [
  '/assets/faqs-1.jpeg',
  '/assets/faqs-2.jpeg',
  '/assets/faqs-3.jpeg',
  '/assets/faqs-1.jpeg',
  '/assets/faqs-2.jpeg',
  '/assets/faqs-3.jpeg',
  '/assets/faqs-1.jpeg',
];
// const service_images:string[] = [
//   '/assets/img/others/services_img01.jpg',
//   '/assets/img/others/services_img02.jpg',
//   '/assets/img/others/services_img03.jpg',
//   '/assets/img/others/services_img04.jpg'
// ];
// faq data type 
type IFaq = {
  id: string;
  active?: boolean;
  title: string;
  desc: string;
} 
// faq data 
const faq_data: IFaq[] = [
  {
    id: "one",
    active: true,
    title: "How can I become a member?",
    desc: 'Click the "Member" button on the top right of the homepage. Fill in the required details like name, surname, date of birth, T.C. ID number, phone, username, email, and password. Your account will be activated instantly after registration.',
  },
  {
    id: "two",
    title: "How soon will the investment process be completed?",
    desc: "All investment methods are processed instantly. It usually takes less than 1 minute.",
  },
  {
    id: "three",
    title: "How soon will the withdrawal process take?",
    desc: "Withdrawals are typically completed within 15–30 minutes after confirmation. This may vary depending on system load.",
  },
  {
    id: "four",
    title: "In what ways can I invest?",
    desc: "You can invest using bank transfer, Papara, Mefete, crypto, and many other up-to-date payment methods.",
  },
  {
    id: "five",
    title: "How can I benefit from bonuses?",
    desc: "Bonuses are not applied automatically. After logging in, go to the Bonus Request section to choose your bonus. You can also contact live support for assistance.",
  },
  {
    id: "six",
    title: "Can I play on mobile?",
    desc: "Yes, SpeedBet is fully compatible with mobile phones and tablets, offering seamless access across devices.",
  },
  {
    id: "seven",
    title: "What games can I play?",
    desc: "You can enjoy a wide range of games including sports betting, live betting, slots, and live casino.",
  },
];

const FaqArea = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleMouseOver = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <section id='faqs' className="faq-area">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6">
                <div className="faq__content-wrap">
                    <div className="section__title text-start">
                        <span className="sub-title tg__animate-text">Get your answer</span>
                        <h3 className="title">Frequently asked questions</h3>
                        <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum <br/> sollicitudin is yaugue euismods.</p>
                    </div>
                    <div className="faq__wrapper">
                        <div className="accordion" id="accordionExample">
                          {faq_data.map((item,i) => (
                            <div key={i} className="accordion-item" onClick={() => handleMouseOver(i)}>
                                <h2 className="accordion-header" id={`heading-${item.id}`}>
                                    <button className={`accordion-button ${item.active?'':'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${item.id}`} aria-expanded={item.active?'true':'false'} aria-controls={`collapse-${item.id}`}>
                                       <span className="count">{i+1}</span> {item.title}
                                    </button>
                                </h2>
                                <div id={`collapse-${item.id}`} className={`accordion-collapse collapse ${item.active?'show':''}`} aria-labelledby={`heading-${item.id}`} data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        {item.desc}
                                    </div>
                                </div>
                            </div>
                          ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="services__images">
                {service_images.map((s,i) => (
                    <div key={i} className={`services__images-item ${activeIndex === i ? "active" : ""}`}>
                        <img src={s} alt="img" style={{width:'100%',height:'100%'}} />
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

export default FaqArea;