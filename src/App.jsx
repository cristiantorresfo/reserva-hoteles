import "./styles.css";
import Header from "./components/header/Header";
import Filters from "./components/filters/Filters";
import Cards from "./components/cards/Cards";
import { hotelsData } from "./statics/data";
import { useState } from "react";
import Alert from "./components/alerta/Alert";

export default function App() {
  const [pais, setPais] = useState("todos");
  const [precio, setPrecio] = useState("todos");
  const [tamanio, setTamanio] = useState("todos");
  const [desde, setDesde] = useState("");
  const [hasta, setHasta] = useState("");

  //convertir strings a Date Strings
  let DS_Desde = new Date(desde + "T00:00:00");
  let DS_Hasta = new Date(hasta + "T00:00:00");

  //tiempo UNIX de las fechas seleccionadas por usuarios
  let desdeUNIX = DS_Desde.getTime();
  let hastaUNIX = DS_Hasta.getTime();

  const hotelesFiltrados = () => {
    const today = new Date().setHours(0, 0, 0, 0);
    if (desdeUNIX < today) {
      alert(
        "No puedes seleccionar una fecha menor a la actual. Por favor selecciona otra fecha."
      );
      setDesde("");
    } else if (desdeUNIX > hastaUNIX) {
      alert(
        "La fecha final no puede ser menor a la fecha inicial. Por favor selecciona otras fechas."
      );
      setDesde("");
      setHasta("");
    }
    let nuevaLista = hotelsData
      .filter((hotel) => {
        if (pais === "todos") {
          return hotel;
        } else {
          return hotel.country.toLowerCase() === pais.toLowerCase();
        }
      })
      .filter((hotel) => {
        if (tamanio === "pequeño") {
          return hotel.rooms <= 10;
        } else if (tamanio === "mediano") {
          return hotel.rooms > 10 && hotel.rooms < 20;
        } else if (tamanio === "grande") {
          return hotel.rooms >= 20;
        } else {
          return hotel;
        }
      })
      .filter((hotel) => {
        if (precio !== "todos") {
          return hotel.price === Number(precio);
        } else {
          return hotel;
        }
      })
      .filter((hotel) => {
        if (desde !== "" && hasta !== "") {
          if (
            hotel.availabilityFrom <= desdeUNIX &&
            hotel.availabilityTo >= hastaUNIX
          ) {
            return true;
          } else {
            return false;
          }
        } else {
          return hotel;
        }
      });
    return nuevaLista;
  };

  const nuevaListaHoteles = hotelesFiltrados();
  return (
    <div className="App">
      <Header
        desde={desde}
        hasta={hasta}
        pais={pais}
        precio={precio}
        tamanio={tamanio}
      />
      <Filters
        desde={desde}
        hasta={hasta}
        pais={pais}
        precio={precio}
        tamanio={tamanio}
        setDesde={setDesde}
        setHasta={setHasta}
        setPais={setPais}
        setPrecio={setPrecio}
        setTamanio={setTamanio}
      />
      {nuevaListaHoteles.length === 0 ? (
        <Alert />
      ) : (
        <Cards nuevaListaHoteles={nuevaListaHoteles} />
      )}
    </div>
  );
}
