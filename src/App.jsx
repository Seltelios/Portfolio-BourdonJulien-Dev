import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext.jsx';

// Layout
import Header from './components/layout/Header.jsx';
import PageContainer from './components/layout/PageContainer.jsx';

// Pages
import HomePage from './components/home/HomePage.jsx';
import AboutPage from './components/about/AboutPage.jsx';
import ProjectsPage from './components/projects/ProjectsPage.jsx';

function AppInner() {
    const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'about' | 'projects'

    let pageContent = null;

    if (currentPage === 'home') {
        pageContent = <HomePage />;
    } else if (currentPage === 'about') {
        pageContent = <AboutPage />;
    } else if (currentPage === 'projects') {
        pageContent = <ProjectsPage />;
    } else {
        pageContent = <HomePage />;
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-slate-100">
            <Header currentPage={currentPage} onChangePage={setCurrentPage} />
            <PageContainer>
                {pageContent}
            </PageContainer>
        </div>
    );
}

export default function App() {
    return (
        <LanguageProvider>
            <AppInner />
        </LanguageProvider>
    );
}
