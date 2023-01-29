import Header from "../header/header";
import Footer from "./footer";
import { useEffect, useState } from "react";
import countapi from "countapi-js";

export interface IDefaultProps {
  children: React.ReactNode;
  header?: boolean;
  footer?: boolean;
}

const DefaultLayout = ({
  children,
  footer = true,
  header = true,
}: IDefaultProps) => {
  const [visit, setVisit] = useState(0);
  useEffect(() => {
    countapi.update("cubicanime", 1).then((result: any) => {
      setVisit(result.value);
    });
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-black w-full mx-auto max-w-screen-2xl">
      {header && <Header visit={visit} />}
      {children}
      {footer && <Footer />}
    </div>
  );
};

export default DefaultLayout;
