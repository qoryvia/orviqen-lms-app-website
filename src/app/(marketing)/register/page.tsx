import Footer from "@/components/navigations/Footer";
import Navbar from "@/components/navigations/Navbar";
import RegisterPage from "@/components/register/RegisterPage";

export default function RegisterRoute() {
  return (
    <div>
        <Navbar/>
        <RegisterPage />
        <Footer/>
    </div>
  );
}