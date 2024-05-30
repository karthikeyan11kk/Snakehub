import styles from "../style";
import { pet } from "../assets";
const CardDeal = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-gray-gradient rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
     <h2 className={styles.heading2}>Snake Facts</h2>
      <p className={`${styles.paragraph} mt-2`}>

      Snakes have poor eyesight and respond to movement, which scares them. Most can't see in color. If you stand still, a snake can't distinguish you from a tree or rock.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <img src={pet} className="w-[300px] h-[300px]"/>
    </div>
  </section>
);

export default CardDeal;
