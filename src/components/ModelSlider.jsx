import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import boxChk from "./../assets/AR Assets/box_chk_nslc.png";
import boxChkSlc from "./../assets/AR Assets/box_chk_slc.png";
import styled from "styled-components";
import { useState, useCallback } from "react";

const ModelSlider = () => {
  const [data, setData] = useState([
    { id: 1, checked: false },
    { id: 2, checked: false },
    { id: 3, checked: false },
    { id: 4, checked: false },
    { id: 5, checked: false },
    { id: 6, checked: false },
  ]);

  const onToggle = useCallback(
    (id) => {
      setData(
        data.map((datum) =>
          datum.id === id ? { ...datum, checked: !datum.checked } : datum
        )
      );
    },
    [data]
  );

  const settings = {
    arrows: false,
    className: "center",
    centerMode: true,
    infinite: true,
    // centerPadding: "60px",
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    // focusOnSelect: true,
  };

  return (
    <$Wrapper>
      <$StyledSlider {...settings}>
        {data.map((datum) => {
          return (
            <div key={datum.id} onClick={() => onToggle(datum.id)}>
              <$List>
                <img src={datum.checked ? boxChkSlc : boxChk} alt="status" />
              </$List>
            </div>
          );
        })}
      </$StyledSlider>
    </$Wrapper>
  );
};

export default ModelSlider;

const $Wrapper = styled.div`
  /* background-color: yellow; */
  width: 100%;
  height: 85%;
  position: absolute;
  top: 3.9vw;
  left: 0;
  overflow: hidden;
`;

const $List = styled.div`
  width: 12.5vw;
  margin: auto;
`;

const $StyledSlider = styled(Slider)`
  height: 100%;
  /* background-color: yellow; */
`;
