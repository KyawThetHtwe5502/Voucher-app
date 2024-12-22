import { useForm } from "react-hook-form"
import SaleForm from "./SaleForm"
import { Button } from "./ui/button"
import { useRecordStore } from "@/store/useRecordStore"
import VoucherTable from "./VoucherTable"
import { useNavigate } from "react-router-dom"

const VoucherInfo = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const { records, resetRecord } = useRecordStore()
    const nav = useNavigate();
    const onSubmit = async (data: any) => {

        const total = records.reduce((pv, cv) => pv + cv.cost, 0);
        const tax = total * 0.07;
        const netTotal = tax + total;
        const currentVoucher = { ...data, records, total, tax, netTotal }
        await fetch(`http://localhost:5000/vouchers`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(currentVoucher)
        })
        resetRecord()
        reset()
        if(data.redirect_to_detail){
            nav("/voucher")
        }
    }

    function generateInvoiceNumber() {
        //get the current date
        const date = new Date();
        //format the date as YYYYMMDD
        const formattedDate = date.toISOString().slice(0, 10).replace(/-/g, "")

        //generate a random number between 1000 and 9999
        const randomNumber = Math.floor(1000 + Math.random() * 9000)

        // Combine the formattedNumber and randomNumber
        const invoiceNumber = `INV-${formattedDate}-${randomNumber}`

        return invoiceNumber
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} id="voucherForm" className="p-5 border rounded-lg mb-5" >
                <div className="grid grid-cols-4 gap-2">
                    <div>
                        <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Voucher ID</label>
                        <input type="text" defaultValue={generateInvoiceNumber()} {...register("voucher_id", {
                            required: true
                        })} className={`bg-gray-50 border ${errors.voucher_id
                                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                        />
                        {errors.voucher_id?.type === "required" && (<p className="text-red-500 mt-1 text-sm">
                            Voucher ID is required
                        </p>)}
                    </div>
                    <div>
                        <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Customer Name</label>
                        <input type="text"  {...register("customer_name", {
                            required: true
                        })} className={`bg-gray-50 border ${errors.customer_name
                                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                            placeholder="customer" />
                        {errors.customer_name?.type === "required" && (<p className="text-red-500 mt-1 text-sm">
                            Customer name is required
                        </p>)}
                    </div>
                    <div>
                        <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Customer Email</label>
                        <input type="email" {...register("customer_email", {
                            required: true
                        })} className={`bg-gray-50 border ${errors.product_name
                                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                            placeholder="example@gmail.com" />
                        {errors.customer_email?.type === "required" && (<p className="text-red-500 mt-1 text-sm">
                            Customer email is required
                        </p>)}
                    </div>
                    <div>
                        <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sale Date</label>
                        <input type="date" defaultValue={new Date().toISOString().slice(0, 10)} {...register("sale_date", {
                            required: true
                        })} className={`bg-gray-50 border ${errors.sale_date
                                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                        />
                        {errors.sale_date?.type === "required" && (<p className="text-red-500 mt-1 text-sm">
                            Sale Date is required
                        </p>)}
                    </div>
                </div>


            </form>
            <SaleForm />
            <VoucherTable />
            <div className="flex flex-col items-end">
            <div className="flex items-center gap-2">
              
              <input
                {...register("redirect_to_detail")}
                required
                form="infoForm"
                id="redirect_to_detail"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="redirect_to_detail"
                className="me-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Redirect to Voucher Detail
              </label>
            </div>
                <div className="mb-2">
                    <input type="checkbox" form="voucherForm" {...register("all_correct")} required className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="" className="me-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Make sure all field are correct
                    </label>

                </div>
                <Button type="submit" form="voucherForm" className="bg-blue-500 p-5 h-full">
                    Add Record
                </Button>
            </div>

        </div>


    )
}

export default VoucherInfo