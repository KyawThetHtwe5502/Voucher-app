import { BreadcrumbComponent } from "@/components/BreadcrumbComponent"
import ProductEditCard from "@/components/ProductEditCard"

const ProductEditPage = () => {
  return (
    <div>
        <BreadcrumbComponent links={[{ title: "Product Module", path: "/product" }]} name={"EditProduct"} />
        <ProductEditCard/>
    </div>
  )
}

export default ProductEditPage