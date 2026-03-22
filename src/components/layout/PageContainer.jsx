// src/components/layout/PageContainer.jsx
export default function PageContainer({ children }) {
    return (
        <main className="max-w-5xl mx-auto px-4 py-6">
            <div className="bg-slate-900/70 border border-slate-700 rounded-md min-h-[60vh] p-4">
                {children}
            </div>
        </main>
    );
}
