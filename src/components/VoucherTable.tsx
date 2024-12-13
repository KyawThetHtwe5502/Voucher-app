import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useRecordStore } from "@/store/useRecordStore"
import VoucherRow from "./VoucherRow"

const VoucherTable = () => {
    const {records} = useRecordStore()
        const total  = records.reduce((pv,cv) => pv + cv.cost,0 );
        const tax = (total * 0.07).toFixed(2);
        const netTotal = parseFloat(tax) + total;
  return (
    <div className="border rounded-lg p-5 mb-5">
        <Table>
             
                <TableHeader>
                    <TableRow>
                        <TableHead >#</TableHead>
                        <TableHead>Product Name</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>quantity</TableHead>
                        <TableHead>Cost</TableHead>
                        <TableHead className="text-right">{" "}</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="w-full">
                {records.length === 0 && <TableRow>
                    <TableCell className="  bg-gray-300 text-center " colSpan={6}>There are no records.</TableCell>
                </TableRow>}
                {records?.map((record) => <VoucherRow key={record.id} record={record} />)}                    

                </TableBody>
               {records.length !== 0 && <TableFooter className="w-full">
                    <TableRow className="w-full " >
                        <TableCell className="text-right " colSpan={5}>Total</TableCell>
                        <TableCell className="text-right">${total}</TableCell>
                    </TableRow>
                    <TableRow className="w-full">
                        <TableCell className="text-right " colSpan={5}>Tax</TableCell>
                        <TableCell className="text-right">${tax}</TableCell>
                    </TableRow>
                    <TableRow className="w-full">
                        <TableCell className="text-right " colSpan={5}>netTotal</TableCell>
                        <TableCell className="text-right">${netTotal}</TableCell>
                    </TableRow>
                </TableFooter>}
            </Table>
    </div>
  )
}

export default VoucherTable