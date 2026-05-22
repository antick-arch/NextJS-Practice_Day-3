const BookDetails = async({params}) => {
    const {bookId} = await params;
    const res = await fetch(`http://localhost:3004/books/${bookId}`);
    const book = await res.json();
    const {author,category,rating}=book;
    return (
        <div>
            <h2>{bookId}</h2>
            <h2>author: {author}</h2>
            <p>category: {category}</p>
            <p>rating: {rating}</p>
        </div>
    );
};

export default BookDetails;