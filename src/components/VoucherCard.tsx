import html2pdf from "html2pdf.js";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
  TableCell
} from "@/components/ui/table";
import { useParams } from "react-router-dom";
import { VoucherType } from "./VoucherList";
import printJS from "print-js";

import useSWR from "swr";
import { Button } from "./ui/button";

const fetcher = (url: string): Promise<VoucherType> =>
  fetch(url).then((res) => res.json());
const VoucherCard = () => {
  const { id } = useParams();
  const { data } = useSWR(`http://localhost:5000/vouchers/${id}`, fetcher);
  const handlePrint= () => {
    printJS({
      printable: "printArea",
      type: "html",
      //   header: "INVOICE",
      scanStyles: true,
      css: [
        "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css",
      ],
    })
  }

  const handlePdf = () => {
        const element = document.getElementById("printArea");

    // Options for PDF generation
    const opt = {
      margin: 0.1,
      filename: "invoice.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 1 },
      jsPDF: { unit: 'in', format: 'a5', orientation: 'portrait' },
    };

    // Convert the element to PDF
    html2pdf().from(element).set(opt).save();

  }
  return (
    <div className="flex gap-5">
      <div id="printArea" className="w-[14.8cm] bg-white" >
        <div >
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">INVOICE</h1>
            <p className="text-xl">{data?.voucher_id}</p>
          </div>
          <div className="text-right">
            <p className="font-bold">Invoice to</p>
            <p>{data?.customer_name}</p>
            <p>Date: {data?.sale_date}</p>
          </div>
        </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Qty</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-right">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.records.map((record,index) => (
            <TableRow>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{record.product.product_name}</TableCell>
              <TableCell>{record.product.price}</TableCell>
              <TableCell>{record.quantity}</TableCell>
              <TableCell>{record.cost}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
        <TableFooter className="w-full">
                    <TableRow className="w-full " >
                        <TableCell className="text-right " colSpan={4}>Total</TableCell>
                        <TableCell className="text-right">${data?.total}</TableCell>
                    </TableRow>
                    <TableRow className="w-full">
                        <TableCell className="text-right " colSpan={4}>Tax</TableCell>
                        <TableCell className="text-right">${data?.tax.toFixed(2)}</TableCell>
                    </TableRow>
                    <TableRow className="w-full">
                        <TableCell className="text-right " colSpan={4}>netTotal</TableCell>
                        <TableCell className="text-right">${data?.netTotal}</TableCell>
                    </TableRow>
                </TableFooter>
      </Table>
      <div>
      <div className=" text-xs mb-8">
          <div className=" ">
            <h2 className="font-bold mb-2">Payment Transfer to</h2>
            <p>Kpay,Wave - 09250152018</p>
            <p>KBZ Bank - 02730102705025601</p>
            <p>AYA Bank - 20003674121</p>
          </div>
          <div className="  ">
            <h2 className="font-bold text-xl">MMS IT</h2>
            <p>48, 1st Floor, Shan Kone St.</p>
            <p>+959-250-152-018</p>
            <p>enquiry@mms-it.com</p>
          </div>
        </div>

        <div className="border-t-2 border-gray-300 pt-4">
          <p className="mt-4 text-center text-sm">Thanks to You</p>
        </div>
      </div>
    </div>
      </div>
    <div className="flex flex-col gap-5">
      <Button onClick={handlePrint} className="bg-blue-500">Print Voucher</Button>
      <Button onClick={handlePdf} className="bg-blue-500">Download PDF</Button>
    </div>
    </div>
  );
};

export default VoucherCard;
