import { contacts } from '../../data/contacts.js';
import { useLanguage } from '../../context/LanguageContext.jsx';

function ContactButtons() {
    const { language } = useLanguage();

    const handleClick = (contact) => {
        window.open(contact.url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="bg-slate-800/60 border border-slate-700 rounded-md p-4">
            <div className="flex flex-wrap gap-3">
                {contacts.map((contact) => (
                    <button
                        key={contact.id}
                        type="button"
                        onClick={() => handleClick(contact)}
                        className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-md text-sm
                       hover:bg-slate-800 hover:border-sky-400 transition-colors"
                    >
                        {contact.label[language]}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default ContactButtons;
