import ProductList from "./components/ProductList";
import VitrineProducts from "./components/VitrineProducts/VitrineProducts";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <div className="mb-14">
            <VitrineProducts title="Nossas Camisetas" category="1"/>
          </div>
          
        </div>
      </main>
    </>
  );
}
