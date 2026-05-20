export const JOB_CATEGORIES = [
  { id: 'all', label: 'എല്ലാം' },
  { id: 'delivery', label: 'ഡെലിവറി സ്റ്റാഫ്' },
  { id: 'shop_helper', label: 'ഷോപ്പ് ഹെൽപ്പർ' },
  { id: 'tuition', label: 'ട്യൂഷൻ ടീച്ചർ' },
  { id: 'office', label: 'ഓഫീസ് സ്റ്റാഫ്' },
  { id: 'gulf', label: 'ഗൾഫ് വേക്കൻസി' },
  { id: 'others', label: 'മറ്റുള്ളവ' }
];

export const INITIAL_JOBS = [
  {
    id: 'job-1',
    title: 'സൂപ്പർമാർക്കറ്റ് ഡെലിവറി ബോയ്',
    company: 'റോയൽ മാർട്ട് സൂപ്പർമാർക്കറ്റ്',
    salary: '₹12,000 - ₹15,000',
    type: 'Full-Time',
    category: 'delivery',
    contactNumber: '9847111222',
    description: 'കോട്ടക്കൽ ടൗണിലും പരിസര പ്രദേശങ്ങളിലും ഹോം ഡെലിവറി നടത്തുന്നതിനായി ആളുകളെ ആവശ്യമുണ്ട്. ടു-വീലറും ലൈസൻസും നിർബന്ധമാണ്.',
    location: 'കോട്ടക്കൽ (Kottakkal)',
    createdAt: '2026-05-18T09:00:00.000Z',
    expiresAt: '2026-06-18'
  },
  {
    id: 'job-2',
    title: 'ഹൈസ്കൂൾ വിദ്യാർത്ഥികൾക്ക് മാത്സ് ട്യൂഷൻ ടീച്ചർ',
    company: 'ബ്രൈറ്റ് ട്യൂഷൻ സെന്റർ',
    salary: '₹5,000 - ₹8,000',
    type: 'Part-Time',
    category: 'tuition',
    contactNumber: '9653112233',
    description: 'വൈകുന്നേരങ്ങളിൽ ഹൈസ്കൂൾ ക്ലാസുകളിലെ കുട്ടികൾക്ക് കണക്ക് പഠിപ്പിക്കാൻ കഴിവുള്ള അധ്യാപിക/അധ്യാപകനെ ആവശ്യമുണ്ട്. പ്രവൃത്തിപരിചയം ഉള്ളവർക്ക് മുൻഗണന.',
    location: 'ചങ്കുവെട്ടി (Changuvetty)',
    createdAt: '2026-05-19T14:30:00.000Z',
    expiresAt: '2026-06-10'
  },
  {
    id: 'job-3',
    title: 'തുണിക്കടയിൽ സെയിൽസ് ഗേൾ',
    company: 'ലാവെൻഡർ ബുട്ടീക്ക്',
    salary: '₹10,000 - ₹12,000',
    type: 'Full-Time',
    category: 'shop_helper',
    contactNumber: '9048332211',
    description: 'പുതിയതായി ആരംഭിച്ച ബുട്ടീക്കിലേക്ക് സെയിൽസ് ഫീൽഡിൽ താല്പര്യമുള്ള പെൺകുട്ടികളെ ആവശ്യമുണ്ട്. പ്രായപരിധി: 18 - 30.',
    location: 'ബീച്ച് റോഡ് (Beach Road)',
    createdAt: '2026-05-20T08:00:00.000Z',
    expiresAt: '2026-06-20'
  },
  {
    id: 'job-4',
    title: 'ഓഫീസ് അസിസ്റ്റന്റ് / കമ്പ്യൂട്ടർ ഓപ്പറേറ്റർ',
    company: 'സ്റ്റാർ ഡിജിറ്റൽ സർവീസ്',
    salary: '₹14,000',
    type: 'Full-Time',
    category: 'office',
    contactNumber: '9495123456',
    description: 'കമ്പ്യൂട്ടർ ടൈപ്പിംഗ്, മലയാളം & ഇംഗ്ലീഷ് കൈകാര്യം ചെയ്യൽ, ബില്ലിംഗ് എന്നിവ അറിയാവുന്ന പെൺകുട്ടികളെ ആവശ്യമുണ്ട്. അപേക്ഷകൾ ക്ഷണിക്കുന്നു.',
    location: 'പുത്തനങ്ങാടി (Puthanangadi)',
    createdAt: '2026-05-20T03:00:00.000Z',
    expiresAt: '2026-06-15'
  },
  {
    id: 'job-5',
    title: 'സൗദി അറേബ്യ - ഡ്രൈവർ വേക്കൻസി',
    company: 'അൽ മനാഫ് ട്രാവൽസ്',
    salary: '2000 SAR + ബത്ത',
    type: 'Gulf Vacancy',
    category: 'gulf',
    contactNumber: '9745998877',
    description: 'സൗദി അറേബ്യയിൽ പ്രമുഖ കമ്പനിയിൽ ലൈറ്റ് വെഹിക്കിൾ ഡ്രൈവർമാരുടെ ഒഴിവുകൾ ഉണ്ട്. സൗദി വാലിഡ് ലൈസൻസ് ഉള്ളവർ ബന്ധപ്പെടുക.',
    location: 'ഗൾഫ് പ്രതിനിധി',
    createdAt: '2026-05-19T06:00:00.000Z',
    expiresAt: '2026-06-05'
  }
];
