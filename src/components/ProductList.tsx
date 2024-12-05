import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import {
    HiMiniTrash,
    HiOutlinePencil,
    HiOutlineTrash,
    HiPlus,
    HiTrash,
} from "react-icons/hi2";

import useSWR from "swr";
import { Divide } from "lucide-react";
import ProductRow from "./ProductRow";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ProductList = () => {
    const { data, isLoading } = useSWR(import.meta.env.VITE_API_URL + '/products', fetcher);

    return (
        <div>
            <div>
                <Button variant="secondary">Secondary</Button>
            </div>
            <Table className="w-[1000px]">
                <TableCaption>A list of your recent invoices.</TableCaption>
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

                    {isLoading ?  <div>loading</div> : data.length === 0 ? (<div>dfdf</div>) : (
                        data.map((product) => <ProductRow product={product} /> )
                    )}

                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>
                        <TableCell className="text-right">$2,500.00</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    )
}

export default ProductList