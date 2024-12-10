import {  useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const ProductCreateCard = () => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const nav = useNavigate();
    const handleCreateProduct = async (data:any) => {
        await fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                product_name: data.product_name,
                price: data.price,
                created_at: new Date().toISOString()
            })
        })
        if(data.back_to_product_list){
            nav("/product")
        }
        reset()
    }
  return (
    <div className=" rounded-lg w-full md:w-1/2">
        <h1 className=" text-3xl font-bold mb-3">Create New Product</h1>
      <p className=" mb-10 text-stone-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At alias
        necessitatibus quos earum itaque.
      </p>
      <form onSubmit={handleSubmit(handleCreateProduct)}>
        <div className="mb-4">
            <label htmlFor="product_name"  className={`block mb-2 text-sm font-medium ${
              errors.product_name ? "text-red-500" : "text-gray-900"
            } dark:text-white`}>New Product Name</label>
            <input  {...register("product_name",{
              required: true,
              minLength: 3,
              maxLength: 30
            })} id="product_name" type="text" className={`bg-gray-50 border ${
              errors.product_name
                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            placeholder="eg. apple"

 />
            {errors.product_name?.type === "required" && (<p className="text-red-500 mt-1 text-sm">
              Product name is required
            </p> )}
            {errors.product_name?.type === "minLength" && (<p className="text-red-500 mt-1 text-sm">
              Product name must be greater than 3 characters
            </p>)}
            {errors.product_name?.type === "maxLength" && (<p className="text-red-500 mt-1 text-sm">
              Product name must be less then 30 characters
            </p>) }
        </div>
        <div className="mb-4">
            <label htmlFor="price"  className={`block mb-2 text-sm font-medium ${
              errors.price ? "text-red-500" : "text-gray-900"
            } dark:text-white`}
>Product Price</label>
            <input {...register("price",{
              required: true,
              min: 10,
              max: 1000
            })} id="price" type="number"   className={`bg-gray-50 border ${
              errors.price
                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
 />
            {errors.price?.type === "required" && (<p className="text-red-500 mt-1 text-sm">
              Price is required
            </p> )}
            {errors.price?.type === "min" && (<p className="text-red-500 mt-1 text-sm">
              Price must be greater than 10
            </p>)}
            {errors.price?.type === "max" && (<p className="text-red-500 mt-1 text-sm">
              Price must be less then 1000
            </p>) }
        </div>
        <div className="mb-4">
            <input {...register("all_correct")} required id="all_correct" type="checkbox" />
            <label htmlFor="all_correct">Make sure all field are correct</label>
        </div>
        <div className="mb-4">
            <input {...register("back_to_product_list")} required id="back_to_product_list" type="checkbox" />
            <label htmlFor="back_to_product_list">Back to Product List</label>
        </div>
        <Link
          to="/product"
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Cancel
        </Link>
        <Button className="bg-blue-500">
            save new product
        </Button>
      </form>
    </div>
  )
}

export default ProductCreateCard