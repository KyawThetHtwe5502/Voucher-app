import Container from "@/components/Container"
import ModuleBtn from "@/components/ModuleBtn"
import {
    HiCircleStack,
    HiComputerDesktop,
    HiDocumentDuplicate,
    HiUser,
} from 'react-icons/hi2';
const DashboardPage = () => {
    
    return (
        <main>
            <Container >
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="col-span-1">
                        <ModuleBtn url={"/dashboard/product"} name="Product Module" icon={<HiCircleStack className="size-14" />} />
                    </div>
                    <div className="col-span-1">
                        <ModuleBtn url={"/dashboard/sale"} name="Sale Module" icon={<HiComputerDesktop className="size-14" />} />
                    </div>
                    <div className="col-span-1">
                        <ModuleBtn url={"/dashboard/voucher"} name="Voucher Module" icon={<HiDocumentDuplicate className="size-14" />} />
                    </div>
                    <div className="col-span-1">
                        <ModuleBtn url={"/dashboard/user_profile"} name="UserProfile Module" icon={<HiUser className="size-14" />} />
                    </div>
                </div>
            </Container>
        </main>
    )
}

export default DashboardPage