import React, { useEffect, useState } from "react";
import * as s from "../styles/landing.styles";
import { useMediaQuery } from "react-responsive";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import { SwapRightOutlined } from "@ant-design/icons";

export default function Home() {
  const BgVideo = "/video/bgDog.mp4";

  const isPc = useMediaQuery({
    query: "(min-width:1024px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1023px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const [isHover, setIsHover] = useState(true);
  const router = useRouter();

  useEffect(() => {
    AOS.init();
  }, []);

  const onHover = () => {
    setIsHover(!isHover);
  };

  const onClickGoMain = () => {
    router.push("/main");
  };

  return (
    <>
      {isPc && (
        <s.Wrapper>
          <s.Video autoPlay muted loop src={BgVideo}></s.Video>
          {isHover ? (
            <s.VideoText
              fontsize={`32px`}
              onMouseOver={onHover}
              width={`150px`}
              height={`150px`}
            >
              Hi👋
            </s.VideoText>
          ) : (
            <s.GoMain
              onMouseLeave={onHover}
              fontsize={`25px`}
              onClick={onClickGoMain}
              width={`150px`}
              height={`150px`}
            >
              We 🙌
              <SwapRightOutlined />
            </s.GoMain>
          )}
        </s.Wrapper>
      )}
      {isTablet && (
        <s.Wrapper>
          <s.Video autoPlay muted loop src={BgVideo}></s.Video>

          {isHover ? (
            <s.VideoText
              fontsize={`16px`}
              onMouseOver={onHover}
              width={`100px`}
              height={`100px`}
            >
              Hi👋
            </s.VideoText>
          ) : (
            <s.GoMain
              onMouseLeave={onHover}
              fontsize={`16px`}
              onClick={onClickGoMain}
              width={`100px`}
              height={`100px`}
            >
              We 🙌
              <SwapRightOutlined />
            </s.GoMain>
          )}
        </s.Wrapper>
      )}
      {isMobile && (
        <s.Wrapper>
          {isHover ? (
            <s.VideoText
              fontsize={`10px`}
              onMouseOver={onHover}
              width={`60px`}
              height={`60px`}
            >
              Hi👋
            </s.VideoText>
          ) : (
            <s.GoMain
              onMouseLeave={onHover}
              fontsize={`8px`}
              onClick={onClickGoMain}
              width={`60px`}
              height={`60px`}
            >
              We 🙌
              <SwapRightOutlined />
            </s.GoMain>
          )}
        </s.Wrapper>
      )}
    </>
  );
}
