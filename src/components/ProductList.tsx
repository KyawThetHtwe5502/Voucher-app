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

import { Button } from "@/components/ui/button"

import useSWR from "swr";

import ProductRow from "./ProductRow";
import { Link } from "react-router-dom";

export type Product = {
    id: number;
    product_name : string;
    created_at: string;
    price: number;
}
const fetcher = (url: string):Promise<Product[]> => fetch(url).then((res) => res.json());

const ProductList = () => {
    const { data,  isLoading } = useSWR<Product[]>('http://localhost:5000/products', fetcher);
    console.log();
    return (
        <div>
            <div>
                <Link to="/product/create">
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
                        data?.map((product) => <ProductRow key={product.id} product={product} /> )
                    )}

                </TableBody>
            </Table>
        </div>
    )
}

export default ProductList