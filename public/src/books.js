// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  const foundAuthor = authors.find((author) => author.id === id);
  return foundAuthor;
}

function findBookById(books, id) {
  const foundBook = books.find((book) => book.id === id);
  return foundBook;
}

function partitionBooksByBorrowedStatus(books) {
 
  const returned  = books.filter((book) => {
    const borrowDetails = book.borrows;
    const keep = borrowDetails[0].returned === true
    return keep;
  });

  const out  = books.filter((book) => {
    const borrowDetails = book.borrows;
    const keep = borrowDetails[0].returned === false
    return keep;
  });

  let ans = [];
  ans.push(out);
  ans.push(returned);
  return ans
}

function getBorrowersForBook(book, accounts) {
  let allTrans = [];
  const allBorrows = Object.values(book.borrows);
  
  for(let i = 0; i < allBorrows.length; i++) {
    const curBorrowId = allBorrows[i].id;
    const isReturned =  allBorrows[i].returned;

    for(let j = 0; j < accounts.length; j++) {
      let curAccount = accounts[j];
      curAccount.returned = isReturned;
      const curAccountId = accounts[j].id;

      if(curBorrowId === curAccountId && allTrans.length < 10) {
        allTrans.push(curAccount)
      }
    }
  }
  return allTrans
}




module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
