import {
    
    TableCell,
    
    TableRow,
} from "@/components/ui/table"
import { Product } from "./ProductList";


type Props = {
    record: {
        id: number;
        product: Product;
        quantity: number;
        cost: number;
      }
}

const VoucherRow = ({record}: Props) => {
  return (
    <TableRow >
                        <TableCell >{record.id}</TableCell>
                        <TableCell>{record.product.product_name}</TableCell>
                        <TableCell>{record.product.price}</TableCell>
                        <TableCell>{record.quantity}</TableCell>
                        <TableCell>{record.cost}</TableCell>
                        <TableCell className="text-right">
                            
                           
            </TableCell>
                    </TableRow>
  )
}

export default VoucherRow;