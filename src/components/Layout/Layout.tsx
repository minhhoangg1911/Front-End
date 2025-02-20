import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";
type Props = {
    children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <div className='bg-[#fffdf5]'>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
