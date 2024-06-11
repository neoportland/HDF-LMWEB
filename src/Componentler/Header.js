import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Whatced from "./Whatced";
import Whatch from "./Add";
import { useSelector } from "react-redux";

const Header = () => {
  const { watchList, watched } = useSelector((store) => store.films);
  // console.log("ello dino uzunluk ");
  // console.log(watched.length);

  return (
    <div className="header">
      <div className="inner-content">
        <div className="brand">
          <Link className="linko" to={"/watch"} element={<Whatch />}>
            <div style={{ display: "flex", flexDirection: "row-reverse" }}>
              <div style={{ position: "relative" }}>
                <h3
                  style={{
                    position: "absolute",
                    color: "red",
                    top: "-17px",
                    right: "-1px",
                  }}
                >
                  {watchList && watchList.length}
                </h3>
              </div>
              <h4>İzlenecekler</h4>
            </div>
          </Link>
        </div>
        <ul>
          <Link className="linko" to={"/whatced"} element={<Whatced />}>
            <div style={{ position: "relative" }}>
              <h3
                style={{
                  position: "absolute",
                  color: "red",
                  top: "-17px",
                  right: "11px",
                }}
              >
                {watched.length}
              </h3>
            </div>

            <h4 style={{ marginRight: "10px" }}>İzlenenler</h4>
          </Link>
          <div
            style={{
              backgroundColor: "rgb(11 50 120 / 47%)",
              borderRadius: "10px",
            }}
          >
            <Link style={{ textDecoration: "none" }} to={"/add"}>
              {" "}
              <h2 style={{ padding: "1px 10px ", color: "white" }}>+</h2>
            </Link>{" "}
            {/* <i
              style={{
                backgroundColor: "#205D99",
                display: "flex",
                fontSize: "x-large",
                margin: " 5px  17px",
                height: "21px",
              }}
            >
              <Link className="linko" to={"/add"}>
                {" "}
                <FaPlus />
              </Link>

            </i> */}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
