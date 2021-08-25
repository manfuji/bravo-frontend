import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import hairgrow from "../public/pictures/Hero.jpg";
function Menu() {
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
    <div>
      <div className="container mr-0">
        <div className="row">
          {product.map((prod) => (
            <div className="col mb-2" key={prod.id}>
              <div className="card" style={{ width: "20rem" }}>
                <Image
                  src={prod.picture}
                  className="card-img-top"
                  alt="..."
                  height="400"
                  width="400"
                />
                <div className="card-body bg-light">
                  <div className="">
                    <div className="d-flex justify-content-between">
                      <a
                        href="/"
                        className="btn btn-danger btn-md"
                        role="button"
                        aria-pressed="true"
                      >
                        Order
                        <i
                          className="fa fa-shopping-basket"
                          aria-hidden="true"
                        ></i>
                      </a>
                      <a
                        href="/"
                        className="btn btn-danger btn-md"
                        role="button"
                        aria-pressed="true"
                      >
                        Call
                        <i
                          className="fa fa-shopping-cart"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
