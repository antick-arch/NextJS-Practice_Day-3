import BookCard from "@/components/BookCard";

const getBooks= async() =>{
    const res = await fetch('http://localhost:3004/books');
    return res.json();
}

const BookPage = async() => {
    const books = await getBooks()
    return (
        <div className="grid grid-cols-4 gap-3 place-items-center mt-5">
            {
                books.map((book)=><BookCard key={book.id} book={book}></BookCard>)
            }
        </div>
    );
};

export default BookPage;