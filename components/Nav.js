import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import { useEffect, useState } from "react";
import axios from "axios";
function Nav() {
  const [data, getData] = useState({ post: [] });
  useEffect(() => {
    axios
      .get("https://bravosfood.pythonanywhere.com/api/slide/")
      .then((res) => {
        getData({
          post: res.data,
        });
      })
      .catch((err) => console.log(err));
  }, []);
  const slide = data.post;
  console.log(slide);
  return (
    <div>
      <div className="mb-1">
        <Carousel fade prevLabel="" nextLabel="">
          {slide.map((pro) => (
            <Carousel.Item style={{ height: "20%", width: "100%" }}>
              <img
                key={pro.id}
                style={{ height: "20%" }}
                className="d-block w-100"
                src={pro.picture}
                alt=""
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Nav;
