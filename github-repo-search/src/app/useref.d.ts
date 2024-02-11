// useref.d.ts

declare module 'useref' {
    interface UserefResult {
      js: string[];
      css: string[];
    }
  
    function useref(content: string): UserefResult;
  
    export = useref;
  }
  