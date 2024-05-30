import styles from "../style";
import { snakeb } from "../assets";
const CardDeal2 = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-gray-gradient rounded-[20px] box-shadow`}>

    <div className="flex-1 flex flex-col">
     <h2 className={styles.heading2}>Snake Facts</h2>
      <p className={`${styles.paragraph} mt-2`}>

      Snakes can swallow prey up to 10 times the size of their head, similar to a human swallowing a whole pig! This is possible because their jaws are connected by stretchy muscles and ligaments, not fused by bone like human jaws.     
      </p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 sm:mt-0 mr-5`}>
      <img src={snakeb} className="w-[400px] h-[300px]"/>
    </div>
  </section>
);

export default CardDeal2;
