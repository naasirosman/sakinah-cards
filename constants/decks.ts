export type Level = 'close' | 'closer' | 'closest';

export interface Question {
  id: string;
  text: string;
}

export interface DeckLevel {
  level: Level;
  label: string;
  description: string;
  questions: Question[];
}

export interface Deck {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  emoji: string;
  bgColor: string;
  cardColor: string;
  accentColor: string;
  levels: DeckLevel[];
}

export const DECKS: Deck[] = [
  {
    id: 'getting-to-know',
    title: 'Getting to Know',
    subtitle: 'Pre-Marriage Questions',
    description:
      'Thoughtful questions for the blessed process of getting to know a potential spouse — with respect, intention & sincerity.',
    emoji: '🌿',
    bgColor: '#F4F8F2',
    cardColor: '#FFFFFF',
    accentColor: '#6B8C6A',
    levels: [
      {
        level: 'close',
        label: 'Close',
        description: 'Comfortable, light & open questions',
        questions: [
          { id: 'gtk-c-1', text: 'What does a typical day in your life look like?' },
          { id: 'gtk-c-2', text: 'What are your most important values in life?' },
          { id: 'gtk-c-3', text: 'How would your closest friends describe you?' },
          { id: 'gtk-c-4', text: 'What role does family play in your daily life?' },
          { id: 'gtk-c-5', text: 'What are your long-term goals and aspirations?' },
          { id: 'gtk-c-6', text: 'How do you like to spend your weekends?' },
          { id: 'gtk-c-7', text: 'What are you most passionate about outside of work?' },
          { id: 'gtk-c-8', text: 'How do you handle stress or difficult situations?' },
          { id: 'gtk-c-9', text: 'What does a happy home environment look like to you?' },
          {
            id: 'gtk-c-10',
            text: 'What hobbies or interests do you hope to continue after marriage?',
          },
        ],
      },
      {
        level: 'closer',
        label: 'Closer',
        description: 'Deeper values & meaningful topics',
        questions: [
          {
            id: 'gtk-cr-1',
            text: 'How do you envision balancing deen and dunya in your marriage?',
          },
          {
            id: 'gtk-cr-2',
            text: 'What are your expectations around raising children Islamically?',
          },
          {
            id: 'gtk-cr-3',
            text: 'How important is it for you that your spouse prays with you?',
          },
          {
            id: 'gtk-cr-4',
            text: 'How do you feel about living near or with extended family?',
          },
          {
            id: 'gtk-cr-5',
            text: 'What does financial responsibility mean to you in a marriage?',
          },
          {
            id: 'gtk-cr-6',
            text: "How do you handle disagreements — what's your conflict style?",
          },
          { id: 'gtk-cr-7', text: 'What are your dealbreakers in a marriage?' },
          {
            id: 'gtk-cr-8',
            text: 'How do you feel about the wife working outside the home?',
          },
          { id: 'gtk-cr-9', text: 'What role should in-laws play in your married life?' },
          {
            id: 'gtk-cr-10',
            text: 'How do you hope to grow spiritually together as a couple?',
          },
        ],
      },
      {
        level: 'closest',
        label: 'Closest',
        description: 'Vulnerable, heartfelt & profound',
        questions: [
          {
            id: 'gtk-cl-1',
            text: "What fears do you have about marriage that you've never told anyone?",
          },
          {
            id: 'gtk-cl-2',
            text: 'Is there anything from your past that you feel I should know?',
          },
          {
            id: 'gtk-cl-3',
            text: 'What do you need most from a spouse during your darkest moments?',
          },
          {
            id: 'gtk-cl-4',
            text: 'How do you define emotional intimacy in a halal marriage?',
          },
          {
            id: 'gtk-cl-5',
            text: 'What does unconditional love look like to you in practice?',
          },
          {
            id: 'gtk-cl-6',
            text: 'What would make you feel truly understood by your spouse?',
          },
          {
            id: 'gtk-cl-7',
            text: 'What is one thing you hope never changes about yourself?',
          },
          {
            id: 'gtk-cl-8',
            text: 'What does forgiveness look like to you within a marriage?',
          },
          { id: 'gtk-cl-9', text: 'How do you want to be shown appreciation and love?' },
          {
            id: 'gtk-cl-10',
            text: 'What legacy do you want to leave as a family in this dunya?',
          },
        ],
      },
    ],
  },
  {
    id: 'married-couples',
    title: 'Married Couples',
    subtitle: 'Deepen Your Bond',
    description:
      'Questions to reignite conversations, deepen love and strengthen the sacred covenant between husband and wife.',
    emoji: '💛',
    bgColor: '#FAF6EE',
    cardColor: '#FFFFFF',
    accentColor: '#A87D50',
    levels: [
      {
        level: 'close',
        label: 'Close',
        description: 'Comfortable, light & open questions',
        questions: [
          {
            id: 'mc-c-1',
            text: 'What was your favourite memory of us from this past year?',
          },
          {
            id: 'mc-c-2',
            text: 'What small thing do I do that makes you feel most loved?',
          },
          { id: 'mc-c-3', text: "What's something new you'd like us to try together?" },
          {
            id: 'mc-c-4',
            text: 'What part of our daily routine brings you the most joy?',
          },
          {
            id: 'mc-c-5',
            text: "What's a dream you have that we haven't talked about in a while?",
          },
          {
            id: 'mc-c-6',
            text: 'What do you appreciate most about how I show up for you?',
          },
          {
            id: 'mc-c-7',
            text: "What's a quality of mine you've come to admire more over time?",
          },
          { id: 'mc-c-8', text: "What's something funny only we would understand?" },
          {
            id: 'mc-c-9',
            text: 'How do you feel about where we are in life right now?',
          },
          {
            id: 'mc-c-10',
            text: "What's a simple pleasure you hope we never stop doing together?",
          },
        ],
      },
      {
        level: 'closer',
        label: 'Closer',
        description: 'Deeper values & meaningful topics',
        questions: [
          {
            id: 'mc-cr-1',
            text: "In what areas do you feel we've grown most as a couple?",
          },
          {
            id: 'mc-cr-2',
            text: "Is there something you've been wanting to tell me but haven't?",
          },
          { id: 'mc-cr-3', text: 'Where do you feel we could communicate better?' },
          {
            id: 'mc-cr-4',
            text: 'What does feeling truly supported by me look like to you?',
          },
          {
            id: 'mc-cr-5',
            text: 'How do you feel about the balance of responsibility between us?',
          },
          {
            id: 'mc-cr-6',
            text: "What sacrifice have I made for us that you're most grateful for?",
          },
          {
            id: 'mc-cr-7',
            text: 'Do you feel we make enough time for each other? Why or why not?',
          },
          {
            id: 'mc-cr-8',
            text: 'What would make our home feel even more like a sanctuary?',
          },
          {
            id: 'mc-cr-9',
            text: 'In what ways do you wish I understood you better?',
          },
          { id: 'mc-cr-10', text: 'What aspect of our marriage are you most proud of?' },
        ],
      },
      {
        level: 'closest',
        label: 'Closest',
        description: 'Vulnerable, heartfelt & profound',
        questions: [
          {
            id: 'mc-cl-1',
            text: 'Is there an old wound between us that still needs healing?',
          },
          {
            id: 'mc-cl-2',
            text: "What's your biggest fear about our future together?",
          },
          {
            id: 'mc-cl-3',
            text: 'Have you ever felt truly alone within our marriage? When?',
          },
          {
            id: 'mc-cl-4',
            text: "What do you need from me that you've never been able to ask for?",
          },
          {
            id: 'mc-cl-5',
            text: 'What does intimacy — beyond the physical — mean to you?',
          },
          {
            id: 'mc-cl-6',
            text: "If you could change one thing about how we've handled the past year, what would it be?",
          },
          {
            id: 'mc-cl-7',
            text: 'When do you feel most disconnected from me, and why?',
          },
          { id: 'mc-cl-8', text: 'What does your heart most need from me right now?' },
          {
            id: 'mc-cl-9',
            text: 'Is there a version of us you grieve — an earlier chapter you miss?',
          },
          { id: 'mc-cl-10', text: 'What does forever with me mean to you today?' },
        ],
      },
    ],
  },
  {
    id: 'faith-deen',
    title: 'Faith & Deen',
    subtitle: 'Spiritual Connection',
    description:
      'Questions to explore your faith, spiritual goals and relationship with Allah — together as believers.',
    emoji: '☪️',
    bgColor: '#F2F6FA',
    cardColor: '#FFFFFF',
    accentColor: '#4A789A',
    levels: [
      {
        level: 'close',
        label: 'Close',
        description: 'Comfortable, light & open questions',
        questions: [
          {
            id: 'fd-c-1',
            text: 'What aspect of your deen are you currently working to improve?',
          },
          {
            id: 'fd-c-2',
            text: 'Which surah or ayah holds the most meaning to you right now, and why?',
          },
          {
            id: 'fd-c-3',
            text: 'How do you feel closest to Allah in your daily life?',
          },
          {
            id: 'fd-c-4',
            text: 'What Islamic habit or practice do you want us to build together?',
          },
          {
            id: 'fd-c-5',
            text: 'How does Ramadan affect you spiritually compared to the rest of the year?',
          },
          {
            id: 'fd-c-6',
            text: 'What does gratitude look like in your spiritual practice?',
          },
          {
            id: 'fd-c-7',
            text: 'Who is your biggest Islamic role model and what do you admire about them?',
          },
          {
            id: 'fd-c-8',
            text: 'What does seeking knowledge look like in your day-to-day life?',
          },
          { id: 'fd-c-9', text: 'How do you want our home to feel spiritually?' },
          { id: 'fd-c-10', text: "What du'a do you make most often?" },
        ],
      },
      {
        level: 'closer',
        label: 'Closer',
        description: 'Deeper values & meaningful topics',
        questions: [
          {
            id: 'fd-cr-1',
            text: 'Where do you feel your iman is weakest, and what helps you in those moments?',
          },
          {
            id: 'fd-cr-2',
            text: 'How do you want us to hold each other accountable in our deen?',
          },
          {
            id: 'fd-cr-3',
            text: 'What is one Islamic teaching that has deeply changed how you see the world?',
          },
          {
            id: 'fd-cr-4',
            text: 'How do you hope we raise our children to love Islam?',
          },
          {
            id: 'fd-cr-5',
            text: "Is there an aspect of the deen you've struggled to connect with — and why?",
          },
          {
            id: 'fd-cr-6',
            text: 'What role do you want Quran to play in our home life?',
          },
          {
            id: 'fd-cr-7',
            text: 'How do you hope we support each other through spiritual lows?',
          },
          {
            id: 'fd-cr-8',
            text: 'What does tawakkul (trust in Allah) look like for you practically?',
          },
          {
            id: 'fd-cr-9',
            text: 'How has your relationship with Allah changed over the years?',
          },
          {
            id: 'fd-cr-10',
            text: "What's an act of ibadah you want to do together regularly?",
          },
        ],
      },
      {
        level: 'closest',
        label: 'Closest',
        description: 'Vulnerable, heartfelt & profound',
        questions: [
          {
            id: 'fd-cl-1',
            text: "Is there a sin or mistake you've made that you're still seeking peace from?",
          },
          {
            id: 'fd-cl-2',
            text: 'What does your relationship with Allah feel like in your most honest moments?',
          },
          { id: 'fd-cl-3', text: 'Have you ever lost faith, and what brought you back?' },
          {
            id: 'fd-cl-4',
            text: 'What do you fear most about standing before Allah on the Day of Judgement?',
          },
          {
            id: 'fd-cl-5',
            text: "Is there something in your spiritual life you've been afraid to share?",
          },
          {
            id: 'fd-cl-6',
            text: 'What does Jannah mean to you — what do you hope it holds?',
          },
          {
            id: 'fd-cl-7',
            text: 'Do you ever feel your prayers are not answered — how do you sit with that?',
          },
          {
            id: 'fd-cl-8',
            text: 'What is the most profound test Allah has put you through, and what did it teach you?',
          },
          {
            id: 'fd-cl-9',
            text: 'What does it mean to you to have a spouse who is your partner in deen?',
          },
          {
            id: 'fd-cl-10',
            text: 'If you could ask Allah one question, what would it be?',
          },
        ],
      },
    ],
  },
];

export function getDeck(id: string): Deck | undefined {
  return DECKS.find((d) => d.id === id);
}

export function getDeckLevel(
  deckId: string,
  level: Level
): DeckLevel | undefined {
  const deck = getDeck(deckId);
  return deck?.levels.find((l) => l.level === level);
}
