export function selectBook(book) {
  //select book is an ActionCreator, it needs to return an Action,
  //an object with a type prop (and sometimes a payload)
  
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}