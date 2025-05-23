import { useParams } from "react-router-dom";
import Wrapper from "../../layout/wrapper";
import SEOCom from "../../components/seo";
import Header from "../../layout/header/header";
import Footer from "../../layout/footer/footer";
import BreadcrumbAreaThree from "../../components/breadcrumb/breadcrumb-area-3";
import ShopDetailsArea from "../../components/shop-details/shop-details-area";
import { all_products } from "../../data/product-data";


export default function ShopDetailsPage() {
  const { id } = useParams();
  const product = all_products.find((p) => Number(p.id) === Number(id)) || all_products[0];
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Shop Details" />
      {/* seo title */}

      {/* header start */}
      <Header />
      {/* header end */}

      {/* main area start */}
      <main className="main--area">
        
        {/* breadcrumb area start */}
        <BreadcrumbAreaThree title="PRODUCT SINGLE" subtitle="PRODUCT SINGLE" />
        {/* breadcrumb area end */}

        {/* shop details area start */}
        <ShopDetailsArea product={product} />
        {/* shop details area end */}

      </main>
      {/* main area end */}

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </Wrapper>
  );
}
