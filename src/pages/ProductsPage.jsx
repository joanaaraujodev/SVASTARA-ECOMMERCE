import ProductsList from "../components/ProductsList";
import SideBar from "../components/SideBar";


function ProductsPage() {
  
  return (
    <>
      <section className="hero__section">
        <h1 className="hero__section__title">
          <strong style={{ fontWeight: "400" }}>Everything You Need</strong>{" "}
          <br /> In The Perfect <br />
          Now
        </h1>
        <span className="hero__section__more">Discover more</span>
      </section>

      <main className="master">
        <ProductsList />
        <SideBar/>
      </main>
    </>
  );
}

export default ProductsPage;
