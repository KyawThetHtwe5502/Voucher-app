import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    HiPlus
} from "react-icons/hi2";
import {
    HiSearch 
} from "react-icons/hi";
import { Button } from "@/components/ui/button"

import useSWR from "swr";

import ProductRow from "./ProductRow";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import useCookie from "react-use-cookie";
import Pagination from "./Pagination";
import { useState } from "react";
import { Input } from "./ui/input";

export type Product = {
    id: number;
    product_name : string;
    created_at: string;
    price: number;
}

const ProductList = () => {
    const [params,setParams] = useSearchParams();
    console.log(params.get('a'));
    const [token] = useCookie('my_token')
    const [fetchUrl,setFetchUrl] = useState('https://voucher-app-api.ygnsh.com/api/v1/products')
const fetcher = (url: string) => fetch(url,{
    headers: {
        Authorization : `Bearer ${token}`
    }
}).then((res) => res.json());
    const { data,  isLoading } = useSWR<Product[]>(fetchUrl, fetcher);
    console.log(data);
    const updateFetchUrl = (url:string) => {
        const currentUrl = new URL(url);
        console.log(currentUrl);
        setFetchUrl(url)
    }
    const handleSearchInput = (e:any) => {
        setFetchUrl(`https://voucher-app-api.ygnsh.com/api/v1/products?q=${e.target.value}`)
    }

    
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <div className="relative">
                <Input type="text" onChange={handleSearchInput} />
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <HiSearch className="w-4 h-4 text-stone-500 dark:text-stone-400" />
                </div>
                </div>
                <Link to="/dashboard/product/create">
                <Button className="bg-blue-600 ">Add new Product  <HiPlus />
                </Button>
                </Link>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead >#</TableHead>
                        <TableHead>Product Name</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Create At</TableHead>
                        <TableHead className="text-right">action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>

                    {isLoading ?  <div>loading</div> : data?.length === 0 ? (<div>dfdf</div>) : (
                        data?.data?.map((product) => <ProductRow key={product.id} product={product} /> )
                    )}

                </TableBody>
            </Table>
            {!isLoading && <Pagination links={data?.links} meta={data?.meta} updateFetchUrl={updateFetchUrl} />  }
        </div>
    )
}

export default ProductList