import AboutSection from "@/components/About";
import ListingsTitle from "@/components/Listingstitle";

export const metadata = {
  title: "About - Maganlal Chikki",
  default: ""
};

const About = () =>{
  return(
    <>
      <ListingsTitle title="About us" />
      <AboutSection/>
      
    </>
  )
}

export default About;