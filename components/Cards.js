import Card from "./component/Card";
import { useEffect, useState } from "react";
import axios from "axios";

function Cards() {
  const [data, getData] = useState({ post: [] });
  useEffect(() => {
    axios
      .get("https://bravosfood.pythonanywhere.com/api/product/")
      .then((res) => {
        getData({
          post: res.data,
        });
      })
      .catch((err) => console.log(err));
  }, []);
  const product = data.post;
  return (
    <div className="flex w-full flex-wrap items-center mx-auto">
      {product.map((prod) => (
        // console.log(prod.Product_name)
        <div>
          <Card
            key={prod.id}
            Picture={prod.picture}
            title={prod.Product_name}
            desc={prod.description}
            id={prod.id}
            price={prod.price}
          />
        </div>
      ))}
    </div>
  );
}

export default Cards;
