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
  {
    id: 9,
    question: 'A quoi doit-on faire attention dans un mail ?',
    type: 'choix_unique',
    reponses: [
      {
        texte:
          "Fautes d'orthographes, l'adresse de l'expéditeur, lien qu'il y a dans le mail",
        correcte: true,
      },
      {
        texte:
          "Fautes d'orthographes, l'adresse de l'expéditeur, lien qu'il y a dans le mail, destinataire",
        correcte: false,
      },
      {
        texte: "L'adresse de l'expéditeur, lien qu'il y a dans le mail",
        correcte: false,
      },
      {
        texte: 'Destinataire, lien dans le mail',
        correcte: false,
      },
    ],
  },
  {
    id: 10,
    question:
      'Pourquoi est-il important de mettre à jour vos logiciels régulièrement ?',
    type: 'choix_unique',
    reponses: [
      {
        texte: "Pour améliorer l'apparence du logiciel",
        correcte: false,
      },
      {
        texte:
          'Pour corriger les failles de sécurité et améliorer la performance',
        correcte: true,
      },
      {
        texte: "Parce que les mises à jour coûtent de l'argent",
        correcte: false,
      },
      {
        texte: 'Pour que votre ordinateur soit plus rapide',
        correcte: false,
      },
    ],
  },
  {
    id: 11,
    question: 'Comment reconnaître une page web sécurisée ?',
    type: 'choix_unique',
    reponses: [
      {
        texte: "Elle commence par 'http://' dans l'URL",
        correcte: false,
      },
      {
        texte:
          "Elle commence par 'https://' et a un cadenas dans la barre d'adresse",
        correcte: true,
      },
      {
        texte: 'Elle a une couleur de fond verte',
        correcte: false,
      },
      {
        texte: 'Elle est accessible uniquement par abonnement payant',
        correcte: false,
      },
    ],
  },
];
