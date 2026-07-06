import { ScrollToTop } from "../ui/ScrollToTop";
import WhatsAppButton from "../ui/WhatsAppButton";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ScrollToTop />
      <WhatsAppButton />
      <Footer />
    </>
  );
};
