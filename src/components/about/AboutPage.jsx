import { useLanguage } from '../../context/LanguageContext.jsx';
import { pageTitles, sections } from '../../data/texts.js';
import SkillsGrid from './SkillsGrid.jsx';
import ContactButtons from './ContactButtons.jsx';

function AboutPage() {
    const { language } = useLanguage();

    const isFrench = language === 'fr';

    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-semibold text-center border-b border-slate-700 pb-2">
                {pageTitles.about[language]}
            </h1>

            <section className="bg-slate-800/60 border border-slate-700 rounded-lg p-6">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                    <div className="w-40 h-40 md:w-52 md:h-52 rounded-lg overflow-hidden border border-slate-600 bg-slate-900 flex-shrink-0">
                        <img
                            src="images/photo-profil.jpg"
                            alt={isFrench ? 'Photo de Julien Bourdon' : 'Picture of Julien Bourdon'}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="text-sm leading-relaxed space-y-3">
                        <h2 className="text-xl font-semibold text-white">
                            {isFrench ? 'Présentation' : 'Presentation'}
                        </h2>

                        <p>
                            {isFrench
                                ? "Je m'appelle Julien Bourdon. Passionné par le jeu vidéo, je me suis progressivement orienté vers la programmation avec l'objectif d'en faire mon métier. J'aime particulièrement concevoir des mécaniques de gameplay, créer des systèmes interactifs et chercher différentes façons de rendre une expérience de jeu plus intéressante."
                                : "My name is Julien Bourdon. Passionate about video games, I gradually moved toward programming with the goal of making it my career. I am especially interested in gameplay mechanics, interactive systems, and finding new ways to make a game experience more engaging."}
                        </p>

                        <p>
                            {isFrench
                                ? "Je suis davantage attiré par la logique gameplay que par le développement moteur pur, même si j'aime découvrir de nouvelles approches techniques lorsque cela me permet de mieux comprendre ou améliorer un système."
                                : "I am more interested in gameplay logic than pure engine development, although I enjoy discovering new technical approaches when they help me better understand or improve a system."}
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-lg font-semibold mb-2">
                    {sections.about.skillsTitle[language]}
                </h2>
                <SkillsGrid />
            </section>

            <section className="bg-slate-800/60 border border-slate-700 rounded-lg p-6 text-sm leading-relaxed space-y-3">
                <h2 className="text-lg font-semibold text-white">
                    {isFrench ? 'Un peu plus sur moi' : 'A little more about me'}
                </h2>

                <p>
                    {isFrench
                        ? "Je suis toujours à l'écoute des retours constructifs, car ils me permettent de progresser et d'améliorer ma manière de travailler. Je peux avancer efficacement seul sur une tâche, mais j'apprécie également le travail en équipe, notamment lors des échanges d'idées et des phases de réflexion."
                        : "I am always open to constructive feedback, as it helps me improve and refine the way I work. I can work efficiently on my own, but I also enjoy teamwork, especially during discussions and idea-sharing phases."}
                </p>

                <p>
                    {isFrench
                        ? "Je ne me considère pas encore suffisamment expérimenté pour diriger une équipe, mais je n'ai aucune retenue à proposer mes idées lors des briefings ou à participer activement à la recherche de solutions."
                        : "I do not yet consider myself experienced enough to lead a team, but I am always willing to share ideas during briefings and actively contribute to finding solutions."}
                </p>

                <p>
                    {isFrench
                        ? "En dehors du développement, je suis passionné par les jeux vidéo, notamment les jeux open world comme ARK: Survival Evolved ou Satisfactory, ainsi que par des jeux compétitifs comme League of Legends. Dofus reste également un jeu important pour moi, lié à mon enfance et à mon intérêt pour les univers en ligne."
                        : "Outside of development, I am passionate about video games, especially open-world games such as ARK: Survival Evolved or Satisfactory, as well as competitive games like League of Legends. Dofus also remains an important game for me, connected to my childhood and my interest in online worlds."}
                </p>

                <p>
                    {isFrench
                        ? "Je suis aussi amateur de mangas, manhwas et animés. J'aime également dessiner, une activité que j'ai mise de côté depuis quelque temps, mais que j'aimerais reprendre sérieusement."
                        : "I also enjoy manga, manhwa, and anime. I like drawing as well, an activity I have put aside for a while but would like to seriously return to."}
                </p>
            </section>

            <section className="bg-slate-800/60 border border-slate-700 rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-4">
                    {isFrench ? 'Parcours scolaire' : 'Education'}
                </h2>

                <div className="flex flex-col gap-3 text-sm">
                    <SchoolItem date="2026" title="Bachelor 3 (en cours)" place="Gaming Campus" />
                    <SchoolItem date="2019" title="BTS SIO SLAM" place="Ecoris" />
                    <SchoolItem date="2017" title="Prépa" place="Lycée Monge" />
                    <SchoolItem date="2016" title="Baccalauréat STI2D AC" place="Lycée Monge" />
                </div>
            </section>

            <section className="bg-slate-800/60 border border-slate-700 rounded-lg p-6 text-sm leading-relaxed space-y-3">
                <h2 className="text-lg font-semibold text-white">
                    {isFrench ? 'Mon parcours' : 'My journey'}
                </h2>

                <p>
                    {isFrench
                        ? "Après l'obtention de mon BTS SIO SLAM, j'ai été confronté à une période plus complexe liée au contexte du COVID-19 et à un marché du travail difficile pour un profil encore débutant dans le développement."
                        : "After obtaining my BTS SIO SLAM degree, I faced a more challenging period due to the COVID-19 context and a difficult job market for a junior developer profile."}
                </p>

                <p>
                    {isFrench
                        ? "Durant cette période, j'ai enchaîné plusieurs missions en intérim pendant un peu plus d'un an. Cette expérience m'a permis de développer mon autonomie, mon sens de l'adaptation et ma capacité à travailler dans différents environnements professionnels."
                        : "During this period, I worked on several temporary assignments for a little over a year. This experience helped me develop adaptability, autonomy, and the ability to work in different professional environments."}
                </p>

                <p>
                    {isFrench
                        ? "J'ai ensuite eu l'opportunité d'intégrer une entreprise de transport qui m'a accompagné pendant deux ans en finançant notamment mon permis D. Cette expérience professionnelle m'a apporté une grande rigueur, un sens des responsabilités et une meilleure gestion du travail au quotidien."
                        : "I then had the opportunity to join a transport company that supported me for two years, notably by financing my category D driving license. This professional experience strengthened my discipline, sense of responsibility, and day-to-day work management skills."}
                </p>

                <p>
                    {isFrench
                        ? (
                            <>
                                À la fin de cette expérience, j'ai fait le choix de revenir vers mon domaine de prédilection : le développement informatique, et plus particulièrement le jeu vidéo.

                                <span className="block mt-3 text-blue-300 font-semibold text-base">
                                    Aujourd'hui, je souhaite construire mon avenir professionnel dans ce secteur qui me passionne depuis toujours.
                                </span>
                            </>
                        )
                        : (
                            <>
                                At the end of this experience, I decided to return to my original field of interest: software development, and more specifically video games.

                                <span className="block mt-3 text-blue-300 font-semibold text-base">
                                    Today, I aim to build my professional future in a field that has always been a true passion of mine.
                                </span>
                            </>
                        )}
                </p>
            </section>

            <div className="flex justify-center">
                <a
                    href="documents/CV_Julien_Bourdon.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-md bg-blue-600 hover:bg-blue-500 transition-colors border border-blue-400 text-sm font-semibold"
                >
                    {isFrench ? 'Voir mon CV' : 'View my resume'}
                </a>
            </div>

            <section>
                <h2 className="font-semibold mb-2">
                    {sections.about.contactTitle[language]}
                </h2>
                <ContactButtons />
            </section>
        </div>
    );
}

function SchoolItem({ date, title, place }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-1 md:gap-4 border border-slate-700 rounded-md p-3 bg-slate-900/40">
            <p className="text-blue-300 font-semibold">{date}</p>
            <p>
                <span className="font-semibold text-white">{title}</span>
                <span className="text-slate-300"> — {place}</span>
            </p>
        </div>
    );
}

export default AboutPage;