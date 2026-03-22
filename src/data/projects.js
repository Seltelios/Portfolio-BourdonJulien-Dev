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
    //
    //----------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------
    {
        id: 'custom-engine',
        category: 'school', // 'school' ou 'personal'

        title: {
            fr: 'Custom Engine C++ & DirectX 12',
            en: 'Custom Engine C++ & DirectX 12',
        },

        shortDescription: {
            fr: 'Moteur de rendu 3D en C++ avec DirectX 12.',
            en: '3D rendering engine in C++ with DirectX 12.',
        },

        thumbnail: '/images/projects/custom-engine-thumb.png',

        skills: ['C++', 'DirectX 12', 'HLSL'],

        constraints: {
            fr: 'Ici tu pourras décrire les grandes contraintes du projet (temps, équipe, cahier des charges...).',
            en: 'Here you can describe the main project constraints (time, team, requirements...).',
        },

        description: {
            fr: 'Description détaillée du projet Custom Engine. Tu pourras expliquer les objectifs, les choix techniques, etc.',
            en: 'Detailed description of the Custom Engine project. You can explain goals, technical choices, etc.',
        },

        demoVideo: '/videos/custom-engine-demo.mp4', // ou null si pas de vidéo

        postMortem: {
            fr: 'Ton retour personnel sur ce projet (ce que tu as appris, ce que tu ferais différemment, etc.).',
            en: 'Your personal feedback on this project (what you learned, what you would do differently, etc.).',
        },

        links: {
            github: 'https://github.com/ton-compte/custom-engine',
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
            fr: 'Projet 3C - WishBond',
            en: '3C Project - WishBond',
        },

        shortDescription: {
            fr: 'Prototype 3C explorant différentes mécaniques de jeu d’infiltration.',
            en: '3C gameplay prototype exploring several mechanics for a stealth game.',
        },

        thumbnail: 'images/projects/Project_3C/Capture01_Lvl1_WishBond.png',

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
    //
    //----------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------

    {
        id: 'unity-multiplayer',
        category: 'personal',

        title: {
            fr: 'Jeu multijoueur Unity',
            en: 'Unity multiplayer game',
        },

        shortDescription: {
            fr: 'Prototype de jeu multijoueur au tour par tour avec Mirror.',
            en: 'Turn-based multiplayer prototype with Mirror.',
        },

        thumbnail: null,

        skills: ['Unity', 'C#', 'Mirror'],

        constraints: {
            fr: 'Prototype personnel, sans cahier des charges strict.',
            en: 'Personal prototype, without a strict requirements document.',
        },

        description: {
            fr: 'Description détaillée du prototype multijoueur : objectifs, systèmes de jeu, problèmes réseau rencontrés...',
            en: 'Detailed description of the multiplayer prototype: goals, gameplay systems, network issues...',
        },

        demoVideo: null, // pas encore de vidéo

        postMortem: {
            fr: 'Ce projet m’a aidé à mieux comprendre le réseau et les contraintes du multijoueur.',
            en: 'This project helped me better understand networking and multiplayer constraints.',
        },

        links: {
            github: '',
            itch: 'https://itch.io/', // à remplacer par ta page
            youtube: '',
        },
    },
];
