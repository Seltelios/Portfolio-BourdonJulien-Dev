function App() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center">
            <div className="max-w-xl p-8 rounded-2xl bg-slate-800 shadow-lg">
                <p className="text-sm text-emerald-400 mb-1">Portfolio</p>
                <h1 className="text-3xl font-bold mb-2">
                    Julien Bourdon
                </h1>

                <p className="text-slate-300 mb-4">
                    Développeur / Game Dev en devenir. Voici mon espace pour présenter
                    mes projets scolaires et personnels.
                </p>

                <div className="flex gap-3">
                    <button className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 font-semibold">
                        Voir mes projets
                    </button>
                    <button className="px-4 py-2 rounded-lg border border-slate-500 hover:border-slate-300">
                        Télécharger mon CV
                    </button>
                </div>
            </div>
        </div>
    )
}

export default App
