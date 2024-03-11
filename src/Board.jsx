function Square({ value }) {
  function handleClick() {
    console.log("clicked");
  }
  return (
    <button
      className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

function Board() {
  return (
    <>
      <div className="board flex justify-center mt-20">
        <div className="flex flex-wrap w-[11rem] justify-center">
          <Square value="1" />
          <Square value="2" />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    </>
  );
}

export default Board;
