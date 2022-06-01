import styles from "./Alert.module.css";

function Alert() {
  return (
    <div className={styles.alert}>
      <p>No hemos encontrado resultados para tu búsqueda.</p>
      <img
        className={styles.alertimg}
        src="./images/5197176.jpg"
        alt="No hay resultados para su búsqueda"
      />
    </div>
  );
}

export default Alert;
