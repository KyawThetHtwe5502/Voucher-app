import { useForm } from "react-hook-form"

const VoucherInfo = () => {
    const {register, handleSubmit} = useForm()
  return (
    <form >
        <div>

        <label htmlFor="">Voucher ID</label>
        <input type="text" {...register("voucher_id",{
            required: true
        })} />
        </div>
        <div>
            <label htmlFor="">Customer Name</label>
            <input type="text" {...register("customer_name",{
                    required: true
                })} />
        </div>
        <div>
            <label htmlFor="">Customer Email</label>
            <input type="email" {...register("customer_email",{
                required: true
            })} />
        </div>
        <div>
            <label htmlFor="">Sale Date</label>
            <input type="date" {...register("sale_date",{
                required: true
            })} />
        </div>
    </form>
  )
}

export default VoucherInfo