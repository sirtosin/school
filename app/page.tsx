import { AdvertIcon1, AdvertIcon2 } from "./asset/icons/advert";
import { Advert } from "./components/Advert";
import Advert2 from "./components/Advert2";
import Banner from "./components/Banner";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Services />
      <Advert
        style={true}
        icon={<AdvertIcon1 />}
        title="Guident! Where parenting meets peace of mind."
      />
      <Advert
        style={false}
        icon={<AdvertIcon2 />}
        title="Grow your School with Guident!"
      />
      <Advert2 />
      {/* <Faq /> */}
      <Footer />
    </>
  );
}
