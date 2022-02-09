class BookLibrary{
    createNewBook(){
        console.log("here in method");
        let book_name=bk_name.value;
        let author_name=a_name.value;
        let book_price=bk_price.value;
        let book_copy=bk_stck.value;
        let book={
            book_name,
            author_name,
            book_price,
            book_copy
        }
        localStorage.setItem(book.book_name,JSON.stringify(book))
        this.listAllBooks()

    }
     displayBooks(books){
        let html_data=``;
        for(let book of books){
            html_data+=`
            <tr>
            <td>${book.book_name}</td>
            <td>${book.author_name}</td>
            <td>${book.book_price}</td>
            <td>${book.book_copy}</td>
        </tr>`
        }
        document.querySelector("#result").innerHTML=html_data

    }
    listAllBooks(){
        let books=[];
        for(let i=0;i<localStorage.length;i++){
            let key=localStorage.key(i)
            let book=JSON.parse(localStorage.getItem(key))
            books.push(book)
        }
        this.displayBooks(books)
    }
    findBook(){
        let book_name=b_name.value;
        let html_data=``
        if(book_name in localStorage){
            let book=JSON.parse(localStorage.getItem(book_name))

            html_data=`<p> bookname:${book.book_name}</p>
            <p> bookname:${book.author_name}</p>
            <p> bookname:${book.book_price}</p>
            <p> bookname:${book.book_copy}</p

            `
            
        }
        else{
            html_data=`<p>no data found</p>`

        }
        document.querySelector("#result-section").innerHTML=html_data

    }
    
}
var book=new BookLibrary
window.onload=book.listAllBooks()
