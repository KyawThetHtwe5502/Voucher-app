import { useForm } from "react-hook-form"
import { Product } from "./ProductList";
import useSWR from "swr";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRecordStore } from "@/store/useRecordStore";


const fetcher = (url: string): Promise<Product[]> => fetch(url).then((res) => res.json());

const SaleForm = () => {
    const { register, handleSubmit } = useForm()
    const { data } = useSWR<Product[]>('http://localhost:5000/products', fetcher);
    const {records, addRecord} = useRecordStore()
    const onSubmit = (data:any)=> {
        const currentProduct = JSON.parse(data.product)
        const currentId = currentProduct.id;
        const ExitedProduct = records.find((record)=> record.id === currentId)
       addRecord({
        id: Date.now(),
        product: currentProduct,
        quantity : data.quanity,
        cost: data.quantity * currentProduct.price
       })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-3 items-end">
                <div>
                    <label
                        htmlFor="productSelect"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Select Your Product
                    </label>
                    <select {...register("product")} id="">
                        <option value="">select your product</option>
                        {data && data.map((product) => <option key={product.id} value={JSON.stringify(product)} >
                            {product.product_name}
                        </option>)}
                    </select>
                </div>
                <div>
                    <label
                        htmlFor="quantityInput"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Quantity
                    </label>
                    <Input type="number" {...register("quantity")} required />
                </div>
                <Button type="submit">Add Product </Button>
            </form>
        </div>
    )
}

export default SaleForm