import React, { useState } from 'react';

const Products = ({ productsData }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(4);

    // Calculate indexes for slicing the data array
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = productsData.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            {/* Display your paginated items */}
            {currentItems.map(item => (
                // render your item components here
                <div key={item.id}>{item.name}</div>
            ))}

            {/* Pagination controls */}
            <div>
                <button onClick={() => paginate(currentPage - 1)}>Previous</button>
                <button onClick={() => paginate(currentPage + 1)}>Next</button>
            </div>
        </div>
    );
};

export default Products;
