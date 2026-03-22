import { useLanguage } from '../../context/LanguageContext.jsx';
import { pageTitles, sections } from '../../data/texts.js';
import SkillsGrid from './SkillsGrid.jsx';
import ContactButtons from './ContactButtons.jsx';

function AboutPage() {
    const { language } = useLanguage();

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold text-center border-b border-slate-700 pb-2">
                {pageTitles.about[language]}
            </h1>

            {/* Texte principal */}
            <section className="bg-slate-800/60 border border-slate-700 rounded-md p-4 text-sm space-y-4">
                <div>
                    <h2 className="font-semibold mb-1">
                        {sections.about.presentationTitle[language]}
                    </h2>
                    <p>
                        {language === 'fr'
                            ? 'Texte de présentation personnelle. Tu pourras le remplir plus tard.'
                            : 'Personal presentation text. You will fill it in later.'}
                    </p>
                </div>

                <div>
                    <h2 className="font-semibold mb-1">
                        {sections.about.parcoursTitle[language]}
                    </h2>
                    <p>
                        {language === 'fr'
                            ? 'Liste ou paragraphes sur ton parcours, du plus récent au plus ancien.'
                            : 'List or paragraphs about your background, from most recent to oldest.'}
                    </p>
                </div>

                <div>
                    <h2 className="font-semibold mb-1">
                        {sections.about.diplomasTitle[language]}
                    </h2>
                    <p>
                        {language === 'fr'
                            ? 'Liste de tes diplômes, du plus récent au plus ancien.'
                            : 'List of your degrees, from most recent to oldest.'}
                    </p>
                </div>
            </section>

            {/* Compétences */}
            <section>
                <h2 className="font-semibold mb-2">
                    {sections.about.skillsTitle[language]}
                </h2>
                <SkillsGrid />
            </section>

            {/* Contact */}
            <section>
                <h2 className="font-semibold mb-2">
                    {sections.about.contactTitle[language]}
                </h2>
                <ContactButtons />
            </section>
        </div>
    );
}

export default AboutPage;
