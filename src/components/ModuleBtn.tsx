import { ReactNode } from "react";
import { Link } from "react-router-dom"

type props = {
    url : string;
    icon : ReactNode;
    name: string
}
const ModuleBtn = ({url,icon,name}:props) => {
  return (
    <Link
    to={url}
    className="flex h-full flex-col gap-3 items-center bg-blue-600 text-white p-5 rounded-lg "
  >
    {icon}
    {name}
  </Link>
  )
}

export default ModuleBtn