import Header from "./components/Header";
import ProductList from "./components/ProductList";

export default function Home() {
  return (
    <>
    <Header />
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <ProductList/>  
      </div>
    </main>
    </>
  );
}
