import { useForm } from "react-hook-form"
import { Product } from "./ProductList";
import useSWR from "swr";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRecordStore } from "@/store/useRecordStore";


const fetcher = (url: string): Promise<Product[]> => fetch(url).then((res) => res.json());

const SaleForm = () => {
    const { register, handleSubmit ,reset, formState: {errors} } = useForm()
    const { data } = useSWR<Product[]>('http://localhost:5000/products', fetcher);
    const {records, addRecord, changeQuantity} = useRecordStore()
    const onSubmit = (data:any) => {
        
        const currentProduct = JSON.parse(data.product)
        const currentId = currentProduct.id;
        console.log(currentId)
        const exited = records.find((record)=> record.product.id === currentId)
        console.log(exited)
        if(exited){
            changeQuantity(exited.id,parseInt(data.quantity))
        } else{
            addRecord({
                id: Date.now(),
                product: currentProduct,
                quantity : parseInt(data.quantity),
                cost: data.quantity * currentProduct.price
               })
        }
        
      reset()
    }
    console.log(records)
    return (
        <div className="p-5 rounded-lg border mb-5">
             <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-3 gap-3">
                <div className="col-span-1">
                    <label
                        htmlFor="productSelect"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Select Your Product
                    </label>
                    <select {...register("product")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required
                    >
                        <option >select your product</option>
                        {data && data.map((product) => <option key={product.id} value={JSON.stringify(product)} >
                            {product.product_name}
                        </option>)}
                    </select>
                </div>
                <div className="col-span-1">
                    <label
                        htmlFor="quantityInput"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Quantity
                    </label>
                    <Input type="number" {...register("quantity")} defaultValue={1} required className={`bg-gray-50 border ${
              errors.quantity
                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            />
                </div>
                <Button type="submit" className="col-span-1  bg-blue-500 w-full h-full">Add Product </Button>
            </form>
        </div>
    )
}

export default SaleForm