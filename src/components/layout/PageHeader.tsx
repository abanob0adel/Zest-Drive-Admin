import type { ReactNode } from "react";
import { Button } from "../ui/button";

interface PageHeaderType {
  PageTitle: string;
  ButtonTitle: string;
  url: string;
  icon?: ReactNode;
}
const PageHeader: React.FC<PageHeaderType> = ({
  PageTitle,
  ButtonTitle,
  url,
  icon,
}) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">{PageTitle}</h2>
        <Button asChild>
          <a href={url}>
            {ButtonTitle}
            {icon && icon}
          </a>
        </Button>
      </div>
    </>
  );
};
export default PageHeader;
