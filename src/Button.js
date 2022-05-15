const Button = (props) => {
  const { pageNumber, setPageNumber, limit, length } = props;
  let pageButton = [];
  for (let i = 1; i <= Math.ceil(length / limit); i++) {
    pageButton[i] = i;
  }

  return (
    <div className="button-container">
      <button
        className="button-size"
        disabled={pageNumber === 1}
        onClick={() => setPageNumber(pageNumber - 1)}
      >
        Previous
      </button>
      {pageButton.map((element, idx) => (
        <button
          className="button-size"
          onClick={() => setPageNumber(Number(element))}
          key={idx}
        >
          {element}
        </button>
      ))}
      <button
        className="button-size"
        disabled={pageNumber === Math.ceil(length / limit)}
        onClick={() => setPageNumber(pageNumber + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Button;
