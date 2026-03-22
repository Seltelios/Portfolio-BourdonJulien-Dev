import { useLanguage } from '../../context/LanguageContext.jsx';

function ProjectCard({ project, onClick }) {
    const { language } = useLanguage();

    const title = project.title[language];
    const shortDescription = project.shortDescription[language];

    const hasThumbnail = Boolean(project.thumbnail);

    return (
        <button
            type="button"
            onClick={onClick}
            className="w-full text-left bg-slate-900 border border-slate-700 rounded-md overflow-hidden
                 hover:border-sky-400 hover:shadow-lg transition-all duration-150 flex flex-col"
        >
            {/* Barre de titre en haut */}
            <div className="px-3 py-2 bg-slate-900/90 border-b border-slate-700">
                <h3 className="font-semibold text-sm">
                    {title}
                </h3>
            </div>

            {/* Image / placeholder sous le titre */}
            {hasThumbnail ? (
                <div className="h-40 w-full overflow-hidden">
                    <img
                        src={project.thumbnail}
                        alt={title}
                        className="h-full w-full object-cover"
                    />
                </div>
            ) : (
                <div className="h-32 w-full flex items-center justify-center bg-slate-800 text-slate-400 text-xs">
                    {language === 'fr' ? 'Aucune image pour le moment' : 'No image yet'}
                </div>
            )}

            {/* Contenu bas : skills + description rapide */}
            <div className="p-3 flex flex-col gap-2 flex-1">
                {/* Skills principaux en petites bulles */}
                {project.skills && project.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill) => (
                            <span
                                key={skill}
                                className="px-2 py-0.5 rounded-full border border-slate-600 bg-slate-800 text-[0.7rem]"
                            >
                {skill}
              </span>
                        ))}
                    </div>
                )}

                {/* Description rapide */}
                <p className="text-xs text-slate-300">
                    {shortDescription}
                </p>
            </div>
        </button>
    );
}

export default ProjectCard;
