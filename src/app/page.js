import Cards from "@/components/Cards";
import Hero from "@/components/Hero";

import Story from "@/components/Story";
import Team from "@/components/Team";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return( <>
    <Hero/>
    <Cards/>
    <Story />
    <Team/>
  </>);
}
