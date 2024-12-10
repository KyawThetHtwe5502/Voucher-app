import {
    
    TableCell,
    
    TableRow,
} from "@/components/ui/table"
import {
    
    HiOutlinePencil,
    HiOutlineTrash,
    
} from "react-icons/hi2";
import { Link } from "react-router-dom"

import { useSWRConfig } from "swr";
import ShowDate from "./ShowDate";
// import useSWR from "swr";

interface props {
    product: {
        id: number;
    product_name : string;
    created_at: string;
    price: number;
    }
}
const ProductRow = ({product}:props) => {
    const { mutate } = useSWRConfig();

    const handleDeleteBtn = async () => {
        await fetch(`http://localhost:5000/products/${product.id}`, {
            method: "DELETE"
        })

        mutate("http://localhost:5000/products")
    }

  return (
    <TableRow >
                        <TableCell >{product.id}</TableCell>
                        <TableCell>{product.product_name}</TableCell>
                        <TableCell>{product.price}</TableCell>
                        <TableCell><ShowDate timeStamp={product.created_at} /> </TableCell>
                        <TableCell className="text-right">
                            <div className="inline-flex items-center justify-end">
                            <Link
                                to={`/product/edit/${product.id}`}
                                className="size-10 flex justify-center items-center text-sm font-medium text-stone-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                            >
                                <HiOutlinePencil />
                            </Link>
                            <button
                                type="button"
                                onClick={handleDeleteBtn}
                                className="size-10 flex justify-center items-center text-sm font-medium text-red-600 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                            >
                                
                                    <HiOutlineTrash />
                                
                            </button>
                            </div>
                           
            </TableCell>
                    </TableRow>
  )
}

export default ProductRow