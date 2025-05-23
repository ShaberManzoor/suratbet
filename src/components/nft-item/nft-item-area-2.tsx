import { NavLink } from "react-router-dom";


const nftItemData = [
    {
        id: 1,
        imgSrc: "/assets/img/nft/nft_img3-1.png",
        subtitle: "SUPPORT",
        title: "The Monster Claw",
    },
    {
        id: 2,
        imgSrc: "/assets/img/nft/nft_img3-2.png",
        subtitle: "SUPPORT",
        title: "The Monster Claw",
    },
    {
        id: 3,
        imgSrc: "/assets/img/nft/nft_img3-3.png",
        subtitle: "SUPPORT",
        title: "The Monster Claw",
    },
];

export default function NftItemAreaTwo() {
    return (
        <section className="nft-item__area4 section-pt-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section__title text-center mb-60 title-shape-none">
                            <h6 className="sub-title2">Our Recent Games</h6>
                            <h3 className="title2">Popular Launched Games</h3>
                        </div>
                    </div>
                </div>
                <div className="row gy-4 justify-content-center">
                    {nftItemData.map((item) => (
                        <div key={item.id} className="col-xl-4 col-md-6">
                            <div className="nft-card">
                                <div className="nft-card-thumb">
                                    <NavLink to="/shop-details">
                                        <img src={item.imgSrc} alt="NFT" />
                                    </NavLink>
                                </div>
                                <div className="nft-card-content">
                                    <span className="subtitle">{item.subtitle}</span>
                                    <h4 className="title">
                                        <NavLink to="/shop-details">{item.title}</NavLink>
                                    </h4>
                                    <div className="btn-wrap">
                                        <a href="#">
                                            <img src="/assets/img/icons/play-slore-btn.png" alt="Play Store" />
                                        </a>
                                        <a href="#">
                                            <img src="/assets/img/icons/apple-slore-btn.png" alt="Apple Store" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
