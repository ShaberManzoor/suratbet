
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Scrollbar } from "swiper/modules";



// slider setting
const slider_setting = {
    loop: true,
    centeredSlides: true,
    spaceBetween: 24,
    observer: true,
    observeParents: true,
    breakpoints: {
        1920: {
            slidesPerView: 3
        },
        992: {
            slidesPerView: 3
        },
        320: {
            slidesPerView: 1
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragSize: 200
    }
}

const shopDealData = [
    {
      id: 1,
      img: '/assets/img/products/product-01.png',
      title: "Streaming Microphone",
      price: 59.99,
      rating: 4.8,
    },
    {
      id: 2,
      img: '/assets/img/products/product-02.png',
      title: "Wired Headphone With Mic",
      price: 89.99,
      rating: 4.8,
    },
    {
      id: 3,
      img: '/assets/img/products/product-03.png',
      title: "Xbox Wireless Controller",
      price: 39.99,
      rating: 4.8,
    },
    {
      id: 4,
      img: '/assets/img/products/product-04.png',
      title: "Mini Portable Speaker 2.0",
      price: 29.99,
      rating: 4.8,
    },
    {
      id: 5,
      img: '/assets/img/products/product-05.png',
      title: "Logitech G502 X PLUS Mouse",
      price: 69.99,
      rating: 4.8,
    },
    {
      id: 6,
      img: '/assets/img/products/product-06.png',
      title: "Microsoft Xbox Series S 10GB",
      price: 149.99,
      rating: 4.8,
    },
  ];

  
export default function ShopDealArea() {
    return (
        <section className="deal__area fix section-pb-120 section-pt-120" style={{ backgroundImage: `url(/assets/img/bg/deal-area_bg.png)` }}>
            <div className="container custom-container4">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section__title mb-60 text-center title-shape-none">
                            <h3 className="title">Deal Of The Day</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <Swiper {...slider_setting} modules={[Navigation, Scrollbar]} className="swiper-container deal-active">
                    {shopDealData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="shop__item2">
                                <div className="shop__item-thumb">
                                    <NavLink to="/shop-details">
                                        <img src={item.img} alt="img" />
                                    </NavLink>
                                </div>
                                <div className="shop__item-content">
                                    <div className="shop__item-rating"><i className="fas fa-star"></i>{item.rating}</div>
                                    <h4 className="title"><NavLink to="/shop-details">{item.title}</NavLink></h4>
                                    <div className="shop__item-price">${item.price}</div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="container custom-container4">
                        {/* scrollbar */}
                        <div className="swiper-scrollbar"></div>
                    </div>
                </Swiper>
            </div>
        </section>
    )
}
