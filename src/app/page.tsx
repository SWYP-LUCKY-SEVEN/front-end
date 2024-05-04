"use client";

import Input_Chat from "./_component/input/Input_Chat";
import Footer from "./_component/footer/footer";
import Toggle from "./_component/toggle/toggle";
import Navigation from "./_component/navigation/page";

import styles from "./_component/modal/modal.module.css";

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
      <br />
    </div>
  );
}
