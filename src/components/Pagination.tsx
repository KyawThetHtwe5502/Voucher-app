import {  HiArrowLeft, HiArrowRight } from "react-icons/hi2"
import { Button } from "./ui/button"
import { useSearchParams } from "react-router-dom"

const Pagination = ({links:{prev,next},meta:{from,to,total},updateFetchUrl}) => {

  const [params,setParams] = useSearchParams();
  const handleNextBtn = () => {
    updateFetchUrl(next)
  }

  const handlePrevBtn = () => {
    updateFetchUrl(prev)
  }
  return (
    <div className="flex justify-between items-center">
      <span>showing <b>{from}</b>to<b>{to}</b> of <b>{total}</b>Entries </span>
      <div>
        <Button onClick={handlePrevBtn} disabled={!prev}><HiArrowLeft/></Button>
        <Button onClick={handleNextBtn} disabled={!next}><HiArrowRight/></Button>
      </div>
    </div>
  )
}

export default Pagination