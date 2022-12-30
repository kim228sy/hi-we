import * as s from "./main.styles";

import { Mousewheel, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

export default function MainUI() {
  return (
    <s.Wrapper>
      <s.CustonSwiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <s.CustonSwiperSlide>
          <s.Img src="/image/main1.png" color="#b6cbd6" />
        </s.CustonSwiperSlide>
        <s.CustonSwiperSlide>
          <s.Img src="/image/main2.png" color="#b6cbd6" />
        </s.CustonSwiperSlide>
      </s.CustonSwiper>
      <s.AboutUsWrapper>
        <h1>HI, We!</h1>
        <h2>우리는, 보다 더 아름다운 세상을 위해 움직입니다!</h2>
        <s.AboutUs>
          많은 동물들이 사람에 의해 다치거나 버려진다는 사실, 알고계셨나요?
          <br />
          도움이 필요한 아이들, 그들을 보호하는 분들이 당신을 기다리고 있습니다.
          <p />
          <strong>하이 위는</strong>
          후원하고자 하는 당신과 후원이 필요한 곳과 연결해줍니다.
          <p />
          <s.Pages>
            <s.Sponsors>
              <strong>후원 페이지는</strong>
              후원자와 피후원자를 연결합니다.
              <p />
              <strong>후원 할래요</strong>
              후원이 필요한 아이들의 정보를 확인 할 수 있습니다. 이름, 보호소,
              위치, 설명, 필요한 후원 금액 등이 정보로 제공이 됩니다.
              <br />
              <strong>후원 받을래요</strong>
              후원이 필요한 아이들의 정보를 기입하고 후원을 받을 수 있습니다.
              <p />
            </s.Sponsors>
            <s.Boards>
              <strong>커뮤니티 페이지는</strong>
              후원자, 피후원자 구분없이 익명으로 교류할 수 있도록 합니다.
              <p />
              <strong>게시글 볼래요</strong>
              익명으로 올라 온 게시글을 볼 수 있습니다. 좋아요 수를 통해서 어떤
              게시글이 인기있는 지 알 수 있습니다.
              <br />
              <strong>게시글 쓸래요</strong>
              익명으로 게시글을 쓸 수 있습니다. 이미지, 유튜브 링크 등을 통해서
              재미있게 교류 할 수 있습니다.
            </s.Boards>
          </s.Pages>
        </s.AboutUs>
      </s.AboutUsWrapper>
    </s.Wrapper>
  );
}
