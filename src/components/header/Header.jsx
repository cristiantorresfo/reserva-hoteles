import {
  faBed,
  faCalendarAlt,
  faDollarSign,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./Header.module.css";

function Header({ desde, hasta, pais, precio, tamanio }) {
  const opciones = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let DS_Desde = new Date(desde + "T00:00:00");
  let DS_Hasta = new Date(hasta + "T00:00:00");

  let desdeNatural = DS_Desde.toLocaleDateString("es-CO", opciones);
  let hastaNatural = DS_Hasta.toLocaleDateString("es-CO", opciones);

  return (
    <div className={styles.header}>
      <h1>Reserva de Hoteles</h1>
      <div className={styles.headerFechas}>
        {desde ? (
          <h5>
            <FontAwesomeIcon icon={faCalendarAlt} /> Desde el {desdeNatural}
          </h5>
        ) : (
          <h5>
            {" "}
            <i>
              <FontAwesomeIcon icon={faCalendarAlt} /> Selecciona una fecha
              inicial
            </i>
          </h5>
        )}
        {hasta ? (
          <h5>
            <FontAwesomeIcon icon={faCalendarAlt} /> Hasta el {hastaNatural}
          </h5>
        ) : (
          <h5>
            <i>
              <FontAwesomeIcon icon={faCalendarAlt} /> Selecciona una fecha
              final
            </i>{" "}
          </h5>
        )}
      </div>
      <div className={styles.headerFiltros}>
        {pais !== "todos" ? (
          <h5>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {pais.toUpperCase()}
          </h5>
        ) : (
          <h5>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Todos los países
          </h5>
        )}
        {precio !== "todos" ? (
          <h5>
            <FontAwesomeIcon icon={faDollarSign} /> {precio.toUpperCase()}{" "}
          </h5>
        ) : (
          <h5>
            <FontAwesomeIcon icon={faDollarSign} /> Cualquier precio
          </h5>
        )}
        {tamanio !== "todos" ? (
          <h5>
            <FontAwesomeIcon icon={faBed} /> {tamanio.toUpperCase()}{" "}
          </h5>
        ) : (
          <h5>
            <FontAwesomeIcon icon={faBed} /> Cualquier tamaño
          </h5>
        )}
      </div>
    </div>
  );
}

export default Header;
