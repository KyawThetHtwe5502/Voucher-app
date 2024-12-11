import { useForm } from "react-hook-form"
import SaleForm from "./SaleForm"
import { Button } from "./ui/button"
import { useRecordStore } from "@/store/useRecordStore"

const VoucherInfo = () => {
    const { register, handleSubmit } = useForm()
    const {records} = useRecordStore()
    const onSubmit = async (data:any) => {
        await fetch(`http://localhost:5000/vouchers`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...data,records
            })
        })
    }
    return (
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
            <SaleForm/>
            <div>
                    <label htmlFor=""> Make sure all field are correct
                    </label>
                    <input type="checkbox" {...register("all_correct")} />
            </div>
            <Button type="submit" className="bg-blue-500">
                    Add Record
            </Button>
        </form>
    )
}

export default VoucherInfo