import type { NextPage } from "next";
import Image from "next/image";
import styles from "./style.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.root}>
      <nav className={styles.nav}>
        <h1 className={styles.logo}>
          <Image
            className={styles.logoImg}
            src="/marugao-logo.png"
            alt="丸顔ロゴ"
            width="150"
            height="150"
          />
        </h1>
        <ul className={styles.navList}>
          <li className={`${styles.navItem} ${styles.biography}`}>
            <a href="" className={`${styles.navLink} ${styles.biographyLink}`}>
              Biography
            </a>
          </li>
          <li className={`${styles.navItem} ${styles.collection}`}>
            <a href="" className={`${styles.navLink} ${styles.collectionLink}`}>
              COLLECTION
            </a>
          </li>
          <li className={`${styles.navItem} ${styles.comsa}`}>
            <a href="" className={`${styles.navLink} ${styles.comsaLink}`}>
              COMSA
            </a>
          </li>
          <li className={`${styles.navItem} ${styles.twitter}`}>
            <a href="" className={`${styles.navLink} ${styles.twitterLink}`}>
              Twitter
            </a>
          </li>
          <li className={`${styles.navItem} ${styles.instagram}`}>
            <a href="" className={`${styles.navLink} ${styles.instagramLink}`}>
              Instagram
            </a>
          </li>
          <li className={`${styles.navItem} ${styles.jobOffer}`}>
            <a href="" className={`${styles.navLink} ${styles.jobOfferLink}`}>
              Job&nbsp;Offer
            </a>
          </li>
        </ul>
      </nav>
      {/*<div className={styles.a}>MARUGAO</div>*/}
      {/*<div>丸顔</div>*/}
      {/*<div>マルガオ</div>*/}
      {/*<div>まるがお</div>*/}
      {/*<div>MARUGAO</div>*/}
      {/*<div>マルガオ</div>*/}
      {/*<div>丸顔</div>*/}
      {/*<div>MARUGAO</div>*/}
      {/*<div>マルガオ</div>*/}
      {/*<div>丸顔</div>*/}
      {/*<div>丸顔</div>*/}
      {/*<div>まるがお</div>*/}
      {/*<div>マルガオ</div>*/}
      {/*<div>マルガオ</div>*/}
      {/*<div>丸顔</div>*/}
      {/*<div>まるがお</div>*/}
      {/*<div>MARUGAO</div>*/}
    </div>
  );
};

export default Home;
