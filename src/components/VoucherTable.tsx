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
import { useRecordStore } from "@/store/useRecordStore"
import VoucherRow from "./VoucherRow"

const VoucherTable = () => {
    const {records} = useRecordStore()
  return (
    <div>
        <Table className="w-[1000px]">
                <TableCaption>A list of your recent invoices.</TableCaption>
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
                <TableBody>

                {records?.map((record) => <VoucherRow key={record.id} record={record} />)}                    

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

export default VoucherTable