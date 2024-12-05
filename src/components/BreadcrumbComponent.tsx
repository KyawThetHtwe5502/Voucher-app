import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { HiMiniHome } from "react-icons/hi2";
import { Link } from "react-router-dom";
type props = {
  name: string;
  links: string[];
};
export function BreadcrumbComponent({ name, links }: props) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink className="hover:text-blue-600 inline-flex items-center gap-2">
            <HiMiniHome />
            <Link to="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {links &&
          links.map((link, index) => (
            <BreadcrumbItem key={index}>
              <BreadcrumbPage>{link}</BreadcrumbPage>
            </BreadcrumbItem>
            
          ))}
        gi
        {links &&        <BreadcrumbSeparator />
 }
        <BreadcrumbItem>
          <BreadcrumbPage>{name}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
