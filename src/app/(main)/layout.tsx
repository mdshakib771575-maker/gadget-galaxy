
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";


export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />

      <main className="flex-1 bg-[#080c16] text-[#f3f4f6]">{children}</main>

      <Footer />
    </>
  );
}