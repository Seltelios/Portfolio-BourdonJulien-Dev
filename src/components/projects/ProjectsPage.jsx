// src/components/projects/ProjectsPage.jsx

import { useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext.jsx';
import { pageTitles, sections } from '../../data/texts.js';
import { projects } from '../../data/projects.js';
import ProjectCard from './ProjectCard.jsx';
import ProjectModal from './ProjectModal.jsx';

function ProjectsPage() {
    const { language } = useLanguage();

    const schoolProjects = projects.filter((p) => p.category === 'school');
    const personalProjects = projects.filter((p) => p.category === 'personal');

    const [selectedProject, setSelectedProject] = useState(null);
    const [activeSection, setActiveSection] = useState('school'); // pour colorer les boutons

    const schoolRef = useRef(null);
    const personalRef = useRef(null);

    const t = sections.projects;

    const scrollToSection = (section) => {
        setActiveSection(section);
        const ref = section === 'school' ? schoolRef : personalRef;
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="flex flex-col gap-4">
            {/* Titre page */}
            <h1 className="text-2xl font-semibold text-center border-b border-slate-700 pb-2">
                {pageTitles.projects[language]}
            </h1>

            {/* Boutons Projet scolaire / Projet perso (scroll) */}
            <div className="flex gap-2">
                <button
                    type="button"
                    onClick={() => scrollToSection('school')}
                    className={`px-4 py-1 text-sm rounded-md border
            ${activeSection === 'school'
                        ? 'bg-slate-100 text-slate-900 border-slate-400'
                        : 'bg-slate-800 text-slate-100 border-slate-700 hover:bg-slate-700'
                    }`}
                >
                    {t.schoolTab[language]}
                </button>
                <button
                    type="button"
                    onClick={() => scrollToSection('personal')}
                    className={`px-4 py-1 text-sm rounded-md border
            ${activeSection === 'personal'
                        ? 'bg-slate-100 text-slate-900 border-slate-400'
                        : 'bg-slate-800 text-slate-100 border-slate-700 hover:bg-slate-700'
                    }`}
                >
                    {t.personalTab[language]}
                </button>
            </div>

            {/* Section projets scolaires */}
            <section
                ref={schoolRef}
                className="bg-slate-800/60 border border-slate-700 rounded-md p-4 text-sm space-y-3"
            >
                <h2 className="font-semibold mb-1">
                    {t.schoolTitle[language]}
                </h2>

                {schoolProjects.length === 0 ? (
                    <p className="text-slate-300">
                        {language === 'fr'
                            ? 'Pas encore de projets scolaires renseignés.'
                            : 'No school projects yet.'}
                    </p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                        {schoolProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onClick={() => setSelectedProject(project)}
                            />
                        ))}
                    </div>
                )}
            </section>

            {/* Section projets personnels */}
            <section
                ref={personalRef}
                className="bg-slate-800/60 border border-slate-700 rounded-md p-4 text-sm space-y-3"
            >
                <h2 className="font-semibold mb-1">
                    {t.personalTitle[language]}
                </h2>

                {personalProjects.length === 0 ? (
                    <p className="text-slate-300">
                        {language === 'fr'
                            ? 'Pas encore de projets personnels renseignés.'
                            : 'No personal projects yet.'}
                    </p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                        {personalProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onClick={() => setSelectedProject(project)}
                            />
                        ))}
                    </div>
                )}
            </section>

            {/* Modale de détails projet */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </div>
    );
}

export default ProjectsPage;
