import { skills } from '../../data/skills.js';
import { useLanguage } from '../../context/LanguageContext.jsx';

function SkillsGrid() {
    const { language } = useLanguage();

    return (
        <div className="bg-slate-800/60 border border-slate-700 rounded-md p-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {skills.map((skill) => (
                    <div
                        key={skill.id}
                        className="bg-slate-900 border border-slate-700 rounded-md px-3 py-2 text-sm
                       shadow-sm hover:shadow-md transition-shadow
                       hover:border-sky-400 cursor-default"
                    >
            <span className="font-medium">
              {skill.label[language]}
            </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SkillsGrid;
