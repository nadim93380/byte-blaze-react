
import Footer from '../components/Footer';
import Nav from '../navbar/Nav';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='flex flex-col'>
            <Nav></Nav>
            <div className='min-h-[calc(100vh-112px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;