import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import DashboardPage from "./pages/DashboardPage";
import Salepage from "./pages/SalePage";
import VoucherPage from "./pages/VoucherPage";
import ProductPage from "./pages/ProductPage";

const router = createBrowserRouter([
    {path: "/",
    element: <Layout/>,
    errorElement: <NotFoundPage/>,
    children: [
        {
            index: true,
            element: <DashboardPage/>
        },
        
        {
            path: '/product',
            element: <ProductPage/>
        },
        {
            path: "/sale",
            element: <Salepage/>
        },{
            path: '/voucher',
            element: <VoucherPage/>
        }
    ]
    }
])

export default router