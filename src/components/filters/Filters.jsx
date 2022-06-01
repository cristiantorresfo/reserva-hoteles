import React from "react";
import styles from "./Filters.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Filters({
  desde,
  hasta,
  pais,
  precio,
  tamanio,
  setDesde,
  setHasta,
  setPais,
  setPrecio,
  setTamanio,
}) 

{
  const cambiarFechaDesde = (evento) => {
    setDesde(evento.target.value);
  };
  const cambiarFechaHasta = (evento) => {
    setHasta(evento.target.value);
  };

  const cambiarPais = (evento) => {
    setPais(evento.target.value);
  };
  const cambiarPrecio = (evento) => {
    setPrecio(evento.target.value);
  };
  const cambiarTamanio = (evento) => {
    setTamanio(evento.target.value);
    };

  const limpiarFiltros = () => {
    setDesde("");
    setHasta("");
    setPais("todos");
    setPrecio("todos");
    setTamanio("todos");
  };

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <div className={styles.containerFilters}>
          <label htmlFor="desde">Desde</label>
          <input
            value={desde}
            type="date"
            onChange={cambiarFechaDesde}
            id="desde"
          />
        </div>
        <div className={styles.containerFilters}>
          <label htmlFor="hasta">Hasta</label>
          <input
            value={hasta}
            type="date"
            onChange={cambiarFechaHasta}
            id="hasta"
          />
        </div>
        <div className={styles.containerFilters}>
          <label>País</label>
          <select value={pais} onChange={cambiarPais}>
            <option value="todos">Todos los paises</option>
            <option value="argentina">Argentina</option>
            <option value="brasil">Brasil</option>
            <option value="chile">Chile</option>
            <option value="uruguay">Uruguay</option>
          </select>
        </div>
        <div className={styles.containerFilters}>
          <label>Precio</label>
          <select value={precio} onChange={cambiarPrecio}>
            <option value="todos">Cualquier precio</option>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
          </select>
        </div>
        <div className={styles.containerFilters}>
          <label>Tamaño</label>
          <select value={tamanio} onChange={cambiarTamanio}>
            <option value="todos">Cualquier tamaño</option>
            <option value="pequeño">Pequeño</option>
            <option value="mediano">Mediano</option>
            <option value="grande">Grande</option>
          </select>
        </div>
        <button onClick={limpiarFiltros} className={styles.btn}>
          <FontAwesomeIcon icon={faTrash} /> Limpiar
        </button>
        <div></div>
      </div>
    </div>
  );
}

export default Filters;
