import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import boxChk from "./../assets/AR Assets/box_chk_nslc.png";
import boxChkSlc from "./../assets/AR Assets/box_chk_slc.png";
import styled from "styled-components";
import { useState, useCallback } from "react";

const CallingSlider = () => {
  const [data, setData] = useState([
    { id: 1, title: "유량계", content: "계측 정상유무", checked: false },
    { id: 2, title: "유량계", content: "변환기반 동작유무  ", checked: false },
    { id: 3, title: "저장조", content: "재고량 확인", checked: false },
    {
      id: 4,
      title: "유량계",
      content: "배관, 밸브류 누액 유무",
      checked: false,
    },
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
    dots: false,
    infinite: true,
    slidesToShow: 3,
    // slidesToScroll: 1,
    swipeToSlide: true,
  };

  return (
    <$Wrapper>
      <$StyledSlider {...settings}>
        {data.map((datum) => {
          return (
            <div key={datum.id} onClick={() => onToggle(datum.id)}>
              <$List>
                <$Title>{datum.title}</$Title>
                <$Content>{datum.content}</$Content>
                <img src={datum.checked ? boxChkSlc : boxChk} alt="status" />
              </$List>
            </div>
          );
        })}
      </$StyledSlider>
    </$Wrapper>
  );
};

export default CallingSlider;

const $Wrapper = styled.div`
  /* background-color: yellow; */
  width: 35vw;
  height: 10vw;
  /* overflow: hidden; */
`;

const $List = styled.div`
  position: relative;
  width: 11vw;
  img {
    width: 100%;
  }
`;

const $Title = styled.div`
  position: absolute;
  left: 1.2vw;
  top: 0.8vw;
  width: 10vw;
  height: 1.6vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1vw;
  font-weight: bold;
  /* border: 0.5px solid green; */
`;

const $Content = styled.div`
  /* border: 0.5px solid green; */
  position: absolute;
  top: 3.5vw;
  left: 1.2vw;
  width: 10vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1vw;
  font-weight: bold;
`;

const $StyledSlider = styled(Slider)`
  height: 100%;
  /* background-color: yellow; */
`;
