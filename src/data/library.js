

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/events', label: 'Events' },
  { to: '/books', label: 'Featured Books' },
  { to: '/contact', label: 'Contact Us' },
];

export const libraryInfo = {
  name: 'Bright Future Library',
  mission: 'To get more people reading and give everyone in our community a place to learn.',
  address: '12 Knowledge Avenue, City Centre',
  phone: '+250 788 123 456',
  email: 'info@brightfuturelibrary.org',
};

export const communityValues = [
  {
    icon: '🌍',
    title: 'Open to everyone',
    text: 'Anyone can come in and use our books and computers for free.',
  },
  {
    icon: '🔤',
    title: 'Better reading skills',
    text: 'We help children and adults get better at reading and writing.',
  },
  {
    icon: '🎓',
    title: 'Learning for all',
    text: "Whether you're at school or looking for work, we're here to help.",
  },
  {
    icon: '🏡',
    title: 'A place to meet',
    text: 'A friendly spot to meet people, share ideas and spend time.',
  },
];

export const services = [
  {
    icon: '📚',
    title: 'Borrowing & Returning',
    description: "Take books home with your library card and bring them back when you're done.",
  },
  {
    icon: '💻',
    title: 'Internet & Computer Access',
    description: 'Use our computers and Wi-Fi for school, work or anything else.',
  },
  {
    icon: '🪑',
    title: 'Reading & Study Spaces',
    description: 'Quiet spots to read or study, on your own or with friends.',
  },
  {
    icon: '🧑‍🏫',
    title: 'Educational Workshops',
    description: 'Short, free classes where you can pick up new skills.',
  },
  {
    icon: '✏️',
    title: 'Literacy Programmes',
    description: 'Help for anyone who wants to read and write with more confidence.',
  },
];

export const events = [
  {
    id: 1,
    title: "Children's Storytelling Session",
    date: '2026-10-31',
    description: 'Stories, songs and puppets for kids aged 3 to 8. Parents are welcome to stay.',
  },
  {
    id: 2,
    title: 'Reading Competition',
    date: '2026-11-07',
    description:
      'Students aged 9 to 16 read aloud and answer questions about a book. Prizes for the best readers.',
  },
  {
    id: 3,
    title: 'Community Literacy Workshop',
    date: '2026-11-14',
    description: 'A relaxed session for adults who want to improve their reading and writing.',
  },
];

// isbn is used to load the cover from Open Library; `color` is the fallback cover colour.
export const books = [
  {
    id: 1,
    title: 'Things Fall Apart',
    author: 'Chinua Achebe',
    isbn: '9780385474542',
    color: '#8a4b2a',
    description: 'Okonkwo is a proud man whose village starts to change when colonial rule arrives.',
  },
  {
    id: 2,
    title: 'The Boy Who Harnessed the Wind',
    author: 'William Kamkwamba',
    isbn: '9780061730337',
    color: '#1f6f8b',
    description: 'A teenager in Malawi builds a windmill from scrap to bring power to his home.',
  },
  {
    id: 3,
    title: 'Atomic Habits',
    author: 'James Clear',
    isbn: '9780735211292',
    color: '#2e7d4f',
    description: 'How small changes to your daily routine can add up to big results.',
  },
  {
    id: 4,
    title: 'Half of a Yellow Sun',
    author: 'Chimamanda Ngozi Adichie',
    isbn: '9781400095209',
    color: '#c8902a',
    description: 'A story of love and loss during the Nigerian Civil War.',
  },
];
