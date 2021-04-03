// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  let foundUser = undefined;
  for(let account of accounts) {
    if(id === account.id) {
      foundUser = account
    }
  }
  return foundUser
}

function sortAccountsByLastName(accounts) {
  const sortbyLastNameAccounts = accounts.sort((accountA, accountB) =>
  (accountA.name.last > accountB.name.last ? 1 : -1 ));
  return sortbyLastNameAccounts
}

function getTotalNumberOfBorrows(account, books) {
  let totalBorrows = 0;
  const userId = account.id;
  const bookDetails = Object.values(books)
  
  for(details of bookDetails) {
    const borrowDetails = details.borrows;
    for(info of borrowDetails) {
      if(info.id === userId) {
        totalBorrows += 1;
      }
    }
  }
  return totalBorrows;
}

function getBooksPossessedByAccount(account, books, authors) {
  let booksPossessedByAccount = [];
  const userId = account.id;
  for(let book of books) {
    const borrowDetails = book.borrows
    let authorId = book.authorId;
    const foundAuthor = authors.find((author) => author.id === authorId);
    let bookWithAuthor = {...book, "author" : foundAuthor};
    
    for(let borrowDetail of borrowDetails) {
      if(borrowDetail.id === userId && borrowDetail.returned === false) {
        booksPossessedByAccount.push(bookWithAuthor);
      } 
    }
  }
  console.log(booksPossessedByAccount);
  return booksPossessedByAccount;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
