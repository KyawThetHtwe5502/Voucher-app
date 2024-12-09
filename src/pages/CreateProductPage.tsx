import { BreadcrumbComponent } from "@/components/BreadcrumbComponent"
import ProductCreateCard from "@/components/ProductCreateCard"

const CreateProductPage = () => {
  return (
    <div>
        <BreadcrumbComponent links={[{ title: "Product Module", path: "/product" }]} name={"CreateProduct"} />
        <ProductCreateCard/>
    </div>
  )
}

export default CreateProductPage