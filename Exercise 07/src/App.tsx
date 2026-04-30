import Welcome from "./Welcome";
import ProductCard from "./ProductCard";

const App = () => {
  return (
    <div>
      <Welcome username="Mohamed" isPremium={true} />

      <ProductCard
        name="iPhone 15"
        price={999}
        description="Latest Apple phone"
      />

      <ProductCard
        name="Mouse"
        price={25}
      />

        {/* ❌ This is WRONG on purpose
        <ProductCard
        name="Broken Product"
        price="free" // ❌ ERROR: should be number, not string
      /> */}
    </div>
  );
};

export default App;