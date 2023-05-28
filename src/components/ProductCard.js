const ProductCard = ({ product }) => {
  console.log("product", product);
  return (
    <div
      className="productCard"
      style={{ width: "300px", height: "600px", margin: "20px" }}
    >
      <img src={product.image} width="80%" height="400px" />
      <p>{product.title}</p>
      <p style={{ fontWeight: "bold" }}>{product.price}</p>
    </div>
  );
};

export default ProductCard;
