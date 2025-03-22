// type for firstAppLaunch function
export type FirstAppLaunchType = {
  success: boolean;
};

// type for useAppLaunchedStore
export type useAppLaunchedStoreType = {
  token: string;
  error: string;
  isLoading: boolean;
  checkAppLaunch: () => Promise<void>;
  firstAppLaunch: () => Promise<FirstAppLaunchType>;
};

// dictionary response type, which is an array of objects
export type DictionaryResultsType = {
  definition: string;
  example: string;
};

// type for the useDictionaryStore
export type DictionaryStoreType = {
  word: string;
  error: any;
  results: DictionaryResultsType[];
  isLoading: boolean;
  setWord: (word: string) => void;
  sendWord: (word: string) => Promise<void>;
};

// type for the useTranslationStore
export type useTranslationStoreType = {
  error: any;
  isLoading: boolean;

  // the word the user types in the text field, & is a requirement for the api
  word: string;

  // states to hold api results
  query: string;
  translation: string;

  // picker component which allows user to select a language, & are requirements for the api
  translateFrom: string;
  translateTo: string;

  // actions to update the states
  setWord: (word: string) => void;
  setTranslateFrom: (language: string) => void;
  setTranslateTo: (language: string) => void;

  // is a function which takes in word, translateFrom and translateTo as arguements, to be used as part of the requirement for the api call
  translateBtn: (
    word: string,
    translateFrom: string,
    translateTo: string
  ) => Promise<void>;
};

// type for the ExtractTextTranslationStore
export type ExtractTextTranslationStoreType = {
  error: any;
  image: string;
  imageUrl: string;
  isLoading: boolean;
  translateTo: string;
  translatedText: string;
  takePhoto: () => Promise<void>;
  pickImage: () => Promise<void>;
  setTranslateTo: (language: string) => void;
  extractTextAndTranslate: () => Promise<void>;
};
