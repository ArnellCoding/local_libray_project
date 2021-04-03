// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let sumOfBorrowedBooks = 0

  for (let book of books) {
      const borrowDetails = book.borrows
      if (borrowDetails[0].returned === false) {
          sumOfBorrowedBooks += 1;
      }
  }
  return sumOfBorrowedBooks;
}


// Helper

function sortByTop5(ary) {
  const sorted =
  ary.sort((aryA, aryB) => (aryA.count > aryB.count ? -1 : 1));
  ary.length = 5;
  return sorted
}


function getMostCommonGenres(books) {
  const countByGenre = books.reduce((acc, book) => {

      if (!acc[book.genre]) acc[book.genre] = 0;
      acc[book.genre]++;

      return acc
  }, {});


  const genres = Object.keys(countByGenre);
  let allGenres = [];

  for (let genre of genres) {
      let obj = {
          name: genre,
          count: countByGenre[genre],
      };
      allGenres.push(obj);
  }
  return sortByTop5(allGenres);
}

function getMostPopularBooks(books) {
 
  const popBooks = books.map((book) => ({
    name: book.title,
    count: book.borrows.length,
  }));

  return sortByTop5(popBooks);
}

function getMostPopularAuthors(books, authors) {
  const popAuthors = [];

  for (let author of authors) {
      const fullName = `${author.name.first} ${author.name.last}`;
      for (let book of books) {
          let borrowCount = 0
          if (author.id === book.authorId) {
              borrowCount += book.borrows.length
          }
          let obj = {
              name: fullName,
              count: borrowCount,
          }
          popAuthors.push(obj);
      }
  }
  return sortByTop5(popAuthors);
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
