// src/components/projects/ProjectModal.jsx

import { useLanguage } from '../../context/LanguageContext.jsx';

function ProjectModal({ project, onClose }) {
    const { language } = useLanguage();

    const title = project.title[language];
    const description = project.description?.[language];
    const constraints = project.constraints?.[language];
    const postMortem = project.postMortem?.[language];

    const hasSkills = project.skills && project.skills.length > 0;
    const hasConstraints = Boolean(constraints && constraints.trim().length > 0);
    const hasDescription = Boolean(description && description.trim().length > 0);
    const hasDemoVideo = Boolean(project.demoVideo?.url);
    const hasPostMortem = Boolean(postMortem && postMortem.trim().length > 0);

    const { github, itch, youtube } = project.links || {};
    const hasLinks = Boolean(github || itch || youtube);

    const labels = {
        skills: language === 'fr' ? 'Compétences / Outils' : 'Skills / Tools',
        requirements: language === 'fr' ? 'Cahier des charges' : 'Requirements',
        description: language === 'fr' ? 'Description' : 'Description',
        demo: language === 'fr' ? 'Vidéo démo' : 'Demo video',
        postMortem:
            language === 'fr'
                ? 'Post-mortem / Retour personnel'
                : 'Post-mortem / Personal feedback',
        links: language === 'fr' ? 'Liens' : 'Links',
        github: 'GitHub',
        itch: 'Itch.io',
        youtube: 'YouTube',
        close: language === 'fr' ? 'Fermer' : 'Close',
    };

    function GetYoutubeEmbedUrl(vUrl) {
        if (!vUrl) {
            return '';
        }

        if (vUrl.includes('youtube.com/watch?v=')) {
            const videoId = vUrl.split('v=')[1]?.split('&')[0];
            return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
        }

        if (vUrl.includes('youtu.be/')) {
            const videoId = vUrl.split('youtu.be/')[1]?.split('?')[0];
            return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
        }

        return '';
    }

    return (
        <div
            className="fixed inset-0 z-40 bg-black/60 flex items-center justify-center"
            aria-modal="true"
            role="dialog"
        >
            <div className="relative max-w-4xl w-full max-h-[90vh] bg-slate-900 border border-slate-600 rounded-lg shadow-2xl overflow-y-auto">
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-2 right-2 z-10 h-8 w-8 rounded-full bg-slate-800 border border-slate-600
                     flex items-center justify-center text-slate-200 hover:bg-slate-700 hover:border-sky-400 transition-colors"
                    aria-label={labels.close}
                >
                    ✕
                </button>

                <div className="px-5 py-4 border-b border-slate-700">
                    <h2 className="text-xl font-semibold text-center">
                        {title}
                    </h2>
                </div>

                <div className="px-5 py-4 space-y-6">
                    {project.thumbnail && (
                        <div className="w-full">
                            <img
                                src={project.thumbnail}
                                alt={title}
                                className="w-full max-h-64 object-cover rounded-md border border-slate-700"
                            />
                        </div>
                    )}

                    {hasSkills && (
                        <section>
                            <h3 className="text-sm font-semibold mb-2">
                                {labels.skills}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 rounded-full border border-slate-600 bg-slate-800 text-xs"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </section>
                    )}

                    {hasConstraints && (
                        <section>
                            <details className="border border-slate-700 rounded-md bg-slate-900">
                                <summary className="cursor-pointer px-3 py-2 text-sm font-semibold select-none">
                                    {labels.requirements}
                                </summary>
                                <div className="border-t border-slate-700 px-3 py-2 text-sm text-slate-200 whitespace-pre-line">
                                    {constraints}
                                </div>
                            </details>
                        </section>
                    )}

                    {hasDescription && (
                        <section>
                            <h3 className="text-sm font-semibold mb-2">
                                {labels.description}
                            </h3>
                            <p className="text-sm text-slate-200 whitespace-pre-line">
                                {description}
                            </p>
                        </section>
                    )}

                    {hasDemoVideo && (
                        <section>
                            <h3 className="text-sm font-semibold mb-2">
                                {labels.demo}
                            </h3>

                            {project.demoVideo.type === 'youtube' && (
                                <div className="w-full aspect-video rounded-md overflow-hidden border border-slate-700">
                                    <iframe
                                        className="w-full h-full"
                                        src={GetYoutubeEmbedUrl(project.demoVideo.url)}
                                        title={title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            )}
                        </section>
                    )}

                    {hasPostMortem && (
                        <section>
                            <h3 className="text-sm font-semibold mb-2">
                                {labels.postMortem}
                            </h3>
                            <p className="text-sm text-slate-200 whitespace-pre-line">
                                {postMortem}
                            </p>
                        </section>
                    )}

                    {hasLinks && (
                        <section>
                            <h3 className="text-sm font-semibold mb-2">
                                {labels.links}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {github && (
                                    <a
                                        href={github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-3 py-1 rounded-md border border-slate-600 bg-slate-800 text-xs hover:border-sky-400"
                                    >
                                        {labels.github}
                                    </a>
                                )}
                                {itch && (
                                    <a
                                        href={itch}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-3 py-1 rounded-md border border-slate-600 bg-slate-800 text-xs hover:border-sky-400"
                                    >
                                        {labels.itch}
                                    </a>
                                )}
                                {youtube && (
                                    <a
                                        href={youtube}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-3 py-1 rounded-md border border-slate-600 bg-slate-800 text-xs hover:border-sky-400"
                                    >
                                        {labels.youtube}
                                    </a>
                                )}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectModal;