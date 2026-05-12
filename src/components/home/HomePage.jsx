import { useLanguage } from '../../context/LanguageContext.jsx';
import { pageTitles, uiTexts } from '../../data/texts.js';

function HomePage() {
    const { language } = useLanguage();

    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-semibold text-center border-b border-slate-700 pb-2">
                {pageTitles.home[language]}
            </h1>

            <div className="home-intro-container">
                <p className="home-intro-text">
                    {uiTexts.homeIntro[language]}
                </p>
            </div>
        </div>
    );
}

export default HomePage;
