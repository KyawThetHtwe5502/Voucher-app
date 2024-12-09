import {  useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";

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
        <div>
            <label htmlFor="product_name">New Product Name</label>
            <input  {...register("product_name",{
              required: true,
              minLength: 3,
              maxLength: 30
            })} id="product_name" type="text" />
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
        <div>
            <label htmlFor="price">Product Price</label>
            <input {...register("price",{
              required: true,
              min: 10,
              max: 1000
            })} id="price" type="number" />
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
        <div>
            <input {...register("all_corret")} required id="all_corret" type="checkbox" />
            <label htmlFor="all_corret">Make sure all field are correct</label>
        </div>
        <div>
            <input {...register("back_to_product_list")} required id="back_to_product_list" type="checkbox" />
            <label htmlFor="back_to_product_list">Back to Product List</label>
        </div>
        <Link
          to="/product"
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Cancel
        </Link>
        <button>
            save new product
        </button>
      </form>
    </div>
  )
}

export default ProductCreateCard