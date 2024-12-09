import styles from './styles.module.css';

export const BattleMenu = ({ asks, onAttack, onMagic, onHeal }) => {
  return (
    <div className={styles.main}>
      {asks.reponses.map(ask => {
        if (ask.correcte === true) {
          return Math.random() > 0.5 ? (
            <div
              onClick={() => {
                onAttack();
                alert("C'est bon reponse!🥰 You Attack! 🗡️");
              }}
              className={styles.option}
            >
              {ask.texte}
            </div>
          ) : (
            <div
              onClick={() => {
                onHeal();
                alert("C'est bon reponse!🥰 You are healing 💓 ");
              }}
              className={styles.option}
            >
              {ask.texte}
            </div>
          );
        } else {
          return (
            <div
              onClick={() => {
                onMagic();
                alert("C'est mal reponse 😥 weak attack 🤏");
              }}
              className={styles.option}
            >
              {ask.texte}
            </div>
          );
        }
      })}

      {/* <div onClick={onAttack} className={styles.option}>
        Attack
      </div>
      <div onClick={onMagic} className={styles.option}>
        Magic
      </div>
      <div onClick={onHeal} className={styles.option}>
        Heal
      </div> */}
    </div>
  );
};
