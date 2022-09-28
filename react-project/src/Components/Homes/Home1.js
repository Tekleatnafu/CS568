import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../Products/Product";
import "./Home.css";
function Home1() {
  const [amazonData, setamazonData] = useState([]);
  useEffect(() => {
    async function fetch() {
      const amazonFromServer = await axios
        .get("http://localhost:3005/amazon")
        .then((response) => {
          let res = response.data;
          setamazonData(res);
        })
        .catch((err) => console.log(err));
    }
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //console.log(amazonData);
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
          style={{ height: "450px", width: "100%" }}
        />
        <div className="home_row">
          {amazonData.map((item, index) => {
            let div = (
              <>
                <Product
                  key={index}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                />
                <br />
                <br />
              </>
            );

            return div;
          })}
        </div>
        <div className="home_row">
          {amazonData.map((item, index) => {
            let div = (
              <>
                <Product
                  key={index}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                />
                <br /> <br />
              </>
            );
            return div;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home1;
