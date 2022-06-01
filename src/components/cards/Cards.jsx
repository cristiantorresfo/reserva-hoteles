import React from "react";
import styles from "./Cards.module.css";
import Card from "../card/Card";


function Cards({nuevaListaHoteles}) {
    return (
    <div className={styles.cards}>
      {nuevaListaHoteles.map((hotel) => {
        return <Card key={hotel.slug} hotel={hotel} />;
      })}
    </div>
  );
}

export default Cards;
