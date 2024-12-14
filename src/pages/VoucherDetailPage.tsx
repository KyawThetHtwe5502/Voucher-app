import { BreadcrumbComponent } from "@/components/BreadcrumbComponent"
import VoucherCard from "@/components/VoucherCard"

const VoucherDetailPage = () => {
  return (
    <div>
      <BreadcrumbComponent links={[{title:'Voucher Module',path:'/voucher'}]} name={"voucher detail"} />
      <VoucherCard/>
    </div>
  )
}

export default VoucherDetailPage