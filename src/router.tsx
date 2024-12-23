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
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserProfilePage from "./pages/UserProfilePage";
import UserProfileChangeImagePage from "./pages/UserProfileChangeImagePage";
import UserProfileChangeNamePage from "./pages/UserProfileChangeNamePage";
import UserProfileChangeEmailPage from "./pages/UserProfileChangeEmailPage";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <NotFoundPage />,
        children: [
            {
                index: true,
                element: <LoginPage />
            },
            {
                path: '/register',
                element: <RegisterPage />
            },
            {
                path: '/dashboard',
                element: <Layout />,
                children: [
                    {
                        index: true,
                        element: <DashboardPage />
                    },
                    {
                        path: 'product',
                        element: <ProductPage />
                    },
                    {
                        path: 'product/create',
                        element: <CreateProductPage />
                    },
                    {
                        path: 'product/edit/:id',
                        element: <ProductEditPage />
                    },
                    {
                        path: "sale",
                        element: <SalePage />
                    }, {
                        path: 'voucher',
                        element: <VoucherPage />
                    },
                    {
                        path: 'voucher/detail/:id',
                        element: <VoucherDetailPage />
                    },
                    {
                        path: 'user_profile',
                        children: [
                            {
                                index: true,
                                element: <UserProfilePage />

                            },
                            {
                                path: 'user-change-name',
                                element: <UserProfileChangeNamePage />
                            },
                            {
                                path: 'user-change-image',
                                element: <UserProfileChangeImagePage />
                            }, {
                                path: 'user-change-email',
                                element: <UserProfileChangeEmailPage />
                            }
                        ]
                    }
                ]
            }

        ]
    }
])

export default router