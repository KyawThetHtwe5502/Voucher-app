import {
    
    TableCell,
    
    TableRow,
} from "@/components/ui/table"
import {
    
    HiOutlineArrowLongRight,
    HiOutlineTrash,
    
} from "react-icons/hi2";
import { Link } from "react-router-dom"
import { useSWRConfig } from "swr";

type props = {
    voucher: {
        id: number;
        voucher_id: string;
        customer_name: string;
        customer_email: string;
        sale_date: string;
    }
}
const VoucherListRow = ({voucher:{id,voucher_id,customer_name,customer_email,sale_date}}:props) => {
    const {mutate} = useSWRConfig()
    const handleDeleteBtn = async () => {
        await fetch(`http://localhost:5000/vouchers/${id}`,{
            method: 'DELETE'
        })
        mutate('http://localhost:5000/vouchers')
    }
  return (
    <TableRow >
                        <TableCell >{voucher_id}</TableCell>
                        <TableCell>{customer_name}</TableCell>
                        <TableCell>{customer_email}</TableCell>
                        <TableCell>{sale_date}</TableCell>
                        <TableCell className="text-right">
                            <div className="inline-flex items-center justify-end">
                            
                            <button
                                type="button"
                                onClick={handleDeleteBtn}
                                className="size-10 flex justify-center items-center text-sm font-medium text-red-600 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                            >
                                
                                    <HiOutlineTrash />
                                
                            </button>
                            <Link
                                to={`/voucher/detail/${id}`}
                                className="size-10 flex justify-center items-center text-sm font-medium text-stone-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                            >
                                <HiOutlineArrowLongRight />
                            </Link>
                            </div>
                           
            </TableCell>
                    </TableRow>
  
  )
}

export default VoucherListRow