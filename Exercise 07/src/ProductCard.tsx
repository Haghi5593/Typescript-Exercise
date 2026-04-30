// Use type instead of interface

type ProductCardProps = {
  name: string;
  price: number;
  description?: string;
};

const ProductCard = ({ name, price, description }: ProductCardProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: ${price}</p>

      {description && <p>{description}</p>}
    </div>
  );
};

export default ProductCard;


// interface ProductCardProps {
//   name: string;
//   price: number;
//   description?: string;
// };

// const ProductCard = ({ name, price, description }: ProductCardProps) => {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <p>Price: ${price}</p>

//       {description && <p>{description}</p>}
//     </div>
//   );
// };

// export default ProductCard;