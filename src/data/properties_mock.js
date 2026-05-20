export const PROPERTY_CATEGORIES = [
  { id: 'house', label: 'വീടുകൾ (Houses)' },
  { id: 'apartment', label: 'ഫ്ലാറ്റുകൾ/മുറികൾ' },
  { id: 'pg_hostel', label: 'PG / ഹോസ്റ്റലുകൾ' },
  { id: 'shop_commercial', label: 'കടകൾ/ഓഫീസുകൾ' },
  { id: 'land', label: 'സ്ഥലം (Plot/Land)' }
];

export const INITIAL_PROPERTIES = [
  {
    id: 'prop-1',
    title: '3 BHK ആധുനിക വീട് വാടകയ്ക്ക്',
    type: 'rental',
    category: 'house',
    price: '₹15,000 / മാസം',
    location: 'ചങ്കുവെട്ടി (Changuvetty)',
    size: '1600 Sq.Ft.',
    contactNumber: '9847223344',
    description: 'ഫാമിലിക്ക് അനുയോജ്യമായ 3 ബെഡ്‌റൂം വീട് വാടകയ്ക്ക് ലഭ്യമാണ്. കാർ പാർക്കിംഗ് സൗകര്യം, കിണർ വെള്ളം, റോഡ് സൈഡ് ഫ്രണ്ട് എന്നിവയുണ്ട്.',
    createdAt: '2026-05-18T10:00:00.000Z'
  },
  {
    id: 'prop-2',
    title: 'കോട്ടക്കൽ ടൗണിൽ ഷോപ്പ് സ്പേസ് ലീസിന്',
    type: 'rental',
    category: 'shop_commercial',
    price: '₹12,000 / മാസം',
    location: 'കോട്ടക്കൽ ടൗൺ (Kottakkal Town)',
    size: '450 Sq.Ft.',
    contactNumber: '9048332211',
    description: 'പ്രധാന ബൈപ്പാസ് റോഡരികിൽ ഉള്ള ബിസിനസ്സ് അനുയോജ്യമായ കടമുറി വാടകക്കോ ലീസിനോ നൽകുന്നു. വാട്ടർ കണക്ഷൻ ലഭ്യമാണ്.',
    createdAt: '2026-05-19T06:30:00.000Z'
  },
  {
    id: 'prop-3',
    title: '15 സെന്റ് പുരയിടം വില്പനയ്ക്ക്',
    type: 'sale',
    category: 'land',
    price: '₹6.5 ലക്ഷം / സെന്റ്',
    location: 'പുത്തനങ്ങാടി (Puthanangadi)',
    size: '15 സെന്റ്',
    contactNumber: '9744112233',
    description: 'വീട് വെക്കാൻ അനുയോജ്യമായ നിരപ്പായ സ്ഥലം. വില്ലേജ് ഓഫീസ് റോഡരികിൽ. വെള്ളം, വൈദ്യുതി സൗകര്യങ്ങൾ ലഭ്യമാണ്.',
    createdAt: '2026-05-20T08:15:00.000Z'
  },
  {
    id: 'prop-4',
    title: 'വർക്കിംഗ് വുമൺസ് PG ഹോസ്റ്റൽ',
    type: 'rental',
    category: 'pg_hostel',
    price: '₹4,500 / മാസം',
    location: 'ആയുർവേദ കോളേജ് പരിസരം',
    size: 'Shared Rooms',
    contactNumber: '9562778899',
    description: 'ആയുർവേദ കോളേജിന് സമീപം സ്ത്രീകൾക്കും വിദ്യാർത്ഥിനികൾക്കും താമസിക്കാൻ പറ്റിയ സുരക്ഷിതമായ ഹോസ്റ്റൽ സൗകര്യം. നല്ല ഭക്ഷണവും സെക്യൂരിറ്റിയും.',
    createdAt: '2026-05-20T11:00:00.000Z'
  }
];
