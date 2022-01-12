import styles from "../styles/PizzaList.module.css";
import Image from "next/image";
import PizzaCard from "./PizzaCard";

const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nisi quas
        in nam corrupti incidunt quaerat autem modi earum! Quia cupiditate hic
        neque pariatur unde repellendus delectus vitae mollitia molestiae!
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map( (pizza) => <PizzaCard key={pizza._id} pizza={pizza} /> )}

      </div>
    </div>
  );
};

export default PizzaList;
