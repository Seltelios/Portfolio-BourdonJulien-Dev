// src/data/projects.js

// Chaque projet peut remplir ou laisser vide certains champs :
// - thumbnail             : image de la carte (optionnel)
// - skills                : tableau de strings (affichées en bulles)
// - constraints           : texte long du cahier des charges (fr/en), optionnel
// - description           : texte long de description (fr/en)
// - demoVideo             : chemin vers un .mp4 (optionnel)
// - postMortem            : retour perso / post-mortem (fr/en, optionnel)
// - links.github / itch / youtube : urls optionnelles

export const projects = [

    //----------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------
    // Projet Larron
    //----------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------

    {
        id: 'unity-larron',
        category: 'school',

        title: {
            fr: 'Projet Larron - Gaming Award 2026',
            en: 'Larron Project - Gaming Award 2026',
        },

        shortDescription: {
            fr: 'Jeu mobile coopératif réalisé pour les GamingCampus Awards 2026.',
            en: 'Mobile game project created for the GamingCampus Awards 2026.',
        },

        thumbnail: 'images/projects/Project_Larron/Ecran_Chargement_Larron.png',

        skills: ['Unity', 'C#'],

        constraints: {
            fr:
                'Objectifs de ce projet :' +
                '\n - Réaliser un jeu mobile en équipe multidisciplinaire.' +
                '\n - Collaborer entre les pôles Arts, Tech, Business et TV.' +
                '\n - Présenter une démo jouable devant un jury lors des GamingCampus Awards 2026.' +
                '\n - Développer un prototype complet en seulement 2 mois.',
            en:
                'Goals for this project:' +
                '\n - Create a mobile game within a multidisciplinary team.' +
                '\n - Collaborate between Arts, Tech, Business and TV departments.' +
                '\n - Present a playable demo to a jury during the GamingCampus Awards 2026.' +
                '\n - Develop a complete prototype within only 2 months.',
        },

        description: {
            fr:
                'Déroulement du projet :' +
                '\n - Projet réalisé en équipe multi-pôles.' +
                '\n - Durée : 2 mois.' +
                '\n - Première Place aux GamingCampus Awards 2026.' +
                '\n\nDans Larron, le joueur incarne un raton-laveur transporté dans un monde médiéval fantastique.' +
                '\n Explorez une ville pleine de vie, semez le chaos parmi les villageois et retrouvez l’artefact permettant de rentrer chez vous.',
            en:
                'Project overview:' +
                '\n - Project developed with a multidisciplinary team.' +
                '\n - Duration: 2 months.' +
                '\n - First Place winner at the GamingCampus Awards 2026.' +
                '\n\nIn Larron, players control a raccoon suddenly transported into a medieval fantasy world.' +
                '\n Explore the city, drive villagers crazy, and find the artifact that will allow you to return home.',
        },

        demoVideo: {
            type: 'youtube',
            url: 'https://youtu.be/N9N8BV0NJQI',
        },

        postMortem: {
            fr:
                '- Enfin un projet s’étalant sur plusieurs mois, permettant une vraie phase de production et d’itération.' +
                '\n - Ce projet a été une excellente opportunité de collaborer avec les différents pôles du GamingCampus Lyon et de découvrir une organisation proche d’un véritable studio.' +
                '\n - Le développement du jeu a nécessité une forte communication entre les équipes afin de produire une démo cohérente et aboutie.' +
                '\n - J’ai particulièrement compris l’importance d’écrire du code pensé pour les autres développeurs et pour les futurs systèmes du projet.' +
                '\n - Sur ce projet, j’étais principalement chargé du système d’interactions avec les objets : objets transportables, jetables, destructibles, ainsi que leurs effets audio et VFX associés.' +
                '\n\nSuper expérience humaine et technique, portée par une excellente équipe et un lead technique très inspirant : Cedric Bernard.',
            en:
                '- Finally, a project lasting several months, allowing for real production and iteration phases.' +
                '\n - This project was a great opportunity to collaborate with all GamingCampus Lyon departments and experience a workflow close to a real game studio.' +
                '\n - Developing the game required strong communication between teams to deliver a coherent and polished demo.' +
                '\n - I particularly learned the importance of writing code designed for other developers and future gameplay systems.' +
                '\n - My main responsibility on the project was the object interaction system: portable, throwable and breakable objects, along with audio and VFX feedback.' +
                '\n\nA fantastic human and technical experience, supported by an amazing team and an inspiring tech lead: Cedric Bernard.',
        },

        links: {
            github: '',
            itch: '',
            youtube: '',
        },
    },






    //----------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------
    // Unity - Sauvegarde
    //----------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------

    {
        id: 'unity-save-system',
        category: 'school',

        title: {
            fr: 'Projet Unity - Système de Sauvegarde : SaveRPG',
            en: 'Unity Project - Save System : SaveRPG',
        },

        shortDescription: {
            fr: 'Prototype de système de sauvegarde local et en ligne avec Firebase.',
            en: 'Prototype of a local and online save system using Firebase.',
        },

        thumbnail: 'images/projects/Project_SaveRPG/Titre_SaveRPG.png',

        skills: ['Unity', 'C#', 'Firebase', 'JSON'],

        constraints: {
            fr:
                'Objectifs de ce projet :' +
                '\n - Mise en place d’un système de sauvegarde locale.' +
                '\n - Mise en place d’un système de sauvegarde en ligne via Firebase.' +
                '\n - Gestion de la sérialisation des données (JSON).',
            en:
                'Goals for this project:' +
                '\n - Implement a local save system.' +
                '\n - Implement an online save system using Firebase.' +
                '\n - Handle data serialization (JSON).',
        },

        description: {
            fr:
                'Déroulement du projet :' +
                '\n - Équipe de 2 personnes.' +
                '\n - Durée : 1 semaine.' +
                '\n - Développement d’un prototype permettant de sauvegarder et charger des données de jeu en local et à distance.',
            en:
                'Project overview:' +
                '\n - Team of 2 students.' +
                '\n - Duration: 1 week.' +
                '\n - Development of a prototype to save and load game data locally and remotely.',
        },

        demoVideo: {
            type: 'youtube',
            url: 'https://www.youtube.com/watch?v=oVWBWsnVP0k&list=PL5xyhUz1OMlvid6Enq-WXIfOIJ6pZbY3O&index=7',
        },

        postMortem: {
            fr:
                '- La mise en place de la communication entre Unity et Firebase a été l’un des principaux défis du projet.' +
                '\n - Nous avons rencontré des difficultés liées à la configuration et à l’authentification côté Firebase.' +
                '\n - La gestion des données (sérialisation/désérialisation JSON) a nécessité une structuration rigoureuse pour éviter les erreurs.' +
                '\n\nCe projet m’a permis de mieux comprendre la gestion de données dans un jeu, ' +
                'ainsi que l’intégration de services externes comme Firebase dans Unity.',
            en:
                '- Setting up communication between Unity and Firebase was one of the main challenges.' +
                '\n - We faced issues related to Firebase configuration and authentication.' +
                '\n - Data handling (JSON serialization/deserialization) required careful structuring to avoid errors.' +
                '\n\nThis project helped me better understand data management in games, ' +
                'as well as integrating external services like Firebase into Unity.',
        },

        links: {
            github: '',
            itch: '',
            youtube: '',
        },
    },

    //----------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------
    // Unity - Projet UI UX
    //----------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------

    {
        id: 'unity-ui-ux',
        category: 'school',

        title: {
            fr: 'Projet Unity - UI / UX : SpatiaFactory',
            en: 'Unity Project - UI / UX : SpatiaFactory',
        },

        shortDescription: {
            fr: 'Prototype de jeu basé uniquement sur une interface avec des feedbacks visuels.',
            en: 'Prototype of a game entirely based on UI with visual feedback systems.',
        },

        thumbnail: 'images/projects/Project_SpatiaFactory/Titre_SpatiaFactory.png',

        skills: ['Unity', 'C#', 'UI/UX'],

        constraints: {
            fr:
                'Objectifs de ce projet :' +
                '\n - Concevoir une expérience jouable uniquement via interface.' +
                '\n - Ne pas utiliser de gameplay classique (pas de personnage, monde 3D, etc.).' +
                '\n - Mettre en place des feedbacks visuels clairs et réactifs.',
            en:
                'Goals for this project:' +
                '\n - Design a fully interface-based gameplay experience.' +
                '\n - No traditional gameplay elements (no character, no 3D world, etc.).' +
                '\n - Implement clear and responsive visual feedback.',
        },

        description: {
            fr:
                'Déroulement du projet :' +
                '\n - Équipe de 2 personnes.' +
                '\n - Durée : 1 semaine.' +
                '\n - Création d’un prototype centré sur l’interaction utilisateur et la lisibilité des informations.',
            en:
                'Project overview:' +
                '\n - Team of 2 students.' +
                '\n - Duration: 1 week.' +
                '\n - Creation of a prototype focused on user interaction and information clarity.',
        },

        demoVideo: {
            type: 'youtube',
            url: 'https://www.youtube.com/watch?v=TEjrCM4BcZg&list=PL5xyhUz1OMlvid6Enq-WXIfOIJ6pZbY3O&index=8',
        },

        postMortem: {
            fr:
                '- Concevoir un jeu basé uniquement sur de l’interface a été un défi intéressant, car tout repose sur la clarté visuelle et la compréhension immédiate du joueur.' +
                '\n - Nous avons dû travailler particulièrement les feedbacks visuels pour compenser l’absence de monde ou de personnage.' +
                '\n - Trouver le bon équilibre entre lisibilité et surcharge visuelle a demandé plusieurs ajustements.' +
                '\n - Ce projet m’a permis de mieux comprendre l’importance de l’UX dans le game design, notamment dans la transmission d’informations au joueur.' +
                '\n\nJ’ai également pu approfondir l’utilisation des systèmes UI de Unity et la gestion des interactions utilisateur.',
            en:
                '- Designing a game entirely based on UI was an interesting challenge, as everything relies on visual clarity and immediate player understanding.' +
                '\n - We had to focus heavily on visual feedback to compensate for the absence of a world or character.' +
                '\n - Finding the right balance between clarity and visual overload required multiple iterations.' +
                '\n - This project helped me better understand the importance of UX in game design, especially in conveying information to the player.' +
                '\n\nI also improved my understanding of Unity’s UI systems and user interaction handling.',
        },

        links: {
            github: '',
            itch: '',
            youtube: '',
        },
    },




    //----------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------
    // PROJET 3C
    //----------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------
    {
        id: 'unity-3c',
        category: 'school',

        title: {
            fr: 'Projet Unity - 3C - WishBond',
            en: 'Unity Project - 3C - WishBond',
        },

        shortDescription: {
            fr: 'Prototype 3C explorant différentes mécaniques de jeu d’infiltration.',
            en: '3C gameplay prototype exploring several mechanics for a stealth game.',
        },

        thumbnail: 'images/projects/Project_3C/Titre_WishBond.png',

        skills: ['Unity', 'C#', 'NewInputController', 'NavMesh'],

        constraints: {
            fr:
                'Objectifs de ce projet :' +
                '\n - Caméra en vue top-down.' +
                '\n - Contrôles clavier/souris et manette.' +
                '\n - Feedbacks sonores et visuels.' +
                '\n - Interactions du joueur avec plusieurs éléments du décor.' +
                '\n - Mise en place d’une IA basique pour les ennemis.',
            en:
                'Goals for this project:' +
                '\n - Top-down camera.' +
                '\n - Keyboard/mouse and gamepad controls.' +
                '\n - Audio and visual feedback.' +
                '\n - Player interactions with several environment elements.' +
                '\n - Implementation of simple enemy AI.',
        },

        description: {
            fr:
                'Déroulement du projet :' +
                '\n - Équipe de 2 personnes.' +
                '\n - Durée : 1 semaine.',
            en:
                'Project overview:' +
                '\n - Team of 2 students.' +
                '\n - Duration: 1 week.',
        },

        demoVideo: {
            type: 'youtube',
            url: 'https://www.youtube.com/watch?v=jncprZIenkM&list=PL5xyhUz1OMlvid6Enq-WXIfOIJ6pZbY3O&index=5',
        },

        postMortem: {
            fr:
                '- Nous avons généré trop d’idées au cours du projet, ce qui a parfois dilué notre focus et brouillé l’ordre de nos priorités.' +
                '\n - Nous avons rencontré des difficultés lors de la création d’un shader 3D permettant de visualiser clairement le champ de vision des caméras de sécurité et leur zone de détection.' +
                '\n - Le comportement du garde a été complexe à rendre à la fois fluide et crédible, notamment au niveau des déplacements et des transitions.' +
                '\n - Ce projet s’est toutefois révélé très formateur : il nous a permis d’approfondir notre maîtrise d’Unity (nouveau système d’inputs, VFX, RenderTexture, structuration d’une entité, NavMesh) et de mieux appréhender le prototypage 3C.' +
                '\n\nÀ titre plus personnel, ce projet m’a aidé à mieux comprendre les composants pouvant être attachés au joueur, ' +
                'ainsi qu’à concevoir un système complet de caméras de surveillance reliées à un poste de contrôle.',
            en:
                '- We had far too many ideas during the project, which tended to scatter us and made it harder to set clear priorities.' +
                '\n - We ran into issues when creating a 3D shader to visualize the security camera view, so the player could clearly see the detection area to avoid.' +
                '\n - It was difficult to make the guard’s movement feel both smooth and believable.' +
                '\n - This project was very interesting and helped us improve in several areas and feel more comfortable in Unity (new input system, VFX, RenderTexture, entity structure, NavMesh), as well as better understand 3C prototyping.' +
                '\n\nThis project also helped me better understand the different components that can be attached to the player, ' +
                'and how to set up a full surveillance camera system connected to a control station.',
        },

        links: {
            github: 'https://github.com/Quest-Education-Group/lyo-3g-gameboy-s2p1-01',
            itch: '',
            youtube: '',
        },
    },


    //----------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------
    //   Unreal Engine - Physic Avanced
    //----------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------

    {
        id: 'unreal-funniestbirds',
        category: 'school',

        title: {
            fr: 'Projet Unreal Engine - Funniest Birds',
            en: 'Unreal Engine Project - Funniest Birds',
        },

        shortDescription: {
            fr: 'Prototype de physique avancée inspiré d’Angry Birds sous Unreal Engine.',
            en: 'Advanced physics prototype inspired by Angry Birds using Unreal Engine.',
        },

        thumbnail: 'images/projects/Project_FunniestBirds/Titre_FunniestBirds.png',

        skills: ['Unreal Engine', 'C++', 'Blueprint', 'Physics', 'Fracture'],

        constraints: {
            fr:
                'Objectifs de ce projet :' +
                '\n - Minimum 3 niveaux jouables.' +
                '\n - Plusieurs types de projectiles.' +
                '\n - Plusieurs types de cibles/destructibles.' +
                '\n - Système de score.' +
                '\n - Utilisation du système de Fracture.' +
                '\n - Utilisation des Physics Materials.',
            en:
                'Goals for this project:' +
                '\n - At least 3 playable levels.' +
                '\n - Multiple types of projectiles.' +
                '\n - Multiple types of destructible targets.' +
                '\n - Scoring system.' +
                '\n - Use of the Fracture system.' +
                '\n - Use of Physics Materials.',
        },

        description: {
            fr:
                'Déroulement du projet :' +
                '\n - Équipe de 2 personnes.' +
                '\n - Durée : 1 semaines.' +
                '\n - Développement d’un prototype centré sur les interactions physiques et la destruction dynamique.',
            en:
                'Project overview:' +
                '\n - Team of 2 students.' +
                '\n - Duration: 2 weeks.' +
                '\n - Development of a prototype focused on physics interactions and dynamic destruction.',
        },

        demoVideo: {
            type: 'youtube',
            url: 'https://www.youtube.com/watch?v=-XkaKgEjHPA&list=PL5xyhUz1OMlvid6Enq-WXIfOIJ6pZbY3O&index=6',
        },

        postMortem: {
            fr:
                '- La gestion des interactions physiques a été un vrai défi, notamment pour obtenir des réactions cohérentes et satisfaisantes lors des collisions.' +
                '\n - L’utilisation du système de Fracture a demandé plusieurs itérations pour trouver un bon équilibre entre performance et lisibilité visuelle.' +
                '\n - Nous avons dû ajuster les Physics Materials pour obtenir des comportements variés selon les objets (rebond, friction, masse).' +
                '\n - La conception des niveaux a nécessité de nombreux tests afin de garantir un gameplay à la fois fun et compréhensible.' +
                '\n\nCe projet m’a permis de mieux comprendre le moteur physique d’Unreal Engine, ' +
                'ainsi que l’intégration entre Blueprint pour créer des mécaniques interactives.',
            en:
                '- Handling physics interactions was a real challenge, especially to achieve satisfying and consistent collision responses.' +
                '\n - Using the Fracture system required several iterations to balance performance and visual clarity.' +
                '\n - We had to fine-tune Physics Materials to create varied object behaviors (bounce, friction, mass).' +
                '\n - Level design required multiple playtests to ensure the gameplay was both fun and understandable.' +
                '\n\nThis project helped me better understand Unreal Engine’s physics system, ' +
                'as well as the integration between Blueprint to build interactive mechanics.',
        },

        links: {
            github: '', // souvent vide pour Unreal
            itch: '',
            youtube: '',
        },
    },


    //----------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------
    // Projet [ENARIA]
    //----------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------

    {
        id: 'unity-enaria',
        category: 'school',

        title: {
            fr: 'Projet [ENARIA]',
            en: '[ENARIA] Project',
        },

        shortDescription: {
            fr: 'Démo de jeu Unity inspirée des mécaniques du MMORPG Dofus.',
            en: 'Unity game demo inspired by mechanics from the MMORPG Dofus.',
        },

        thumbnail: 'images/projects/Project_ENARIA/Titre_ENARIA.png',

        skills: ['Unity', 'C#'],

        constraints: {
            fr:
                'Objectifs de ce projet :' +
                '\n - Créer une démo de jeu complète.' +
                '\n - Travailler en équipe réduite autour d’un projet commun.' +
                '\n - Expérimenter plusieurs systèmes inspirés du MMORPG Dofus.' +
                '\n - Réaliser un projet remplaçant le stage de 2ème année.',
            en:
                'Goals for this project:' +
                '\n - Create a complete game demo.' +
                '\n - Work within a small team around a shared project.' +
                '\n - Experiment with several systems inspired by the MMORPG Dofus.' +
                '\n - Develop a project replacing the second-year internship.',
        },

        description: {
            fr:
                'Déroulement du projet :' +
                '\n - Création d’un GStudio dans le cadre du remplacement du stage de 2ème année.' +
                '\n - Équipe de moins de 10 étudiants.' +
                '\n - Durée : 2 mois.' +
                '\n\n [ENARIA] est un projet ambitieux inspiré des mécaniques du MMORPG Dofus.' +
                '\n L’objectif était de nous challenger techniquement en concevant plusieurs systèmes de jeu : combat au tour par tour, dialogues avec PNJ, système de quêtes, métiers, inventaire et boutique.',
            en:
                'Project overview:' +
                '\n - Creation of a GStudio project as a replacement for the second-year internship.' +
                '\n - Team of fewer than 10 students.' +
                '\n - Duration: 2 months.' +
                '\n\n [ENARIA] is an ambitious project inspired by mechanics from the MMORPG Dofus.' +
                '\n The goal was to challenge ourselves technically by designing several gameplay systems: turn-based combat, NPC dialogues, quest system, professions, inventory and shop systems.',
        },

        demoVideo: {
            type: 'youtube',
            url: 'https://youtu.be/wMOJeRAtqD4',
        },

        postMortem: {
            fr:
                '- [ENARIA] était un projet ambitieux pour une équipe de 2ème année, avec de nombreux systèmes à concevoir en parallèle.' +
                '\n - Ce projet a mis en lumière l’importance d’une bonne communication entre les différents pôles dans la conception d’un jeu vidéo.' +
                '\n - Il m’a également permis de prendre conscience des responsabilités liées à la direction d’une équipe, notamment lorsqu’il faut à la fois organiser le travail collectif et assurer sa propre partie de programmation.' +
                '\n - Cette expérience m’a montré que je manquais encore de recul, d’expérience et de méthodologie pour encadrer efficacement une équipe sur un projet aussi large.' +
                '\n\nMalgré les difficultés, [ENARIA] a été une très bonne expérience. Ce projet m’a permis d’identifier mes lacunes, de mieux comprendre ce qu’il me manquait pour mener un projet dans de bonnes conditions, et de progresser autant techniquement qu’humainement.',
            en:
                '- [ENARIA] was an ambitious project for a second-year team, with many systems to design in parallel.' +
                '\n - This project highlighted the importance of strong communication between departments when creating a video game.' +
                '\n - It also helped me understand the responsibilities involved in leading a team, especially when trying to both organize the group’s work and handle my own programming tasks.' +
                '\n - This experience showed me that I still lacked the perspective, experience and methodology needed to efficiently lead a team on such a large project.' +
                '\n\nDespite the difficulties, [ENARIA] was a very valuable experience. It helped me identify my weaknesses, understand what I was missing to manage a project properly, and improve both technically and personally.',
        },

        links: {
            github: '',
            itch: '',
            youtube: '',
        },
    },



    //----------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------
    //
    //----------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------

//    {
//        id: 'unity-multiplayer',
//        category: 'personal',
//
//        title: {
//            fr: 'Jeu multijoueur Unity',
//            en: 'Unity multiplayer game',
//        },
//
//        shortDescription: {
//            fr: 'Prototype de jeu multijoueur au tour par tour avec Mirror.',
//            en: 'Turn-based multiplayer prototype with Mirror.',
//        },
//
//        thumbnail: null,
//
//        skills: ['Unity', 'C#', 'Mirror'],
//
//        constraints: {
//            fr: 'Prototype personnel, sans cahier des charges strict.',
//            en: 'Personal prototype, without a strict requirements document.',
//        },
//
//        description: {
//            fr: 'Description détaillée du prototype multijoueur : objectifs, systèmes de jeu, problèmes réseau rencontrés...',
//            en: 'Detailed description of the multiplayer prototype: goals, gameplay systems, network issues...',
//        },
//
//        demoVideo: null, // pas encore de vidéo
//
//        postMortem: {
//            fr: 'Ce projet m’a aidé à mieux comprendre le réseau et les contraintes du multijoueur.',
//            en: 'This project helped me better understand networking and multiplayer constraints.',
//        },
//
//        links: {
//            github: '',
//            itch: 'https://itch.io/', // à remplacer par ta page
//            youtube: '',
//        },
//    },
];
