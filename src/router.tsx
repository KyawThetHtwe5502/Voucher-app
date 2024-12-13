import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import DashboardPage from "./pages/DashboardPage";
import SalePage from "./pages/SalePage";
import VoucherPage from "./pages/VoucherPage";
import ProductPage from "./pages/ProductPage";
import CreateProductPage from "./pages/CreateProductPage";
import ProductEditPage from "./pages/ProductEditPage";
import VoucherDetailPage from "./pages/VoucherDetailPage";

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
            path: '/product/create',
            element: <CreateProductPage/>
        },
        {
            path: '/product/edit/:id',
            element: <ProductEditPage/>
        },
        {
            path: "/sale",
            element: <SalePage/>
        },{
            path: '/voucher',
            element: <VoucherPage/>
        },
        {
            path: '/voucher/detail/:id',
            element: <VoucherDetailPage/>
        }
    ]
    }
])

export default router