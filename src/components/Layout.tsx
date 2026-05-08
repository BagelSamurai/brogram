import Header from "./Header";
import Footer from "./Footer";

type ChildrenType = {
  children: React.ReactNode;
};

export default function Layout({ children }: ChildrenType) {
  return (
    <>
      <Header />
      {children}

      <Footer />
    </>
  );
}
