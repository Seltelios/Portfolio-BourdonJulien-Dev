import { useLanguage } from '../../context/LanguageContext.jsx';
import { pageTitles } from '../../data/texts.js';

function Header({ currentPage, onChangePage }) {
    const { language, setLanguage } = useLanguage();

    const navItems = [
        { id: 'home', label: pageTitles.home[language] },
        { id: 'about', label: pageTitles.about[language] },
        { id: 'projects', label: pageTitles.projects[language] },
    ];

    return (
        <header className="w-full bg-slate-800/80 border-b border-slate-700">
            <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-2">
                {/* Nom à gauche */}
                <div className="font-semibold text-lg tracking-wide">
                    BOURDON Julien
                </div>

                {/* Navigation centrale */}
                <nav className="flex gap-2">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => onChangePage(item.id)}
                            className={`px-4 py-1 border text-sm
                ${currentPage === item.id
                                ? 'bg-slate-100 text-slate-900 border-slate-400'
                                : 'bg-slate-700 text-slate-100 border-slate-600 hover:bg-slate-600'
                            }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>

                {/* Boutons FR / EN à droite */}
                <div className="flex gap-1">
                    <button
                        type="button"
                        onClick={() => setLanguage('fr')}
                        className={`px-2 py-1 text-xs border rounded
              ${language === 'fr'
                            ? 'bg-sky-500 text-slate-900 border-sky-300'
                            : 'bg-slate-700 text-sky-100 border-slate-600 hover:bg-slate-600'
                        }`}
                    >
                        FR
                    </button>
                    <button
                        type="button"
                        onClick={() => setLanguage('en')}
                        className={`px-2 py-1 text-xs border rounded
              ${language === 'en'
                            ? 'bg-sky-500 text-slate-900 border-sky-300'
                            : 'bg-slate-700 text-sky-100 border-slate-600 hover:bg-slate-600'
                        }`}
                    >
                        EN
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
