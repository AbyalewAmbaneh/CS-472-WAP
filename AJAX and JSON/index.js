$(function () {
  $("#TheForm").submit(function (e) {
      e.preventDefault();

      dataObj = {
        isbn: $("#ISBN").val(),
        title: $("#Booktitle").val(), 
        overdueFee: $("#Overdue").val(),
        publisher: $("#Publisher").val(), 
        datePublished: $("#Date").val(),
      };
      $.ajax({
          type: "POST",
          url: "https://elibraryrestapi.herokuapp.com/elibrary/api/book/add",
          data: JSON.stringify(dataObj),
          success: function (book) {
            addNewAccountDataRow(book.bookId, book.isbn, book.title, book.overdueFee, book.publisher, book.datePublished);
          },
          error: function (err) {
              console.log(err);
          },
          contentType: 'application/json',
          dataType: 'json'
      });
  });

  $.get("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list", function (books) {
         books.forEach((book, i) => {
          addNewAccountDataRow(book.bookId, book.isbn, book.title, book.overdueFee, book.publisher, book.datePublished);
      });
  });

  function addNewAccountDataRow(...data) {
      const tblAccounts = $("#tblRows");
      const tr = $("<tr>");
      data.forEach((value, key) => {
          if (key != "bookId") {
              const td = $("<td>", { text: value });
              tr.append(td);
          }
      });
      tblAccounts.append(tr);
  }
});

