import { useState, useEffect } from "react";
import "./styles.css";
import { useQuery } from "react-query";
import fetchProductData from "./Data/fetchProductData";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    let progressBarHandler = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      setScroll(scroll);
    };

    window.addEventListener("scroll", progressBarHandler);

    return () => window.removeEventListener("scroll", progressBarHandler);
  });

  const { data, isLoading, isError, error } = useQuery(
    "productData",
    fetchProductData
  );

  if (isError) {
    console.log("error", error);
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      <div id="progressBarContainer">
        <div
          id="progressBar"
          style={{
            transform: `scale(${scroll}, 1)`
            // opacity: `${scroll}`
          }}
        />
      </div>
      <h1
        style={{
          textAlign: "center",
          height: "60px",
          backgroundColor: "gray",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        Hello My Pagination
      </h1>
      <Dashboard data={data} />
    </div>
  );
}
