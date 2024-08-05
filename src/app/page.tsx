import VitrineProducts from "./components/VitrineProducts/VitrineProducts";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <div className="mb-14">
            <VitrineProducts category="1"/>
          </div>
          <div className="mb-14">
            <VitrineProducts category="4"/>
          </div>
          
        </div>
      </main>
    </>
  );
}
