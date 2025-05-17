import Banner from "@/components/Banner";
import Bookings from "@/components/Bookings";
import Carousel from "@/components/Carousel";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Steps from "@/components/Steps";
import Tailored from "@/components/Tailored";
import Work from "@/components/Work";


export default function Home() {
  return (
    <main>
      <Banner />
      <Work />
      <Tailored />
      <Steps />
      <Bookings />
      <Carousel/>
      <Cta/>
      <Footer/>
    </main>
  );
}
