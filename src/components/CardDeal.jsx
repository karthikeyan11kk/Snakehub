import styles from "../style";
import { yellow } from "../assets";
const CardDeal = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-gray-gradient rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
     <h2 className={styles.heading2}>Snake Facts</h2>
      <p className={`${styles.paragraph} mt-2`}>
      Snakes are ectotherms, relying on the sun for energy. They alternate between sunbathing and seeking shade to regulate their temperature. Without warmth, they can't digest food or move effectively.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <img src={yellow} className="w-[400px] h-[400px]"/>
    </div>
  </section>
);

export default CardDeal;
