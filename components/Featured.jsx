import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";

const Featured = () => {
    const [index, setIndex] = useState(0);

    const handleArrow = (direction) => {
        if(direction === "l"){
            setIndex(index !== 0 ? index-1 : 1)
        }
        if(direction === "r"){
            setIndex(index !== 2 ? index+1 : 0)
        }
    }

  const images = ["/img/featured.png", "/img/featured2.png"];
  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }}>
        <Image src="/img/arrowl.png" alt="" layout="fill" onClick={()=>handleArrow("l")}/>
      </div>
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} key={i} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }}>
        <Image src="/img/arrowr.png" alt="" layout="fill" onClick={()=>handleArrow("l")}/>
      </div>
    </div>
  );
};

export default Featured;

// Code for Iamges
