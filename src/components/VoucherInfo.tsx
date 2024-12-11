import { useForm } from "react-hook-form"
import SaleForm from "./SaleForm"
import { Button } from "./ui/button"
import { useRecordStore } from "@/store/useRecordStore"

const VoucherInfo = () => {
    const { register, handleSubmit } = useForm()
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
    }
    return (
        <div>
            <div>
                <SaleForm />
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="grid grid-cols-4 gap-2">
                        <div>
                            <label htmlFor="">Voucher ID</label>
                            <input type="text" {...register("voucher_id", {
                                required: true
                            })} />
                        </div>
                        <div>
                            <label htmlFor="">Customer Name</label>
                            <input type="text" {...register("customer_name", {
                                required: true
                            })} />
                        </div>
                        <div>
                            <label htmlFor="">Customer Email</label>
                            <input type="email" {...register("customer_email", {
                                required: true
                            })} />
                        </div>
                        <div>
                            <label htmlFor="">Sale Date</label>
                            <input type="date" {...register("sale_date", {
                                required: true
                            })} />
                        </div>
                    </div>

                    <div>
                        <label htmlFor=""> Make sure all field are correct
                        </label>
                        <input type="checkbox" {...register("all_correct")} />
                    </div>
                    <Button type="submit" className="bg-blue-500">
                        Add Record
                    </Button>
                </form>
            </div>
        </div>

    )
}

export default VoucherInfo