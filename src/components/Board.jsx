import React from "react";
import "../App.css";
import { FaChessKnight } from "react-icons/fa";

const Board = ({ selectedCell, handleSelection, movableCells, theme }) => {
  //   const arr = [...movableCells];

  //   console.log(movableCells.includes(11));

  const createCName = (num, col) => {
    // console.log(num, movableCells, movableCells.includes());
    let name = "";
    if (selectedCell === num) name = "cell-true" + "-" + theme;
    else if (movableCells.includes(num) === true)
      name = "cell-move" + "-" + theme;
    else name = col + "-" + theme;
    console.log(name);
    return name;
  };

  return (
    <div className="container">
      <div
        className={createCName(1, "cell-white")}
        onClick={() => handleSelection(1)}
      >
        {selectedCell === 1 ? <FaChessKnight size="3em" color="white" /> : null}
      </div>
      <div
        className={createCName(2, "cell-black")}
        onClick={() => handleSelection(2)}
      >
        {selectedCell === 2 ? <FaChessKnight size="3em" color="white" /> : null}
      </div>
      <div
        className={createCName(3, "cell-white")}
        onClick={() => handleSelection(3)}
      >
        {selectedCell === 3 ? <FaChessKnight size="3em" color="white" /> : null}
      </div>
      <div
        className={createCName(4, "cell-black")}
        onClick={() => handleSelection(4)}
      >
        {selectedCell === 4 ? <FaChessKnight size="3em" color="white" /> : null}
      </div>
      <div
        className={createCName(5, "cell-white")}
        onClick={() => handleSelection(5)}
      >
        {selectedCell === 5 ? <FaChessKnight size="3em" color="white" /> : null}
      </div>
      <div
        className={createCName(6, "cell-black")}
        onClick={() => handleSelection(6)}
      >
        {selectedCell === 6 ? <FaChessKnight size="3em" color="white" /> : null}
      </div>
      <div
        className={createCName(7, "cell-white")}
        onClick={() => handleSelection(7)}
      >
        {selectedCell === 7 ? <FaChessKnight size="3em" color="white" /> : null}
      </div>
      <div
        className={createCName(8, "cell-black")}
        onClick={() => handleSelection(8)}
      >
        {selectedCell === 8 ? <FaChessKnight size="3em" color="white" /> : null}
      </div>

      <div
        className={createCName(9, "cell-black")}
        onClick={() => handleSelection(9)}
      >
        {selectedCell === 9 ? <FaChessKnight size="3em" color="white" /> : null}
      </div>
      <div
        className={createCName(10, "cell-white")}
        onClick={() => handleSelection(10)}
      >
        {selectedCell === 10 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(11, "cell-black")}
        onClick={() => handleSelection(11)}
      >
        {selectedCell === 11 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(12, "cell-white")}
        onClick={() => handleSelection(12)}
      >
        {selectedCell === 12 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(13, "cell-black")}
        onClick={() => handleSelection(13)}
      >
        {selectedCell === 13 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(14, "cell-white")}
        onClick={() => handleSelection(14)}
      >
        {selectedCell === 14 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(15, "cell-black")}
        onClick={() => handleSelection(15)}
      >
        {selectedCell === 15 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(16, "cell-white")}
        onClick={() => handleSelection(16)}
      >
        {selectedCell === 16 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>

      <div
        className={createCName(17, "cell-white")}
        onClick={() => handleSelection(17)}
      >
        {selectedCell === 17 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(18, "cell-black")}
        onClick={() => handleSelection(18)}
      >
        {selectedCell === 18 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(19, "cell-white")}
        onClick={() => handleSelection(19)}
      >
        {selectedCell === 19 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(20, "cell-black")}
        onClick={() => handleSelection(20)}
      >
        {selectedCell === 20 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(21, "cell-white")}
        onClick={() => handleSelection(21)}
      >
        {selectedCell === 21 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(22, "cell-black")}
        onClick={() => handleSelection(22)}
      >
        {selectedCell === 22 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(23, "cell-white")}
        onClick={() => handleSelection(23)}
      >
        {selectedCell === 23 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(24, "cell-black")}
        onClick={() => handleSelection(24)}
      >
        {selectedCell === 24 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>

      <div
        className={createCName(25, "cell-black")}
        onClick={() => handleSelection(25)}
      >
        {selectedCell === 25 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(26, "cell-white")}
        onClick={() => handleSelection(26)}
      >
        {selectedCell === 26 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(27, "cell-black")}
        onClick={() => handleSelection(27)}
      >
        {selectedCell === 27 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(28, "cell-white")}
        onClick={() => handleSelection(28)}
      >
        {selectedCell === 28 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(29, "cell-black")}
        onClick={() => handleSelection(29)}
      >
        {selectedCell === 29 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(30, "cell-white")}
        onClick={() => handleSelection(30)}
      >
        {selectedCell === 30 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(31, "cell-black")}
        onClick={() => handleSelection(31)}
      >
        {selectedCell === 31 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(32, "cell-white")}
        onClick={() => handleSelection(32)}
      >
        {selectedCell === 32 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>

      <div
        className={createCName(33, "cell-white")}
        onClick={() => handleSelection(33)}
      >
        {selectedCell === 33 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(34, "cell-black")}
        onClick={() => handleSelection(34)}
      >
        {selectedCell === 34 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(35, "cell-white")}
        onClick={() => handleSelection(35)}
      >
        {selectedCell === 35 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(36, "cell-black")}
        onClick={() => handleSelection(36)}
      >
        {selectedCell === 36 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(37, "cell-white")}
        onClick={() => handleSelection(37)}
      >
        {selectedCell === 37 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(38, "cell-black")}
        onClick={() => handleSelection(38)}
      >
        {selectedCell === 38 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(39, "cell-white")}
        onClick={() => handleSelection(39)}
      >
        {selectedCell === 39 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(40, "cell-black")}
        onClick={() => handleSelection(40)}
      >
        {selectedCell === 40 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>

      <div
        className={createCName(41, "cell-black")}
        onClick={() => handleSelection(41)}
      >
        {selectedCell === 41 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(42, "cell-white")}
        onClick={() => handleSelection(42)}
      >
        {selectedCell === 42 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(43, "cell-black")}
        onClick={() => handleSelection(43)}
      >
        {selectedCell === 43 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(44, "cell-white")}
        onClick={() => handleSelection(44)}
      >
        {selectedCell === 44 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(45, "cell-black")}
        onClick={() => handleSelection(45)}
      >
        {selectedCell === 45 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(46, "cell-white")}
        onClick={() => handleSelection(46)}
      >
        {selectedCell === 46 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(47, "cell-black")}
        onClick={() => handleSelection(47)}
      >
        {selectedCell === 47 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(48, "cell-white")}
        onClick={() => handleSelection(48)}
      >
        {selectedCell === 48 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>

      <div
        className={createCName(49, "cell-white")}
        onClick={() => handleSelection(49)}
      >
        {selectedCell === 49 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(50, "cell-black")}
        onClick={() => handleSelection(50)}
      >
        {selectedCell === 50 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(51, "cell-white")}
        onClick={() => handleSelection(51)}
      >
        {selectedCell === 51 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(52, "cell-black")}
        onClick={() => handleSelection(52)}
      >
        {selectedCell === 52 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(53, "cell-white")}
        onClick={() => handleSelection(53)}
      >
        {selectedCell === 53 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(54, "cell-black")}
        onClick={() => handleSelection(54)}
      >
        {selectedCell === 54 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(55, "cell-white")}
        onClick={() => handleSelection(55)}
      >
        {selectedCell === 55 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(56, "cell-black")}
        onClick={() => handleSelection(56)}
      >
        {selectedCell === 56 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>

      <div
        className={createCName(57, "cell-black")}
        onClick={() => handleSelection(57)}
      >
        {selectedCell === 57 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(58, "cell-white")}
        onClick={() => handleSelection(58)}
      >
        {selectedCell === 58 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(59, "cell-black")}
        onClick={() => handleSelection(59)}
      >
        {selectedCell === 59 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(60, "cell-white")}
        onClick={() => handleSelection(60)}
      >
        {selectedCell === 60 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(61, "cell-black")}
        onClick={() => handleSelection(61)}
      >
        {selectedCell === 61 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(62, "cell-white")}
        onClick={() => handleSelection(62)}
      >
        {selectedCell === 62 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(63, "cell-black")}
        onClick={() => handleSelection(63)}
      >
        {selectedCell === 63 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
      <div
        className={createCName(64, "cell-white")}
        onClick={() => handleSelection(64)}
      >
        {selectedCell === 64 ? (
          <FaChessKnight size="3em" color="white" />
        ) : null}
      </div>
    </div>
  );
};

export default Board;
