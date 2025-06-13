import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="flex-grow w-full mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-4 md:space-y-8">
          <div className="w-full">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
