import { BreadcrumbComponent } from "@/components/BreadcrumbComponent"
import ProductList from "@/components/ProductList"

const ProductPage = () => {
  return (
    <main>
        <BreadcrumbComponent name={"Product Module"}/>
        <ProductList/>
    </main>
  )
}

export default ProductPage