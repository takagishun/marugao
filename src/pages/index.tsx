import type { NextPage } from "next";
import { Image } from "next/image";
import styles from "./style.module.scss";

const Home: NextPage = () => {
  return (
    <>
      {/*<h1>*/}
      {/*  <Image src="/base-marugao.png" alt="丸顔ロゴ" />*/}
      {/*</h1>*/}
      <nav className={styles.nav}>
        <ul>
          <li className={styles.biography}>
            <a href="">Biography</a>
          </li>
          <li className={styles.collection}>
            <a href="">COLLECTION</a>
          </li>
          <li>
            <a href="">COMSA</a>
          </li>
          <li>
            <a href="">Twitter</a>
          </li>
          <li>
            <a href="">Instagram</a>
          </li>
          <li>
            <a href="">Job Offer</a>
          </li>
        </ul>
      </nav>
      <div className={styles.a}>MARUGAO</div>
      <div>丸顔</div>
      <div>マルガオ</div>
      <div>まるがお</div>
      <div>MARUGAO</div>
      <div>マルガオ</div>
      <div>丸顔</div>
      <div>MARUGAO</div>
      <div>マルガオ</div>
      <div>丸顔</div>
      <div>丸顔</div>
      <div>まるがお</div>
      <div>マルガオ</div>
      <div>マルガオ</div>
      <div>丸顔</div>
      <div>まるがお</div>
      <div>MARUGAO</div>
    </>
  );
};

export default Home;
