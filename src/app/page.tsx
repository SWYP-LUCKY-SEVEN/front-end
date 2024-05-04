"use client";

import Input_Chat from "./_component/input/Input_Chat";
import Footer from "./_component/footer/footer";
import Toggle from "./_component/toggle/toggle";
import Navigation from "./_component/navigation/page";
import Guide from "./_component/main_home/Guide";
import Card from "./_component/main_home/Card";
import ButtonBox from "./_component/main_home/ButtonBox";

export default function Home() {
  return (
    <div>
      <Input_Chat />
      <br />
      <Footer />
      <Footer selectedIndex={1} />
      <Footer selectedIndex={2} />
      <Footer selectedIndex={3} />
      <br />
      <Toggle />
      <br />
      <Navigation onClick={() => {}} isSearch={true}>
        프로필 등록
      </Navigation>
      <hr />
      <Guide
          onClick={() => {}}>
            <p>쇼터디 가입하고</p>
            <p>나에게 딱맞는 스터디 찾아요</p>
      </Guide>
      <hr />
      <Card />
      <br />
      <ButtonBox />
      <hr />
    </div>
  );
}
