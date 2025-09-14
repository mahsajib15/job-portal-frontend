import { useEffect } from "react";
import HeroSection from "./HeroSection";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PopularServices from "./ui/PopularServices";
import Jobs from "./Jobs";
import ServiceSection from "./ui/ServiceSection";
import Services from "./ui/Services";

function Home() {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user && user.role === "recruiter") {
      navigate("/admin/companies");
    }
  }, []);

  return (
    <>
      <HeroSection />
      <Services />
      <Jobs />
      <PopularServices />
      <ServiceSection />
    </>
  );
}

export default Home;
