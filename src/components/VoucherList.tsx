import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import useSWR from "swr"
import VoucherListRow from "./VoucherListRow"
import { Record } from "@/store/useRecordStore";

export type VoucherType = {
    id: number;
      voucher_id: string;
      customer_name: string;
      customer_email: string;
      sale_date: string;
        all_correct: boolean,
      records: Record[];
      total : number;
      tax: number;
      netTotal: number;

}

const fetcher = (url:string): Promise<VoucherType[]> => fetch(url).then(res => res.json())

const VoucherList = () => {
    const {data} = useSWR(`http://localhost:5000/vouchers`,fetcher)
  return (
    <div>
        <Table>
             
             <TableHeader>
                 <TableRow>
                     <TableHead ># Voucher ID</TableHead>
                     <TableHead>Customer name</TableHead>
                     <TableHead>Email</TableHead>
                     <TableHead>Create At</TableHead>
                     <TableHead>Action</TableHead>
                 </TableRow>
             </TableHeader>
             <TableBody className="w-full">
                    {data?.map((voucher) => <VoucherListRow key={voucher.id} voucher={voucher} />)}
             </TableBody>
         </Table>
    </div>
  )
}

export default VoucherList