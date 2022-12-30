import styled from "@emotion/styled";
import { Container } from "@mui/system";
import { Swiper, SwiperSlide } from "swiper/react";

export const Wrapper = styled(Container)`
  height: 100%;
`;
export const CustonSwiper = styled(Swiper)`
  width: 100%;
  height: 400px;
`;

export const CustonSwiperSlide = styled(SwiperSlide)``;
export const Img = styled.img<{ color: string }>`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: ${(props) => props.color};
`;

export const AboutUsWrapper = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboutUs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: medium;
  align-items: center;
`;

export const Pages = styled.div`
  width: 100%;
  display: flex;
  /* flex-direction: column; */
  font-size: medium;
`;

export const Sponsors = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  font-size: medium;
  padding: 0px 5px;
`;

export const Boards = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  font-size: medium;
  padding: 0px 5px;
`;
