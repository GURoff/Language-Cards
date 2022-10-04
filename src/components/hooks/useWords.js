  //Sorted words in vocabulary for future search
  import {useMemo} from 'react';
  
  export const useSortedWords = (words, sort) => {
      const sortedWords = useMemo(() => {
          if (sort) {
              return [...words].sort((a, b) => a[sort].localeCompare(b[sort]))
          }
          return words;
      }, [sort, words]);

      return sortedWords;
  }

  //Sorted and searched words from vocabulary
  export const useWords = (words, sort, query) => {
      const sortedWords = useSortedWords(words, sort);

      const sortedAndSearchedWords = useMemo(() => {
          return sortedWords.filter(word => word.input.toLowerCase().includes(query.toLowerCase())) //is neccecary to add search for output too
      }, [query, sortedWords]);

      return sortedAndSearchedWords;
  }