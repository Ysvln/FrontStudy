import DoctorsContentTitle from "./DoctorsContentTitle";

function DoctorsImg2() {
  return (
    <div class="doctors_img2">
      <div class="doctors_img2_1">
        <DoctorsContentTitle
          title="시장점유율"
          num="36%"
          text="요양병원51%/한방병원66%/병원15%"
          ranking="(1위)"
        />
        <div class="doctors_img2_img">
          <img src="https://www.hectonproject.com/img/doctors0.jpg" alt="" />
        </div>
      </div>
      <div class="doctors_img2_2">
        <div class="doctors_img2_img">
          <img src="https://www.hectonproject.com/img/doctors1.jpg" alt="" />
        </div>
        <DoctorsContentTitle
          title="고객수"
          num="1,300처"
          text="요양병원800처/한방병원300처/병원200퍼"
          ranking="(1위)"
        />
      </div>
      <div class="doctors_img2_1">
        <DoctorsContentTitle
          title="대리점"
          num="17개"
          text="병원 전문가 100명의 차별화된 서비스"
          ranking="(1위)"
        />
        <div class="doctors_img2_img">
          <img src="https://www.hectonproject.com/img/doctors2.jpg" alt="" />
        </div>
      </div>
      <div class="doctors_img2_2">
        <div class="doctors_img2_img">
          <img src="https://www.hectonproject.com/img/doctors3.jpg" alt="" />
        </div>

        <DoctorsContentTitle title="역사" num="40년" text="제품 안정성 확보" />
      </div>
      <div class="doctors_img2_3"></div>
      <div class="doctors_img2_4"></div>
    </div>
  );
}

export default DoctorsImg2;
