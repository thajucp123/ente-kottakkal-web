export const LOST_FOUND_CATEGORIES = [
  { id: 'documents', label: 'രേഖകൾ (Docs)' },
  { id: 'electronics', label: 'മൊബൈൽ/ഇലക്ട്രോണിക്സ്' },
  { id: 'keys', label: 'താക്കോലുകൾ (Keys)' },
  { id: 'pets', label: 'വളർത്തുമൃഗങ്ങൾ (Pets)' },
  { id: 'jewelry', label: 'ആഭരണങ്ങൾ (Jewelry)' },
  { id: 'others', label: 'മറ്റുള്ളവ (Others)' }
];

export const INITIAL_LOST_FOUND = [
  {
    id: 'lf-1',
    type: 'lost',
    title: 'ആധാർ കാർഡും ഡ്രൈവിംഗ് ലൈസൻസും അടങ്ങിയ പാക്കറ്റ്',
    description: 'ചങ്കുവെട്ടി സിഗ്നലിന് സമീപം വെച്ച് ആധാർ കാർഡും ഡ്രൈവിംഗ് ലൈസൻസും അടങ്ങിയ കറുത്ത ചെറിയ പേഴ്സ് നഷ്ടപ്പെട്ടിരിക്കുന്നു. കണ്ടെത്താൻ സഹായിക്കുക.',
    category: 'documents',
    contactNumber: '9847123456',
    location: 'ചങ്കുവെട്ടി (Changuvetty)',
    createdAt: '2026-05-19T08:30:00.000Z',
    status: 'active'
  },
  {
    id: 'lf-2',
    type: 'found',
    title: 'ഹീറോ ഹോണ്ട ബൈക്കിന്റെ താക്കോൽ',
    description: 'കോട്ടക്കൽ ബസ്‌സ്റ്റാൻഡിന് സമീപം ഉള്ള സൂപ്പർമാർക്കറ്റിന്റെ മുന്നിൽ നിന്നും ഒരു ബൈക്കിന്റെ താക്കോൽ ലഭിച്ചിട്ടുണ്ട്. ഉടമസ്ഥർ ബന്ധപ്പെടുക.',
    category: 'keys',
    contactNumber: '9744112233',
    location: 'കോട്ടക്കൽ ടൗൺ (Kottakkal Town)',
    createdAt: '2026-05-20T04:15:00.000Z',
    status: 'active'
  },
  {
    id: 'lf-3',
    type: 'lost',
    title: 'പൂച്ചയെ കാണാതായി (പേർഷ്യൻ ക്യാറ്റ്)',
    description: 'പുത്തനങ്ങാടി വില്ലേജ് ഓഫീസിന് സമീപമുള്ള വീട്ടിൽ നിന്നും ചാരനിറമുള്ള പൂച്ചയെ കാണാതായിരിക്കുന്നു. വിവരങ്ങൾ തരുന്നവർക്ക് പ്രതിഫലം നൽകുന്നതാണ്.',
    category: 'pets',
    contactNumber: '9562778899',
    location: 'പുത്തനങ്ങാടി (Puthanangadi)',
    createdAt: '2026-05-18T10:00:00.000Z',
    status: 'active'
  },
  {
    id: 'lf-4',
    type: 'found',
    title: 'സാംസങ് സ്മാർട്ട്ഫോൺ',
    description: 'ആയുർവേദ കോളേജിന് അടുത്തുള്ള റോഡിൽ നിന്നും ഒരു സാംസങ് ഫോൺ വീണുകിട്ടിയിട്ടുണ്ട്. ഫോൺ സ്വിച്ച് ഓഫ് ആണ്. ശരിയായ പാറ്റേൺ അൺലോക്ക് ചെയ്തു കാണിക്കുന്ന ഉടമയ്ക്ക് നൽകുന്നതാണ്.',
    category: 'electronics',
    contactNumber: '9048334455',
    location: 'ആയുർവേദ കോളേജ് പരിസരം',
    createdAt: '2026-05-20T11:00:00.000Z',
    status: 'active'
  }
];
