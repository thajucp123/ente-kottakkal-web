export const EDUCATION_TABS = [
  { id: 'institutions', label: 'സ്ഥാപനങ്ങൾ (Schools & Colleges)' },
  { id: 'tuitions', label: 'ട്യൂഷൻ & കോച്ചിങ്' },
  { id: 'scholarships', label: 'സ്കോളർഷിപ്പുകൾ' },
  { id: 'notices', label: 'അറിയിപ്പുകൾ (Notices)' }
];

export const EDUCATION_INSTITUTION_TYPES = [
  { id: 'all', label: 'എല്ലാം' },
  { id: 'school', label: 'സ്കൂളുകൾ (Schools)' },
  { id: 'college', label: 'കോളേജുകൾ (Colleges)' },
  { id: 'university', label: 'യൂണിവേഴ്സിറ്റികൾ' }
];

export const MOCK_INSTITUTIONS = [
  {
    id: 'inst-1',
    name: 'ഗവണ്മെന്റ് രാജാസ് ഹയർ സെക്കൻഡറി സ്കൂൾ',
    type: 'school',
    phone: '04832742031',
    location: 'കോട്ടക്കൽ ടൗൺ (Kottakkal)',
    description: 'കോട്ടക്കലിലെ ഏറ്റവും പഴക്കമേറിയതും പ്രശസ്തവുമായ പൊതുവിദ്യാലയം. എൽ.പി മുതൽ പ്ലസ് ടു വരെ ക്ലാസുകൾ ലഭ്യമാണ്.',
    courses: 'LP, UP, HS, HSS (Science, Commerce, Humanities)'
  },
  {
    id: 'inst-2',
    name: 'വൈദ്യരത്നം പി. എസ്. വാരിയർ ആയുർവേദ കോളേജ്',
    type: 'college',
    phone: '04832742225',
    location: 'ചങ്കുവെട്ടി (Changuvetty)',
    description: 'ആയുർവേദ വിദ്യാഭ്യാസ രംഗത്തെ ഇന്ത്യയിലെ തന്നെ മികച്ച സ്ഥാപനങ്ങളിൽ ഒന്ന്. ബി.എ.എം.എസ്, എം.ഡി കോഴ്സുകൾ ലഭ്യമാണ്.',
    courses: 'BAMS, MD (Ayurveda), PG Diploma'
  },
  {
    id: 'inst-3',
    name: 'മലബാർ ഇൻസ്റ്റിറ്റ്യൂട്ട് ഓഫ് സയൻസ് ആൻഡ് ടെക്നോളജി',
    type: 'college',
    phone: '04832998877',
    location: 'കോട്ടക്കൽ പരിസരം',
    description: 'ആർട്സ് & സയൻസ് ബിരുദ, ബിരുദാനന്തര കോഴ്സുകൾ ലഭ്യമാകുന്ന മികച്ച കാമ്പസ്.',
    courses: 'B.Sc Computer Science, BCA, B.Com, BBA, M.Com'
  },
  {
    id: 'inst-4',
    name: 'തുഞ്ചത്തെഴുത്തച്ഛൻ മലയാളം സർവ്വകലാശാല',
    type: 'university',
    phone: '04942631200',
    location: 'തിരൂർ (കോട്ടക്കലിന് സമീപം)',
    description: 'മലയാള ഭാഷ, സഹിത്യം, സാംസ്കാരിക പൈതൃകം എന്നിവയ്ക്കായി സ്ഥാപിതമായ ഏക സർവ്വകലാശാല.',
    courses: 'MA Malayalam, MA Journalism, M.Phil, PhD programs'
  },
  {
    id: 'inst-5',
    name: 'കാലിക്കറ്റ് സർവ്വകലാശാല (University of Calicut)',
    type: 'university',
    phone: '04942407227',
    location: 'തേഞ്ഞിപ്പലം (കോട്ടക്കലിന് സമീപം)',
    description: 'വടക്കൻ കേരളത്തിലെ ഏറ്റവും വലിയ സർവ്വകലാശാല കാമ്പസ്. കോട്ടക്കലിലെ ഭൂരിഭാഗം കോളേജുകളും ഇതിനോട് അഫിലിയേറ്റ് ചെയ്തിരിക്കുന്നു.',
    courses: 'UG, PG, Research in Science, Humanities, Commerce, Engineering'
  }
];

export const MOCK_TUITIONS = [
  {
    id: 'tuit-1',
    name: 'എവറസ്റ്റ് അക്കാദമി ട്യൂഷൻ സെന്റർ',
    subject: 'ഹൈസ്കൂൾ & പ്ലസ് ടു എല്ലാ വിഷയങ്ങളും',
    phone: '9847556677',
    location: 'ചങ്കുവെട്ടി (Changuvetty)',
    description: 'Experienced അധ്യാപകർ നയിക്കുന്ന വൈകുന്നേരങ്ങളിലെ ക്ലാസുകൾ. റിവിഷൻ ബാച്ചുകൾ ലഭ്യമാണ്.'
  },
  {
    id: 'tuit-2',
    name: 'ജെനിത് എൻട്രൻസ് ഹബ്ബ്',
    subject: 'NEET, JEE എൻട്രൻസ് കോച്ചിങ്',
    phone: '9048112233',
    location: 'കോട്ടക്കൽ ടൗൺ (Kottakkal)',
    description: 'പ്ലസ് ടു വിദ്യാർത്ഥികൾക്കായുള്ള ക്രാഷ് കോഴ്സുകളും റിപ്പീറ്റേഴ്സ് ബാച്ചുകളും. മികച്ച വിജയം നേടുന്ന സ്ഥാപനം.'
  }
];

export const MOCK_SCHOLARSHIPS = [
  {
    id: 'schol-1',
    name: 'കേരള ഹയർ എഡ്യൂക്കേഷൻ സ്കോളർഷിപ്പ്',
    provider: 'കേരള സംസ്ഥാന ഉന്നതവിദ്യാഭ്യാസ കൗൺസിൽ',
    eligibility: 'ഡിഗ്രി ഒന്നാം വർഷ വിദ്യാർത്ഥികൾക്ക് (പ്രവേശന പരീക്ഷയിലെ മാർക്കിന്റെ അടിസ്ഥാനത്തിൽ)',
    amount: 'വർഷത്തിൽ ₹12,000 മുതൽ ₹24,000 വരെ',
    deadline: '2026-09-30'
  },
  {
    id: 'schol-2',
    name: 'പോസ്റ്റ് മെട്രിക് സ്കോളർഷിപ്പ് (Minority)',
    provider: 'കേന്ദ്ര ന്യൂനപക്ഷ മന്ത്രാലയം',
    eligibility: 'പ്ലസ് ടു, ഡിഗ്രി കോഴ്സുകളിൽ പഠിക്കുന്ന ന്യൂനപക്ഷ വിഭാഗങ്ങളിലെ വിദ്യാർത്ഥികൾക്ക് (കുടുംബ വരുമാനം 2 ലക്ഷത്തിൽ താഴെ)',
    amount: 'ഫീസ് ഇളവും പ്രതിമാസ അലവൻസും',
    deadline: '2026-10-15'
  }
];

export const MOCK_EDUCATIONAL_NOTICES = [
  {
    id: 'note-1',
    title: 'പ്ലസ് വൺ ഏകജാലക പ്രവേശനം ആരംഭിച്ചു',
    date: '2026-05-20',
    description: 'കേരള ഹയർസെക്കൻഡറി ഒന്നാം വർഷ പ്രവേശനത്തിനായുള്ള ഓൺലൈൻ അപേക്ഷകൾ ആപ്ലിക്കേഷൻ പോർട്ടൽ വഴി സമർപ്പിക്കാം. അവസാന തീയതി ജൂൺ 10.'
  },
  {
    id: 'note-2',
    title: 'കാലിക്കറ്റ് യൂണിവേഴ്സിറ്റി ഡിഗ്രി മൂന്നാം സെമസ്റ്റർ പരീക്ഷകൾ മാറ്റിപ്പൊതിച്ചു',
    date: '2026-05-19',
    description: 'നാളെ നടക്കേണ്ടിയിരുന്ന ബിരുദ മൂന്നാം സെമസ്റ്റർ തിയറി പരീക്ഷകൾ ജൂൺ 15ലേക്ക് മാറ്റിവെച്ചിരിക്കുന്നു. ഹാൾ ടിക്കറ്റിൽ മാറ്റമില്ല.'
  }
];
