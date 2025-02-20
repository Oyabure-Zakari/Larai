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

  // from text input, which is required parameter for the api
  word: string;
  // results gotten from the translation api
  query: string;
  translation: string;
  
  // from picker component gets the value the user selects, which is required parameter for the api
  translateFrom: string;
  translateTo: string;

  // actions to update the states
  setWord: (word: string) => void;
  setTranslateFrom: (translateFrom: string) => void;
  setTranslateTo: (translateTo: string) => void;

  // translate button, which is a function that takes in word, translateTo and translateFrom as arguements
  translateBtn: (
    word: string,
    translateTo: string,
    translateFrom: string
  ) => Promise<void>;
};