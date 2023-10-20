import React, { useState, useEffect } from "react";
import '../css/style.css';

const Card = () => {
  const [data, setData] = useState({ title: "Zulu Land Cottages - near curlies beach ", imageUrl: "https://static.leonardo-hotels.com/image/leonardohotelbucharestcitycenter_room_comfortdouble2_2022_4000x2600_7e18f254bc75491965d36cc312e8111f_1200x780_mobile_3.jpeg" });

  useEffect(() => {
    fetch("API_URL")
      .then((response) => response.json())
      .then((data) => {
        setData({
          title: data.title,
          imageUrl: data.image,
        });
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div className="card">
      <h2>{data.title}</h2>
      <img
        src={data.imageUrl}
        alt="Image"
        style={{ width: '150px', height: '150px' }} 
      />
    </div>
  );
};

export default Card;
