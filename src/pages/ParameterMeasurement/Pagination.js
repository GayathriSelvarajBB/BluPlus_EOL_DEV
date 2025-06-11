const Pagination = ({ RowsPerPage, Data, paginateData }) => {
   // eslint-disable-next-line sonarjs/no-unused-collection
   const pageNumbers = [];

   for (let i = 1; i <= Math.ceil(Data / RowsPerPage); i++) {
      console.log("math", Math.ceil(Data / RowsPerPage));
      pageNumbers.push(i);
   }
   return (
      <div className="pagination">
         <ul>
            {pageNumbers.map((page, index) => {
               return (
                  <li key={index} onClick={() => paginateData(page)}>
                     {page}
                  </li>
               );
            })}
         </ul>
      </div>
   );
};

export default Pagination;
