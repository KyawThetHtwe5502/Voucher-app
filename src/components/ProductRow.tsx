import {
    
    TableCell,
    
    TableRow,
} from "@/components/ui/table"
import {
    
    HiOutlinePencil,
    HiOutlineTrash,
    
} from "react-icons/hi2";
import { Link } from "react-router-dom"
const ProductRow = () => {
  return (
    <TableRow >
                        <TableCell >1</TableCell>
                        <TableCell>M2 macbook</TableCell>
                        <TableCell>4000</TableCell>
                        <TableCell>23bfffsf</TableCell>
                        <TableCell className="text-right">
                            <div className="inline-flex items-center justify-end">
                            <Link
                                to={`/product`}
                                className="size-10 flex justify-center items-center text-sm font-medium text-stone-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                            >
                                <HiOutlinePencil />
                            </Link>
                            <button
                                type="button"
                                
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