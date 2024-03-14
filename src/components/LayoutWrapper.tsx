import Footer from "components/Footer";
import Header from "components/Header";
import MainSection from "components/MainSection";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function LayoutWrapper({ children }: Props) {
  return (
    <>
      <Header />
      <MainSection>{children}</MainSection>
      <Footer />
    </>
  );
}
