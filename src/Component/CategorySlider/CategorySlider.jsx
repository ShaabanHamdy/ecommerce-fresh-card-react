import axios from "axios";
import React from "react";
import Slider from "react-slick";
import { useQuery } from "react-query";

const CategorySlider = () => {
  const getCategorySlider = () => {
    return axios.get("https://ecommerce.routemisr.com/api/v1/categories");
  };
  let { data } = useQuery("CategorySlider", getCategorySlider);
  let products = data?.data?.data;
  var settings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1500,
    cssEase: "linear",
    slidesToShow: 7,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        {products?.map((product) => (
         <div key={product._id} className="py-3">
         <img
          style={{
            height:"300px",
         }}
         className="w-100 p-2" src={product.image} alt="" />
         </div>
        ))}
      </Slider>
    </>
  );
};

export default CategorySlider;
