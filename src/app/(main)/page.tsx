import Categories from "../components/home/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Hero from "../components/home/Hero";
import Newsletter from "../components/home/Newsletter";
import Statistics from "../components/home/Statistics";
import Testimonials from "../components/home/Testimonials";
import TopBrands from "../components/home/TopBrands";
import WhyChooseUs from "../components/home/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <FeaturedProducts />
      <Categories></Categories>
      <TopBrands></TopBrands>
      <WhyChooseUs />
      <Statistics />
      <Testimonials />
       <Newsletter />
    </main>
  );
}
