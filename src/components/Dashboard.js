import { useState } from "react";
import ProductCard from "./ProductCard";

const Dashboard = ({ data }) => {
  console.log("data", data);

  const [pageIndex, setPageIndex] = useState(1);

  const arr = data.slice(1, data.length / 4).map((prdct, i) => {
    return i + 1;
  });

  console.log("arrayData", arr);

  return (
    <>
      <div
        className="productCard"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {data
          .slice((pageIndex - 1) * 5, (pageIndex - 1) * 5 + 5)
          .map((product, i) => {
            return <ProductCard key={i} product={product} />;
          })}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={() => setPageIndex(pageIndex - 1)}
          style={{ padding: "20px", marginRight: "10px" }}
          disabled={pageIndex === arr[0] ? true : false}
        >
          ⏮ Prev
        </button>
        {arr.map((val) => {
          return (
            <button
              style={{ padding: "20px", marginRight: "10px" }}
              onClick={() => setPageIndex(val)}
            >
              {val}
            </button>
          );
        })}
        <button
          onClick={() => setPageIndex(pageIndex + 1)}
          style={{ padding: "20px", marginRight: "10px" }}
          disabled={pageIndex === arr[arr.length - 1] ? true : false}
        >
          ⏭ Next
        </button>
      </div>
    </>
  );
};

export default Dashboard;
