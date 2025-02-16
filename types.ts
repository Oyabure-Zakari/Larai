// dictionary response type, which is an array of objects
export type DictionaryResultsType = {
  definition: string;
  example: string;
};

// type for the useDictionaryStore
export type DictionaryStore = {
  word: string;
  error: any;
  results: DictionaryResultsType[];
  isLoading: boolean;
  setWord: (word: string) => void;
  sendWord: (word: string) => Promise<void>;
};