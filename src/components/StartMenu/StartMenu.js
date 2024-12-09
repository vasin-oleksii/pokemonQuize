import styles from './styles.module.css';

export const StartMenu = ({ onStartClick }) => {
  return (
    <div className={styles.main}>
      <button className={styles.startButton} onClick={onStartClick}>
        <div> CyberMon</div>
        <img src="https://img.pokemondb.net/sprites/sun-moon/normal/pikachu-f.png"></img>
      </button>
    </div>
  );
};
