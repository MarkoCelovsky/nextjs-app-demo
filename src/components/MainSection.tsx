import { ReactElement, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MainSection = ({ children }: Props): ReactElement => {
  return <main className="container mx-auto mt-8">{children}</main>;
};

export default MainSection;
