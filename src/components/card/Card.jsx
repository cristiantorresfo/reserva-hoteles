import React from "react";
import styles from "./Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faBed } from "@fortawesome/free-solid-svg-icons";

function Card({ hotel }) {
  const opciones = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let fechaHotelDesde = new Date(hotel.availabilityFrom).toLocaleDateString(
    "es-CO",
    opciones
  );
  let fechaHotelHasta = new Date(hotel.availabilityTo).toLocaleDateString(
    "es-CO",
    opciones
  );

  const reservar = () => {
    alert("Hotel reservado");
  };
  return (
    <div className={styles.card}>
      <img
        width="100%"
        src={hotel.photo}
        alt={`fotografía del hotel ${hotel.name}`}
      />
      <h3 className={styles.nombreHotel}>{hotel.name}</h3>
      <div className={styles.fechas}>Desde: {fechaHotelDesde}</div>
      <div className={styles.fechas}>Hasta: {fechaHotelHasta}</div>
      <div className={styles.descripcion}>
        <p>{hotel.description}</p>
      </div>
      <div className={styles.ubicacion}>
        {" "}
        <div className={styles.iconos}>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </div>{" "}
        <div className={styles.ciudad}>
          {hotel.city}, {hotel.country}
        </div>
      </div>

      <div className={styles.tamañoYPrecio}>
        <div className={styles.iconos}>
          <FontAwesomeIcon icon={faBed} />
        </div>
        <div className={styles.habitaciones}> {hotel.rooms} habitaciones</div>
        <div className={styles.precios}>
          {Array.from({ length: hotel.price }).map((index) => {
            return <span key={index}>$</span>;
          })}
          {Array.from({ length: 4 - hotel.price }).map((index) => {
            return (
              <span key={index} className={styles.colorGris}>
                $
              </span>
            );
          })}
        </div>
      </div>
      <button onClick={reservar}>Reservar</button>
    </div>
  );
}

export default Card;
