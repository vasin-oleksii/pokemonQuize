export const questions = [
  {
    id: 1,
    question:
      'Quelle est le pourcentage de faille humaine dans la cybersécurité en France 2023 ?',
    type: 'choix_unique',
    reponses: [
      {
        texte: '74%',
        correcte: true,
      },
      {
        texte: '54%',
        correcte: false,
      },
      {
        texte: '33%',
        correcte: false,
      },
      {
        texte: '92%',
        correcte: false,
      },
    ],
  },
  {
    id: 2,
    question: 'Que faire en cas de ransomware ?',
    type: 'choix_unique',
    reponses: [
      {
        texte: "Reboot l'ordinateur",
        correcte: false,
      },
      {
        texte: "Informer les forces de l'ordre",
        correcte: true,
      },
      {
        texte: 'Se débarrasser du matériel',
        correcte: false,
      },
      {
        texte: 'Payer la rançon',
        correcte: false,
      },
    ],
  },
  {
    id: 3,
    question: "Est-il possible d'infecter un ordinateur via un mail ?",
    type: 'choix_unique',
    reponses: [
      {
        texte: 'Faux',
        correcte: false,
      },
      {
        texte: 'Vrai',
        correcte: true,
      },
    ],
  },
  {
    id: 4,
    question: 'Que faire en cas de clé USB trouvée au travail ?',
    type: 'choix_multiple',
    reponses: [
      {
        texte:
          "Regarder son contenu afin d'en déterminer le propriétaire au travail",
        correcte: false,
      },
      {
        texte: 'La jeter',
        correcte: true,
      },
      {
        texte: 'La donner a son responsable hiérarchique',
        correcte: true,
      },
      {
        texte:
          "Regarder son contenu afin d'en déterminer le propriétaire chez soi",
        correcte: false,
      },
    ],
  },
  {
    id: 5,
    question: "Qu'est ce que le phishing ?",
    type: 'choix_unique',
    reponses: [
      {
        texte: "Infecter un ordinateur a  l'aide d'un lien frauduleux",
        correcte: false,
      },
      {
        texte: 'Une technique de pêche ancestrale',
        correcte: false,
      },
      {
        texte: 'Infecter un ordinateur via une clé usb',
        correcte: false,
      },
      {
        texte:
          "Infecter un ordinateur a l'aide d'un faux site internet (ex: faux Facebook)",
        correcte: true,
      },
    ],
  },
  {
    id: 6,
    question:
      'A quelle fréquence est-il préconiser de changer son mot de passe ?',
    type: 'choix_unique',
    reponses: [
      {
        texte: '3-6 mois',
        correcte: true,
      },
      {
        texte: 'Jamais',
        correcte: false,
      },
      {
        texte: '2-3 ans',
        correcte: false,
      },
      {
        texte: 'Tout les mois',
        correcte: false,
      },
    ],
  },
  {
    id: 7,
    question: "Qu'est ce qu'un mot de passe fort ?",
    type: 'choix_unique',
    reponses: [
      {
        texte:
          '12 caractères maximum, avec minuscule et majuscule et caractère spéciaux',
        correcte: false,
      },
      {
        texte:
          '12 caractères maximum, avec minuscule et majuscule et caractère spéciaux',
        correcte: true,
      },
      {
        texte:
          '8 caractères, avec minuscule et majuscule et caractère spéciaux',
        correcte: false,
      },
      {
        texte:
          '12 caractères maximum, avec minuscule et majuscule ou caractère spéciaux',
        correcte: false,
      },
    ],
  },
  {
    id: 8,
    question: "Qu'est ce qu'un mot de passe fort ?",
    type: 'choix_unique',
    reponses: [
      {
        texte: 'Vrai',
        correcte: false,
      },
      {
        texte: 'Faux',
        correcte: true,
      },
    ],
  },
];
