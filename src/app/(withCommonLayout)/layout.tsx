import Navbar from "@/components/Shared/Navbar/Navbar";

interface CommonLayoutProps {
    children: React.ReactNode;
  }

const CommonLayout = ({children} : CommonLayoutProps) => {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    );
};

export default CommonLayout;