import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DoctorsHead from "../Doctors/components/DoctorsHead";
import DoctorsImg1 from "../Doctors/components/DoctorsImg1";
import "../Doctors/doctors.css";
import DoctorsImg2 from "./components/DoctorsImg2";
import DoctorsSolutionTop from "./components/DoctorsSolutionTop";
import DoctorsSolutionBottom from "./components/DoctorsSolutionBottom";
import DoctorsUnderBtn from "./components/DoctorsUnderBtn";

function Doctors() {
  return (
    <>
      <Header />
      <main>
        <DoctorsHead />
        <DoctorsImg1 />
        <DoctorsImg2 />
        <DoctorsSolutionTop />
        <DoctorsSolutionBottom />
        <DoctorsUnderBtn />
      </main>
      <Footer />
    </>
  );
}

export default Doctors;
