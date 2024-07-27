import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";

interface CommonLayoutProps {
    children: React.ReactNode;
  }

const CommonLayout = ({children} : CommonLayoutProps) => {
    return (
        <div>
            <Navbar/>
            <div className="min-h-screen">
            {children}
            </div>
            <Footer/>
        </div>
    );
};

export default CommonLayout;