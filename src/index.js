import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favorite Sports</h1>
    <img alt="random" src={img + "?grayscale"} />

    <img
      className="food-img"
      alt="football"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLfPCmOPJCcFoIxWccio4i20Tv82dXl93w5g&usqp=CAU"
    />
    <img
      className="food-img"
      alt="all-balls"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYudIzo0f-2Ni0HPUpDLEp_8_DaNgg0cuJzw&usqp=CAU"
    />
    <img
      className="food-img"
      alt="basketball"
      src="https://pyxis.nymag.com/v1/imgs/583/97e/f46ab7f59eb0d850067bbeb1bfc3b1a12a-11-nba-basketball-floor.rsquare.w1200.jpg"
    />
  </div>,
  document.getElementById("root")
);
