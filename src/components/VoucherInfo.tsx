import { useForm } from "react-hook-form"
import SaleForm from "./SaleForm"
import { Button } from "./ui/button"
import { useRecordStore } from "@/store/useRecordStore"
import VoucherTable from "./VoucherTable"

const VoucherInfo = () => {
    const { register, handleSubmit, formState : {errors},reset } = useForm()
    const { records, resetRecord } = useRecordStore()
    const onSubmit = async (data: any) => {

        const total  = records.reduce((pv,cv) => pv + cv.cost,0 );
        const tax = total * 0.07;
        const netTotal = tax + total;
        const currentVoucher = {...data,records,total,tax,netTotal}
        await fetch(`http://localhost:5000/vouchers`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(currentVoucher)
        })
        resetRecord()
        reset()
    }

    function generateInvoiceNumber(){
        //get the current date
        const date = new Date();
        //format the date as YYYYMMDD
        const formattedDate = date.toISOString().slice(0,10).replace(/-/g,"")
        
        //generate a random number between 1000 and 9999
        const randomNumber = Math.floor(1000+ Math.random() * 9000)

        // Combine the formattedNumber and randomNumber
        const invoiceNumber = `INV-${formattedDate}-${randomNumber}`

        return invoiceNumber
    }
    
    return (
            <div>
                <form onSubmit={handleSubmit(onSubmit)} id="voucherForm" >
                    <div className="grid grid-cols-4 gap-2">
                        <div>
                            <label htmlFor="">Voucher ID</label>
                            <input type="text" defaultValue={generateInvoiceNumber()} {...register("voucher_id", {
                                required: true
                            })} />
                            {errors.voucher_id?.type === "required" && (<p className="text-red-500 mt-1 text-sm">
              Voucher ID is required
            </p> )}
                        </div>
                        <div>
                            <label htmlFor="">Customer Name</label>
                            <input type="text"  {...register("customer_name", {
                                required: true
                            })} />
                            {errors.customer_name?.type === "required" && (<p className="text-red-500 mt-1 text-sm">
              Customer name is required
            </p> )}
                        </div>
                        <div>
                            <label htmlFor="">Customer Email</label>
                            <input type="email" {...register("customer_email", {
                                required: true
                            })} />
                            {errors.customer_email?.type === "required" && (<p className="text-red-500 mt-1 text-sm">
              Customer email is required
            </p> )}
                        </div>
                        <div>
                            <label htmlFor="">Sale Date</label>
                            <input type="date" defaultValue={new Date().toISOString().slice(0,10)} {...register("sale_date", {
                                required: true
                            })} />
                            {errors.sale_date?.type === "required" && (<p className="text-red-500 mt-1 text-sm">
              Sale Date is required
            </p> )}
                        </div>
                    </div>

                    
                </form>
                <SaleForm/>
                <VoucherTable/>
                <div>
                        <label htmlFor=""> Make sure all field are correct
                        </label>
                        <input type="checkbox"  form="voucherForm" {...register("all_correct")} required />
                        
                    </div>
                <Button type="submit" form="voucherForm" className="bg-blue-500">
                        Add Record
                </Button>
            </div>
        

    )
}

export default VoucherInfo