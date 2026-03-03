export type Level = 'close' | 'closer' | 'closest';

export type CardTheme =
  | 'scenario'
  | 'what-if'
  | 'challenge'
  | 'reveal'
  | 'reflect'
  | 'imagine';

export interface Question {
  id: string;
  text: string;
  theme?: CardTheme;
}

export interface Topic {
  id: string;
  name: string;
  emoji: string;
  questions: Question[];
}

export interface DeckLevel {
  level: Level;
  label: string;
  description: string;
  topics: Topic[];
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
        topics: [
          {
            id: 'faith',
            name: 'Faith & Deen',
            emoji: '🌙',
            questions: [
              { id: 'gtk-c-faith-1', text: 'How does prayer fit into your daily routine?', theme: 'reflect' },
              { id: 'gtk-c-faith-2', text: 'What does Ramadan mean to you personally?', theme: 'reveal' },
              { id: 'gtk-c-faith-3', text: 'How do you stay connected to your faith during busy times?', theme: 'reveal' },
              { id: 'gtk-c-faith-4', text: 'What Islamic practice brings you the most peace?', theme: 'reflect' },
              { id: 'gtk-c-faith-5', text: 'How did your relationship with Islam develop as you grew up?', theme: 'reveal' },
              { id: 'gtk-c-faith-6', text: 'What is one habit that helps you stay grounded in your deen?', theme: 'reveal' },
            ],
          },
          {
            id: 'family',
            name: 'Family & Roots',
            emoji: '🏡',
            questions: [
              { id: 'gtk-c-family-1', text: 'What does a typical day in your life look like?', theme: 'reveal' },
              { id: 'gtk-c-family-2', text: 'How would your closest family members describe you?', theme: 'reveal' },
              { id: 'gtk-c-family-3', text: 'What role does family play in your daily life?', theme: 'reflect' },
              { id: 'gtk-c-family-4', text: 'What is a tradition from your family you hope to carry forward?', theme: 'reveal' },
              { id: 'gtk-c-family-5', text: 'Who in your family are you closest to, and why?', theme: 'reveal' },
              { id: 'gtk-c-family-6', text: 'What does a happy home environment look like to you?', theme: 'imagine' },
            ],
          },
          {
            id: 'future',
            name: 'Future & Goals',
            emoji: '🌅',
            questions: [
              { id: 'gtk-c-future-1', text: 'What are your long-term goals and aspirations?', theme: 'reveal' },
              { id: 'gtk-c-future-2', text: 'Where do you see yourself in five years?', theme: 'imagine' },
              { id: 'gtk-c-future-3', text: 'What are you most passionate about outside of work?', theme: 'reveal' },
              { id: 'gtk-c-future-4', text: 'What does success mean to you personally?', theme: 'reflect' },
              { id: 'gtk-c-future-5', text: 'What hobbies or interests do you hope to continue after marriage?', theme: 'reveal' },
              { id: 'gtk-c-future-6', text: 'What kind of life do you dream of building?', theme: 'imagine' },
            ],
          },
          {
            id: 'character',
            name: 'Character & Values',
            emoji: '🪞',
            questions: [
              { id: 'gtk-c-character-1', text: 'What are your most important values in life?', theme: 'reveal' },
              { id: 'gtk-c-character-2', text: 'How would your closest friends describe you?', theme: 'reveal' },
              { id: 'gtk-c-character-3', text: 'What do you consider your greatest strength?', theme: 'reveal' },
              { id: 'gtk-c-character-4', text: 'What habit are you most proud of building?', theme: 'reveal' },
              { id: 'gtk-c-character-5', text: 'How do you handle stress or difficult situations?', theme: 'reveal' },
              { id: 'gtk-c-character-6', text: 'What does integrity mean to you in everyday life?', theme: 'reflect' },
            ],
          },
          {
            id: 'daily-life',
            name: 'Daily Life & Habits',
            emoji: '☀️',
            questions: [
              { id: 'gtk-c-daily-life-1', text: 'What does your morning routine look like?', theme: 'reveal' },
              { id: 'gtk-c-daily-life-2', text: 'How do you like to spend your weekends?', theme: 'reveal' },
              { id: 'gtk-c-daily-life-3', text: 'What does your ideal evening at home look like?', theme: 'imagine' },
              { id: 'gtk-c-daily-life-4', text: 'How do you typically recharge after a long day?', theme: 'reveal' },
              { id: 'gtk-c-daily-life-5', text: 'What does your relationship with food and cooking look like?', theme: 'reveal' },
              { id: 'gtk-c-daily-life-6', text: 'How do you stay organised in daily life?', theme: 'reveal' },
            ],
          },
        ],
      },
      {
        level: 'closer',
        label: 'Closer',
        description: 'Deeper values & meaningful topics',
        topics: [
          {
            id: 'faith',
            name: 'Faith & Deen',
            emoji: '🌙',
            questions: [
              { id: 'gtk-cr-faith-1', text: 'How do you envision balancing deen and dunya in your marriage?', theme: 'reflect' },
              { id: 'gtk-cr-faith-2', text: 'How important is it that your spouse prays with you?', theme: 'reveal' },
              { id: 'gtk-cr-faith-3', text: 'What are your expectations around raising children Islamically?', theme: 'imagine' },
              { id: 'gtk-cr-faith-4', text: 'How do you hope to grow spiritually together as a couple?', theme: 'imagine' },
              { id: 'gtk-cr-faith-5', text: 'What does an Islamic home mean to you?', theme: 'imagine' },
              { id: 'gtk-cr-faith-6', text: 'How do you navigate moments when your faith feels tested?', theme: 'reveal' },
            ],
          },
          {
            id: 'family',
            name: 'Family & Roots',
            emoji: '🏡',
            questions: [
              { id: 'gtk-cr-family-1', text: 'How do you feel about living near or with extended family?', theme: 'reveal' },
              { id: 'gtk-cr-family-2', text: 'What role should in-laws play in your married life?', theme: 'reflect' },
              { id: 'gtk-cr-family-3', text: 'How do you handle family conflicts and obligations?', theme: 'reveal' },
              { id: 'gtk-cr-family-4', text: 'What are your expectations around visiting family after marriage?', theme: 'reveal' },
              { id: 'gtk-cr-family-5', text: "If your family disapproved of your spouse, how would you handle it?", theme: 'scenario' },
              { id: 'gtk-cr-family-6', text: 'What family patterns do you hope to break or continue?', theme: 'reflect' },
            ],
          },
          {
            id: 'future',
            name: 'Future & Goals',
            emoji: '🌅',
            questions: [
              { id: 'gtk-cr-future-1', text: 'What does financial responsibility mean to you in a marriage?', theme: 'reflect' },
              { id: 'gtk-cr-future-2', text: 'How do you feel about the wife working outside the home?', theme: 'reveal' },
              { id: 'gtk-cr-future-3', text: 'What are your dealbreakers in a marriage?', theme: 'reveal' },
              { id: 'gtk-cr-future-4', text: 'Where do you want to settle down?', theme: 'reveal' },
              { id: 'gtk-cr-future-5', text: 'What does your ideal lifestyle look like in ten years?', theme: 'imagine' },
              { id: 'gtk-cr-future-6', text: 'How do you approach big financial decisions as a couple?', theme: 'scenario' },
            ],
          },
          {
            id: 'character',
            name: 'Character & Values',
            emoji: '🪞',
            questions: [
              { id: 'gtk-cr-character-1', text: "How do you handle disagreements — what's your conflict style?", theme: 'reveal' },
              { id: 'gtk-cr-character-2', text: 'How do you respond when you feel disrespected?', theme: 'scenario' },
              { id: 'gtk-cr-character-3', text: 'What does accountability look like to you?', theme: 'reflect' },
              { id: 'gtk-cr-character-4', text: "How do you feel you've changed most in the past few years?", theme: 'reflect' },
              { id: 'gtk-cr-character-5', text: 'What do you do when you feel overwhelmed or burnt out?', theme: 'reveal' },
              { id: 'gtk-cr-character-6', text: 'How do you think about personal growth within a marriage?', theme: 'reflect' },
            ],
          },
          {
            id: 'daily-life',
            name: 'Daily Life & Habits',
            emoji: '☀️',
            questions: [
              { id: 'gtk-cr-daily-life-1', text: 'How do you manage your time between work, family and personal interests?', theme: 'reveal' },
              { id: 'gtk-cr-daily-life-2', text: 'What household responsibilities are you comfortable taking on?', theme: 'reveal' },
              { id: 'gtk-cr-daily-life-3', text: 'How important is having personal space and alone time to you?', theme: 'reflect' },
              { id: 'gtk-cr-daily-life-4', text: 'How do you approach social commitments as a couple?', theme: 'scenario' },
              { id: 'gtk-cr-daily-life-5', text: 'What does a healthy work-life balance look like to you?', theme: 'reflect' },
              { id: 'gtk-cr-daily-life-6', text: 'How do you handle seasons of life that feel unbalanced or stretched?', theme: 'reveal' },
            ],
          },
        ],
      },
      {
        level: 'closest',
        label: 'Closest',
        description: 'Vulnerable, heartfelt & profound',
        topics: [
          {
            id: 'faith',
            name: 'Faith & Deen',
            emoji: '🌙',
            questions: [
              { id: 'gtk-cl-faith-1', text: "What spiritual struggles have you faced that shaped your relationship with Allah?", theme: 'reveal' },
              { id: 'gtk-cl-faith-2', text: 'How do you reconcile faith with the hardships you\'ve experienced?', theme: 'reflect' },
              { id: 'gtk-cl-faith-3', text: 'What would it mean to you if your spouse led your household in worship?', theme: 'imagine' },
              { id: 'gtk-cl-faith-4', text: "What are you still working to understand or accept in your deen?", theme: 'reveal' },
              { id: 'gtk-cl-faith-5', text: "Has your faith ever been the thing that held you together when everything else fell apart?", theme: 'reveal' },
              { id: 'gtk-cl-faith-6', text: "What does surrendering to Allah's will look like in your daily life?", theme: 'reflect' },
            ],
          },
          {
            id: 'family',
            name: 'Family & Roots',
            emoji: '🏡',
            questions: [
              { id: 'gtk-cl-family-1', text: "What fears do you have about marriage that you've never told anyone?", theme: 'reveal' },
              { id: 'gtk-cl-family-2', text: 'Is there anything from your past that you feel I should know?', theme: 'reveal' },
              { id: 'gtk-cl-family-3', text: 'What family wounds have shaped you most?', theme: 'reveal' },
              { id: 'gtk-cl-family-4', text: "What did you need as a child that you didn't always receive?", theme: 'reveal' },
              { id: 'gtk-cl-family-5', text: 'What legacy do you want to leave as a family in this dunya?', theme: 'imagine' },
              { id: 'gtk-cl-family-6', text: 'How has your upbringing shaped the way you love?', theme: 'reflect' },
            ],
          },
          {
            id: 'future',
            name: 'Future & Goals',
            emoji: '🌅',
            questions: [
              { id: 'gtk-cl-future-1', text: 'What does unconditional love look like to you in practice?', theme: 'reflect' },
              { id: 'gtk-cl-future-2', text: 'What would make you feel truly understood by your spouse?', theme: 'reveal' },
              { id: 'gtk-cl-future-3', text: 'What is one thing you hope never changes about yourself?', theme: 'reveal' },
              { id: 'gtk-cl-future-4', text: 'What does forgiveness look like to you within a marriage?', theme: 'reflect' },
              { id: 'gtk-cl-future-5', text: 'How do you want to be shown appreciation and love?', theme: 'reveal' },
              { id: 'gtk-cl-future-6', text: 'What would a life well-lived look like to you at the end?', theme: 'reflect' },
            ],
          },
          {
            id: 'character',
            name: 'Character & Values',
            emoji: '🪞',
            questions: [
              { id: 'gtk-cl-character-1', text: 'What do you need most from a spouse during your darkest moments?', theme: 'reveal' },
              { id: 'gtk-cl-character-2', text: 'How do you define emotional intimacy in a halal marriage?', theme: 'reflect' },
              { id: 'gtk-cl-character-3', text: "What is something you're still learning to accept about yourself?", theme: 'reveal' },
              { id: 'gtk-cl-character-4', text: "What is the hardest part of who you are that others don't often see?", theme: 'reveal' },
              { id: 'gtk-cl-character-5', text: 'What does it mean to you to be truly known by another person?', theme: 'reflect' },
              { id: 'gtk-cl-character-6', text: "What part of yourself are you most afraid to show someone you're considering marrying?", theme: 'reveal' },
            ],
          },
          {
            id: 'daily-life',
            name: 'Daily Life & Habits',
            emoji: '☀️',
            questions: [
              { id: 'gtk-cl-daily-life-1', text: 'What moment in your daily life do you feel most like yourself?', theme: 'reveal' },
              { id: 'gtk-cl-daily-life-2', text: "What routine or ritual feels sacred to you — one you'd protect even after marriage?", theme: 'reveal' },
              { id: 'gtk-cl-daily-life-3', text: 'How do you recharge your soul, not just your body?', theme: 'reveal' },
              { id: 'gtk-cl-daily-life-4', text: 'What does a day where you felt truly at peace look like?', theme: 'imagine' },
              { id: 'gtk-cl-daily-life-5', text: 'When do you feel most alive in your ordinary life?', theme: 'reveal' },
              { id: 'gtk-cl-daily-life-6', text: 'What habit or daily practice would you hope to share with your spouse?', theme: 'imagine' },
            ],
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
        topics: [
          {
            id: 'connection',
            name: 'Connection & Closeness',
            emoji: '🤝',
            questions: [
              { id: 'mc-c-connection-1', text: 'What was your favourite memory of us from this past year?', theme: 'reveal' },
              { id: 'mc-c-connection-2', text: 'What small thing do I do that makes you feel most loved?', theme: 'reveal' },
              { id: 'mc-c-connection-3', text: 'What part of our daily routine brings you the most joy?', theme: 'reveal' },
              { id: 'mc-c-connection-4', text: "What's something funny only we would understand?", theme: 'reveal' },
              { id: 'mc-c-connection-5', text: 'When do you feel most connected to me?', theme: 'reflect' },
              { id: 'mc-c-connection-6', text: 'What makes you feel closest to me on an ordinary day?', theme: 'reflect' },
            ],
          },
          {
            id: 'growth',
            name: 'Growth & Change',
            emoji: '🌱',
            questions: [
              { id: 'mc-c-growth-1', text: "What's something new you'd like us to try together?", theme: 'imagine' },
              { id: 'mc-c-growth-2', text: "What quality of mine have you come to admire more over time?", theme: 'reveal' },
              { id: 'mc-c-growth-3', text: "In what small way have you grown since we got married?", theme: 'reflect' },
              { id: 'mc-c-growth-4', text: "What is one habit you've picked up from me?", theme: 'reveal' },
              { id: 'mc-c-growth-5', text: 'What challenge have we faced together that made you proud of us?', theme: 'reveal' },
              { id: 'mc-c-growth-6', text: "How do you feel you've changed most since we got married?", theme: 'reflect' },
            ],
          },
          {
            id: 'home',
            name: 'Home & Sanctuary',
            emoji: '🕯️',
            questions: [
              { id: 'mc-c-home-1', text: 'What does a perfect evening at home look like to you?', theme: 'imagine' },
              { id: 'mc-c-home-2', text: "What simple pleasure do you hope we never stop doing together?", theme: 'reveal' },
              { id: 'mc-c-home-3', text: 'What makes you feel most comfortable and at ease in our home?', theme: 'reveal' },
              { id: 'mc-c-home-4', text: "What do you love most about the life we've built together?", theme: 'reveal' },
              { id: 'mc-c-home-5', text: 'What small act of care from me means the most to you?', theme: 'reveal' },
              { id: 'mc-c-home-6', text: "What does home feel like to you when I'm not there?", theme: 'reflect' },
            ],
          },
          {
            id: 'gratitude',
            name: 'Gratitude & Appreciation',
            emoji: '💛',
            questions: [
              { id: 'mc-c-gratitude-1', text: 'What do you appreciate most about how I show up for you?', theme: 'reveal' },
              { id: 'mc-c-gratitude-2', text: "What is something I do that you're grateful for but rarely say?", theme: 'reveal' },
              { id: 'mc-c-gratitude-3', text: 'What moment recently made you feel grateful we\'re together?', theme: 'reveal' },
              { id: 'mc-c-gratitude-4', text: 'How do you feel about where we are in life right now?', theme: 'reflect' },
              { id: 'mc-c-gratitude-5', text: 'What do you appreciate most about our daily life?', theme: 'reflect' },
              { id: 'mc-c-gratitude-6', text: 'What is something about me you never get tired of?', theme: 'reveal' },
            ],
          },
          {
            id: 'dreams',
            name: 'Dreams & the Future',
            emoji: '✨',
            questions: [
              { id: 'mc-c-dreams-1', text: "What's a dream you have that we haven't talked about in a while?", theme: 'reveal' },
              { id: 'mc-c-dreams-2', text: 'What do you hope our life looks like in five years?', theme: 'imagine' },
              { id: 'mc-c-dreams-3', text: "What do you want to experience together that we haven't yet?", theme: 'imagine' },
              { id: 'mc-c-dreams-4', text: "What's a small adventure you'd like us to have soon?", theme: 'imagine' },
              { id: 'mc-c-dreams-5', text: 'What does your version of a beautiful life with me look like?', theme: 'imagine' },
              { id: 'mc-c-dreams-6', text: 'What are you most looking forward to about our future?', theme: 'imagine' },
            ],
          },
        ],
      },
      {
        level: 'closer',
        label: 'Closer',
        description: 'Deeper values & meaningful topics',
        topics: [
          {
            id: 'connection',
            name: 'Connection & Closeness',
            emoji: '🤝',
            questions: [
              { id: 'mc-cr-connection-1', text: "In what areas do you feel we've grown most as a couple?", theme: 'reflect' },
              { id: 'mc-cr-connection-2', text: 'Where do you feel we could communicate better?', theme: 'reflect' },
              { id: 'mc-cr-connection-3', text: 'What does feeling truly supported by me look like to you?', theme: 'reveal' },
              { id: 'mc-cr-connection-4', text: 'In what ways do you wish I understood you better?', theme: 'reveal' },
              { id: 'mc-cr-connection-5', text: 'Do you feel we make enough time for each other? Why or why not?', theme: 'reflect' },
              { id: 'mc-cr-connection-6', text: 'When do you feel most seen and heard by me?', theme: 'reveal' },
            ],
          },
          {
            id: 'growth',
            name: 'Growth & Change',
            emoji: '🌱',
            questions: [
              { id: 'mc-cr-growth-1', text: 'How do you feel about the balance of responsibility between us?', theme: 'reflect' },
              { id: 'mc-cr-growth-2', text: "What sacrifice have I made for us that you're most grateful for?", theme: 'reveal' },
              { id: 'mc-cr-growth-3', text: 'What aspect of our marriage are you most proud of?', theme: 'reflect' },
              { id: 'mc-cr-growth-4', text: "Is there something you've been wanting to tell me but haven't?", theme: 'reveal' },
              { id: 'mc-cr-growth-5', text: 'How have you changed in ways that surprised you?', theme: 'reflect' },
              { id: 'mc-cr-growth-6', text: 'What has being married taught you about yourself?', theme: 'reflect' },
            ],
          },
          {
            id: 'home',
            name: 'Home & Sanctuary',
            emoji: '🕯️',
            questions: [
              { id: 'mc-cr-home-1', text: 'What would make our home feel even more like a sanctuary?', theme: 'imagine' },
              { id: 'mc-cr-home-2', text: 'What does a home that truly reflects us both look like?', theme: 'imagine' },
              { id: 'mc-cr-home-3', text: 'What responsibility around our home feels heavy right now?', theme: 'reveal' },
              { id: 'mc-cr-home-4', text: 'How do you feel about the rhythms and routines of our daily life?', theme: 'reflect' },
              { id: 'mc-cr-home-5', text: "What's one thing we could add to our home life that would make you happier?", theme: 'reveal' },
              { id: 'mc-cr-home-6', text: 'How can I make our shared space feel more like yours?', theme: 'reveal' },
            ],
          },
          {
            id: 'gratitude',
            name: 'Gratitude & Appreciation',
            emoji: '💛',
            questions: [
              { id: 'mc-cr-gratitude-1', text: "What sacrifice of mine has never been fully acknowledged?", theme: 'reveal' },
              { id: 'mc-cr-gratitude-2', text: 'What do you most need more appreciation for?', theme: 'reveal' },
              { id: 'mc-cr-gratitude-3', text: "What have you done quietly for our family that deserves to be recognised?", theme: 'reveal' },
              { id: 'mc-cr-gratitude-4', text: 'When do you feel underappreciated, and why?', theme: 'reveal' },
              { id: 'mc-cr-gratitude-5', text: 'How do you most like to receive appreciation — words, actions, time?', theme: 'reveal' },
              { id: 'mc-cr-gratitude-6', text: 'What would make you feel more celebrated in our marriage?', theme: 'reveal' },
            ],
          },
          {
            id: 'dreams',
            name: 'Dreams & the Future',
            emoji: '✨',
            questions: [
              { id: 'mc-cr-dreams-1', text: "What big dream do you have that you're afraid to voice out loud?", theme: 'reveal' },
              { id: 'mc-cr-dreams-2', text: "Is there something you've sacrificed for our family that you miss?", theme: 'reveal' },
              { id: 'mc-cr-dreams-3', text: 'What does success look like for you personally — not just for us?', theme: 'reflect' },
              { id: 'mc-cr-dreams-4', text: 'What is one goal you want to achieve before the end of the year?', theme: 'reveal' },
              { id: 'mc-cr-dreams-5', text: "What dream would you pursue if you knew you couldn't fail?", theme: 'what-if' },
              { id: 'mc-cr-dreams-6', text: 'Is there a version of your life you once imagined that still pulls at you?', theme: 'reveal' },
            ],
          },
        ],
      },
      {
        level: 'closest',
        label: 'Closest',
        description: 'Vulnerable, heartfelt & profound',
        topics: [
          {
            id: 'connection',
            name: 'Connection & Closeness',
            emoji: '🤝',
            questions: [
              { id: 'mc-cl-connection-1', text: 'Is there an old wound between us that still needs healing?', theme: 'reveal' },
              { id: 'mc-cl-connection-2', text: 'Have you ever felt truly alone within our marriage? When?', theme: 'reveal' },
              { id: 'mc-cl-connection-3', text: 'When do you feel most disconnected from me, and why?', theme: 'reflect' },
              { id: 'mc-cl-connection-4', text: 'What does your heart most need from me right now?', theme: 'reveal' },
              { id: 'mc-cl-connection-5', text: 'Is there a version of us you grieve — an earlier chapter you miss?', theme: 'reflect' },
              { id: 'mc-cl-connection-6', text: 'What does forever with me mean to you today?', theme: 'reflect' },
            ],
          },
          {
            id: 'growth',
            name: 'Growth & Change',
            emoji: '🌱',
            questions: [
              { id: 'mc-cl-growth-1', text: "What's your biggest fear about our future together?", theme: 'reveal' },
              { id: 'mc-cl-growth-2', text: "What do you need from me that you've never been able to ask for?", theme: 'reveal' },
              { id: 'mc-cl-growth-3', text: "If you could change one thing about how we've handled the past year, what would it be?", theme: 'reflect' },
              { id: 'mc-cl-growth-4', text: 'What has been the hardest season of our marriage, and what did it teach you?', theme: 'reflect' },
              { id: 'mc-cl-growth-5', text: 'What do you wish we had done differently in an early season of our marriage?', theme: 'reflect' },
              { id: 'mc-cl-growth-6', text: "What growth in yourself have you been afraid to share with me?", theme: 'reveal' },
            ],
          },
          {
            id: 'home',
            name: 'Home & Sanctuary',
            emoji: '🕯️',
            questions: [
              { id: 'mc-cl-home-1', text: 'What does intimacy — beyond the physical — mean to you?', theme: 'reflect' },
              { id: 'mc-cl-home-2', text: 'What makes you feel safest with me?', theme: 'reveal' },
              { id: 'mc-cl-home-3', text: 'Is there something about our daily life that slowly drains you?', theme: 'reveal' },
              { id: 'mc-cl-home-4', text: 'What does our home lack that your heart needs?', theme: 'reflect' },
              { id: 'mc-cl-home-5', text: "When do you feel most like we're truly a team?", theme: 'reveal' },
              { id: 'mc-cl-home-6', text: 'What would it mean to you if we built a home where peace was the default?', theme: 'imagine' },
            ],
          },
          {
            id: 'gratitude',
            name: 'Gratitude & Appreciation',
            emoji: '💛',
            questions: [
              { id: 'mc-cl-gratitude-1', text: "What sacrifice of yours has never been fully seen or acknowledged?", theme: 'reveal' },
              { id: 'mc-cl-gratitude-2', text: "Is there something you've carried alone in our marriage that I don't fully know about?", theme: 'reveal' },
              { id: 'mc-cl-gratitude-3', text: 'What do you need me to understand about your experience of us?', theme: 'reveal' },
              { id: 'mc-cl-gratitude-4', text: 'What act of love from you have I taken for granted?', theme: 'reflect' },
              { id: 'mc-cl-gratitude-5', text: 'What is the most loving thing I have ever done for you?', theme: 'reflect' },
              { id: 'mc-cl-gratitude-6', text: 'What would it mean to you to be truly cherished, not just loved?', theme: 'reflect' },
            ],
          },
          {
            id: 'dreams',
            name: 'Dreams & the Future',
            emoji: '✨',
            questions: [
              { id: 'mc-cl-dreams-1', text: 'What legacy do you want us to leave our children?', theme: 'reflect' },
              { id: 'mc-cl-dreams-2', text: 'What kind of old couple do you want us to be?', theme: 'imagine' },
              { id: 'mc-cl-dreams-3', text: 'If we were given one year with no constraints, what would you want us to do?', theme: 'what-if' },
              { id: 'mc-cl-dreams-4', text: 'What do you want our children to say about our marriage when they grow up?', theme: 'imagine' },
              { id: 'mc-cl-dreams-5', text: 'What does it look like when we are at our absolute best as a couple?', theme: 'imagine' },
              { id: 'mc-cl-dreams-6', text: 'What would make you feel like our life together was truly meaningful?', theme: 'reflect' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'friends-family',
    title: 'Friends & Family',
    subtitle: 'The People Who Made You',
    description:
      'Questions to explore your relationships, upbringing and the people who shaped who you are.',
    emoji: '🍂',
    bgColor: '#FDF6F0',
    cardColor: '#FFFFFF',
    accentColor: '#C47B4A',
    levels: [
      {
        level: 'close',
        label: 'Close',
        description: 'Comfortable, light & open questions',
        topics: [
          {
            id: 'upbringing',
            name: 'Upbringing & Childhood',
            emoji: '🌿',
            questions: [
              { id: 'ff-c-upbringing-1', text: 'What is your favourite memory from childhood?', theme: 'reveal' },
              { id: 'ff-c-upbringing-2', text: 'How did your family show love when you were growing up?', theme: 'reveal' },
              { id: 'ff-c-upbringing-3', text: 'What is a tradition from your family that you hope to carry forward?', theme: 'reveal' },
              { id: 'ff-c-upbringing-4', text: 'What did you want to be when you grew up — and why?', theme: 'reveal' },
              { id: 'ff-c-upbringing-5', text: 'What childhood experience shaped the way you see the world?', theme: 'reflect' },
              { id: 'ff-c-upbringing-6', text: 'What part of your upbringing are you most grateful for?', theme: 'reveal' },
            ],
          },
          {
            id: 'parents',
            name: 'Parents & Elders',
            emoji: '👐',
            questions: [
              { id: 'ff-c-parents-1', text: 'Who in your family are you closest to, and why?', theme: 'reveal' },
              { id: 'ff-c-parents-2', text: 'What quality do you most admire in one of your parents?', theme: 'reveal' },
              { id: 'ff-c-parents-3', text: 'What has a parent done that surprised or moved you?', theme: 'reveal' },
              { id: 'ff-c-parents-4', text: 'How did your parents show up for you during hard times?', theme: 'reveal' },
              { id: 'ff-c-parents-5', text: 'What is something you wish you could tell a parent right now?', theme: 'reveal' },
              { id: 'ff-c-parents-6', text: "What's a lesson your parents taught you without saying a word?", theme: 'reflect' },
            ],
          },
          {
            id: 'friendship',
            name: 'Friendship & Loyalty',
            emoji: '🫂',
            questions: [
              { id: 'ff-c-friendship-1', text: 'What is your favourite memory with a childhood friend?', theme: 'reveal' },
              { id: 'ff-c-friendship-2', text: 'Who outside your immediate family has had the biggest impact on you?', theme: 'reveal' },
              { id: 'ff-c-friendship-3', text: 'What role do your friends play in your life right now?', theme: 'reflect' },
              { id: 'ff-c-friendship-4', text: 'How do you like to stay connected with the people you love?', theme: 'reveal' },
              { id: 'ff-c-friendship-5', text: 'What does a good friend look like to you?', theme: 'reflect' },
              { id: 'ff-c-friendship-6', text: 'What quality do you most admire in your closest friend?', theme: 'reveal' },
            ],
          },
          {
            id: 'belonging',
            name: 'Belonging & Identity',
            emoji: '🪴',
            questions: [
              { id: 'ff-c-belonging-1', text: 'What is a perfect family gathering to you?', theme: 'imagine' },
              { id: 'ff-c-belonging-2', text: 'Is there a friend who feels like family? What makes them that?', theme: 'reveal' },
              { id: 'ff-c-belonging-3', text: 'Where do you feel most at home — a place, a community, or a person?', theme: 'reflect' },
              { id: 'ff-c-belonging-4', text: 'What community have you been part of that shaped you most?', theme: 'reveal' },
              { id: 'ff-c-belonging-5', text: 'What does belonging mean to you?', theme: 'reflect' },
              { id: 'ff-c-belonging-6', text: 'Who makes you feel completely yourself?', theme: 'reveal' },
            ],
          },
          {
            id: 'healing',
            name: 'Healing & Forgiveness',
            emoji: '🌊',
            questions: [
              { id: 'ff-c-healing-1', text: "What's something you've let go of that used to weigh on you?", theme: 'reveal' },
              { id: 'ff-c-healing-2', text: 'What does an apology mean to you — what makes it feel real?', theme: 'reflect' },
              { id: 'ff-c-healing-3', text: 'What relationship in your life has improved over time in a way that surprised you?', theme: 'reveal' },
              { id: 'ff-c-healing-4', text: "What's something kind someone did for you that you still think about?", theme: 'reveal' },
              { id: 'ff-c-healing-5', text: "What does forgiveness feel like to you when it's genuine?", theme: 'reflect' },
              { id: 'ff-c-healing-6', text: "Who is someone you feel you've grown closer to through difficulty?", theme: 'reveal' },
            ],
          },
        ],
      },
      {
        level: 'closer',
        label: 'Closer',
        description: 'Deeper values & meaningful topics',
        topics: [
          {
            id: 'upbringing',
            name: 'Upbringing & Childhood',
            emoji: '🌿',
            questions: [
              { id: 'ff-cr-upbringing-1', text: 'How has your upbringing shaped the way you love?', theme: 'reflect' },
              { id: 'ff-cr-upbringing-2', text: 'What childhood belief did you have to unlearn as an adult?', theme: 'reveal' },
              { id: 'ff-cr-upbringing-3', text: 'What family dynamic do you want to break or carry forward?', theme: 'reflect' },
              { id: 'ff-cr-upbringing-4', text: "How have your ideas about family changed since you were a child?", theme: 'reflect' },
              { id: 'ff-cr-upbringing-5', text: 'What moment from your childhood do you wish you could revisit?', theme: 'imagine' },
              { id: 'ff-cr-upbringing-6', text: 'What did your upbringing teach you about what you deserve?', theme: 'reflect' },
            ],
          },
          {
            id: 'parents',
            name: 'Parents & Elders',
            emoji: '👐',
            questions: [
              { id: 'ff-cr-parents-1', text: 'How has your relationship with your parents shaped who you are?', theme: 'reflect' },
              { id: 'ff-cr-parents-2', text: 'What is something your parents sacrificed for you that you only understood later?', theme: 'reveal' },
              { id: 'ff-cr-parents-3', text: 'How do you want your family to feel different from the one you grew up in?', theme: 'reflect' },
              { id: 'ff-cr-parents-4', text: "How has your relationship with one of your parents changed as you've grown older?", theme: 'reflect' },
              { id: 'ff-cr-parents-5', text: 'What do your parents still worry about when it comes to you?', theme: 'reveal' },
              { id: 'ff-cr-parents-6', text: 'What do you think your parents got right that you want to replicate?', theme: 'reflect' },
            ],
          },
          {
            id: 'friendship',
            name: 'Friendship & Loyalty',
            emoji: '🫂',
            questions: [
              { id: 'ff-cr-friendship-1', text: 'How do your friendships change when life gets hard?', theme: 'reflect' },
              { id: 'ff-cr-friendship-2', text: 'What does loyalty mean to you in a friendship?', theme: 'reflect' },
              { id: 'ff-cr-friendship-3', text: 'Who do you turn to first when something goes wrong, and why?', theme: 'reveal' },
              { id: 'ff-cr-friendship-4', text: 'What is the hardest lesson a friend or family member has taught you?', theme: 'reveal' },
              { id: 'ff-cr-friendship-5', text: 'Is there a friendship that ended and still stays with you? What happened?', theme: 'reveal' },
              { id: 'ff-cr-friendship-6', text: "What do you bring to a friendship that you're proud of?", theme: 'reflect' },
            ],
          },
          {
            id: 'belonging',
            name: 'Belonging & Identity',
            emoji: '🪴',
            questions: [
              { id: 'ff-cr-belonging-1', text: "Where do you feel you've never quite belonged — and why?", theme: 'reveal' },
              { id: 'ff-cr-belonging-2', text: 'What does your identity mean to you beyond family and culture?', theme: 'reflect' },
              { id: 'ff-cr-belonging-3', text: 'How do you navigate belonging to multiple worlds?', theme: 'scenario' },
              { id: 'ff-cr-belonging-4', text: 'What community or group made you feel most seen?', theme: 'reveal' },
              { id: 'ff-cr-belonging-5', text: "How has your sense of identity shifted as you've grown older?", theme: 'reflect' },
              { id: 'ff-cr-belonging-6', text: 'What do you want others to understand about where you come from?', theme: 'reveal' },
            ],
          },
          {
            id: 'healing',
            name: 'Healing & Forgiveness',
            emoji: '🌊',
            questions: [
              { id: 'ff-cr-healing-1', text: "What is a relationship in your family you've had to work to repair?", theme: 'reveal' },
              { id: 'ff-cr-healing-2', text: 'What does it feel like when you truly forgive someone?', theme: 'reflect' },
              { id: 'ff-cr-healing-3', text: 'Is there something you carry from a past relationship that still affects you?', theme: 'reveal' },
              { id: 'ff-cr-healing-4', text: 'How do you handle it when people you love let you down?', theme: 'reveal' },
              { id: 'ff-cr-healing-5', text: 'What does reconciliation mean to you — can a relationship recover from hurt?', theme: 'reflect' },
              { id: 'ff-cr-healing-6', text: 'What would it take for you to truly move on from a past wound?', theme: 'reflect' },
            ],
          },
        ],
      },
      {
        level: 'closest',
        label: 'Closest',
        description: 'Vulnerable, heartfelt & profound',
        topics: [
          {
            id: 'upbringing',
            name: 'Upbringing & Childhood',
            emoji: '🌿',
            questions: [
              { id: 'ff-cl-upbringing-1', text: 'What wound from your upbringing are you still healing from?', theme: 'reveal' },
              { id: 'ff-cl-upbringing-2', text: 'What did you need most as a child that you did not always receive?', theme: 'reveal' },
              { id: 'ff-cl-upbringing-3', text: 'Have you ever felt like the outsider in your own family? What was that like?', theme: 'reveal' },
              { id: 'ff-cl-upbringing-4', text: 'What is something a parent said or did that you still carry with you?', theme: 'reveal' },
              { id: 'ff-cl-upbringing-5', text: 'How has your childhood shaped your deepest fears?', theme: 'reflect' },
              { id: 'ff-cl-upbringing-6', text: 'What version of yourself as a child do you still carry inside you?', theme: 'reflect' },
            ],
          },
          {
            id: 'parents',
            name: 'Parents & Elders',
            emoji: '👐',
            questions: [
              { id: 'ff-cl-parents-1', text: 'Is there something you wish you had said to a family member before it was too late?', theme: 'reveal' },
              { id: 'ff-cl-parents-2', text: 'What relationship with a parent or elder have you grieved — one that changed or was lost?', theme: 'reveal' },
              { id: 'ff-cl-parents-3', text: 'What do you most hope your parents knew about how much they meant to you?', theme: 'reveal' },
              { id: 'ff-cl-parents-4', text: 'What did a parent do that changed you — for better or worse — in ways you still feel?', theme: 'reveal' },
              { id: 'ff-cl-parents-5', text: "Is there a wound between you and a parent that still hasn't fully healed?", theme: 'reveal' },
              { id: 'ff-cl-parents-6', text: 'What do you most wish your parents had done differently?', theme: 'reflect' },
            ],
          },
          {
            id: 'friendship',
            name: 'Friendship & Loyalty',
            emoji: '🫂',
            questions: [
              { id: 'ff-cl-friendship-1', text: 'Have you ever been truly betrayed by a friend? How did it change you?', theme: 'reveal' },
              { id: 'ff-cl-friendship-2', text: 'Is there a friendship you lost that you still miss deeply?', theme: 'reveal' },
              { id: 'ff-cl-friendship-3', text: 'What do you most hope the people who love you know about you?', theme: 'reveal' },
              { id: 'ff-cl-friendship-4', text: "What friend knows a version of you that others don't?", theme: 'reveal' },
              { id: 'ff-cl-friendship-5', text: 'Has a friendship ever saved you — been there right when you needed it most?', theme: 'reveal' },
              { id: 'ff-cl-friendship-6', text: 'What is the most honest thing a friend has ever said to you?', theme: 'reveal' },
            ],
          },
          {
            id: 'belonging',
            name: 'Belonging & Identity',
            emoji: '🪴',
            questions: [
              { id: 'ff-cl-belonging-1', text: 'How has your sense of belonging to a family or community shaped your identity?', theme: 'reflect' },
              { id: 'ff-cl-belonging-2', text: 'Have you ever had to hide a part of yourself to belong somewhere?', theme: 'reveal' },
              { id: 'ff-cl-belonging-3', text: 'Where do you feel you are most fully yourself?', theme: 'reveal' },
              { id: 'ff-cl-belonging-4', text: 'What does it mean to you to be truly known by the people around you?', theme: 'reflect' },
              { id: 'ff-cl-belonging-5', text: "Have you ever felt like you were living someone else's idea of who you should be?", theme: 'reveal' },
              { id: 'ff-cl-belonging-6', text: 'What part of your identity do you most want to protect and pass on?', theme: 'reflect' },
            ],
          },
          {
            id: 'healing',
            name: 'Healing & Forgiveness',
            emoji: '🌊',
            questions: [
              { id: 'ff-cl-healing-1', text: 'If you could heal one relationship in your life, which would it be and why?', theme: 'imagine' },
              { id: 'ff-cl-healing-2', text: 'What are you still trying to forgive yourself for?', theme: 'reveal' },
              { id: 'ff-cl-healing-3', text: "Is there something you need to say to someone that you've never said?", theme: 'reveal' },
              { id: 'ff-cl-healing-4', text: 'What old version of yourself do you need to forgive?', theme: 'reflect' },
              { id: 'ff-cl-healing-5', text: 'What would full healing look like to you — in your body, your heart, your relationships?', theme: 'imagine' },
              { id: 'ff-cl-healing-6', text: "What would you want to release if you knew you were safe enough to let it go?", theme: 'reflect' },
            ],
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

export function getDeckLevelTopic(
  deckId: string,
  level: Level,
  topicId: string
): Topic | undefined {
  if (topicId === 'all') {
    return getAllTopicsAsOne(deckId, level);
  }
  return getDeckLevel(deckId, level)?.topics.find((t) => t.id === topicId);
}

export function getAllTopicsAsOne(
  deckId: string,
  level: Level
): Topic | undefined {
  const deckLevel = getDeckLevel(deckId, level);
  if (!deckLevel) return undefined;
  return {
    id: 'all',
    name: 'All Cards',
    emoji: '✨',
    questions: deckLevel.topics.flatMap((t) => t.questions),
  };
}
