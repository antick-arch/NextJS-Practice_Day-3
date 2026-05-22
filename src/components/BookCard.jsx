import Link from 'next/link';
import React from 'react';

const BookCard = ({book}) => {
    const { id, title, description, price } = book;
    return (
        <div className="card w-96 bg-base-100 card-md shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p>${price}</p>
                <div className="justify-end card-actions">
                    <button className="btn btn-primary"><Link href={`/books/${id}`}>Show Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default BookCard;