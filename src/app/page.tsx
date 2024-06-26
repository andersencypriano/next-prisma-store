import Header from "./components/Header";
import ProductList from "./components/ProductList";
import VitrineProducts from "./components/VitrineProducts/VitrineProducts";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <div className="mb-14">
            <ProductList />
          </div>
          <div className="mb-14">
            <VitrineProducts
              title="Camisetas Masculinas"
              categoryName="mens-shirts"
              limit={4}
            />
          </div>
          <div className="mb-14">
            <VitrineProducts title="Beleza" categoryName="beauty" limit={4} />
          </div>
          <div className="mb-14">
            <VitrineProducts
              title="Sapatos Femininos"
              categoryName="womens-shoes"
              limit={4}
            />
          </div>
        </div>
      </main>
    </>
  );
}
