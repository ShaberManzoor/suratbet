import { useState } from "react";
import { NavLink } from "react-router-dom";
import HeaderNavMenus from "./header-nav-menus";
import StickyWrapper from "./sticky-wrapper";
import OffCanvas from "../../components/common/off-canvas";
import MobileOffCanvas from "../../components/common/mobile-offcanvas";


export default function HeaderFour() {
    const [isOffCanvasOpen, setIsOffCanvasOpen] = useState<boolean>(false);
    const [openMobileOffCanvas, setOpenMobileOffCanvas] = useState<boolean>(false);
    // handle open offcanvas
    const handleOpenOffCanvas = (audioPath: string) => {
        setIsOffCanvasOpen(true)
        const audio = new Audio(audioPath);
        audio.play();
    };
    // handle open search
    const handleOpenMobileOffCanvas = (audioPath: string) => {
        setOpenMobileOffCanvas(true)
        const audio = new Audio(audioPath);
        audio.play();
    };
    return (
        <header>
            <StickyWrapper top_cls="tg-header__area tg-header__area-four">
                <div className="container custom-container4">
                    <div className="row">
                        <div className="col-12">
                            <div className="mobile-nav-toggler" onClick={() => handleOpenMobileOffCanvas('/assets/audio/click.wav')}>
                                <i className="fas fa-bars"></i>
                            </div>
                            <div className="tgmenu__wrap">
                                <nav className="tgmenu__nav">
                                    <div className="logo">
                                        <NavLink to="/">
                                            <img src="/assets/img/logo/logo.png" alt="Logo" />
                                        </NavLink>
                                    </div>
                                    <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                                        {/* nav menus */}
                                        <HeaderNavMenus />
                                        {/* nav menus */}
                                    </div>
                                    <div className="tgmenu__action d-none d-md-block">
                                        <ul className="list-wrap">
                                            <li className="header-btn">
                                                <NavLink to="/login" className="tg-btn-4">
                                                    <span>Get A Quote</span>
                                                </NavLink>
                                            </li>
                                            <li onClick={() => handleOpenOffCanvas('/assets/audio/click.wav')} className="side-toggle-icon">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </StickyWrapper>


            {/* off canvas start */}
            <OffCanvas isOffCanvasOpen={isOffCanvasOpen} setIsOffCanvasOpen={setIsOffCanvasOpen} />
            {/* off canvas end */}

            {/*mobile off canvas start */}
            <MobileOffCanvas openMobileOffCanvas={openMobileOffCanvas} setOpenMobileOffCanvas={setOpenMobileOffCanvas} />
            {/*mobile off canvas end */}
        </header>
    )
}
