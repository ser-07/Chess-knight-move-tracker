import React, { useState } from "react";
import Board from "./components/Board";
import "./App.css";
import Switch from "react-switch";
import { FaMoon, FaSun } from "react-icons/fa";

function App() {
  const [selectedCell, setSelectedCell] = useState();
  const [movableCells, setMovableCells] = useState([]);
  const [theme, setTheme] = useState("light");

  const handleThemeChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    console.log(theme);
  };

  const handleSelection = (k) => {
    // console.log(k);
    setSelectedCell(k);

    //Find the movable cells
    let [
      top_one,
      top_two,
      left_one,
      left_two,
      bottom_one,
      bottom_two,
      right_one,
      right_two,
    ] = [0, 0, 0, 0, 0, 0, 0, 0];

    // Row and column numbers of a cell:
    const rownum = Math.ceil(k / 8);
    const colnum = 8 - (rownum * 8 - k);

    // boundaries corresponding to cells:

    const left_boundary = (rownum - 1) * 8 + 1;
    const right_boundary = (rownum - 1) * 8 + 8;

    const top_boundary = colnum;
    const bottom_boundary = 64 - (rownum * 8 - k);

    // console.log(
    //   "k",
    //   k,
    //   "rownum:",
    //   rownum,
    //   "colnum",
    //   colnum,
    //   "left_boundary",
    //   left_boundary,
    //   "right boundary",
    //   right_boundary,
    //   "top boundary:",
    //   top_boundary,
    //   "bottom boundary",
    //   bottom_boundary
    // );

    top_one =
      k - 16 <= 0 ? null : k - 16 - 1 < left_boundary - 16 ? null : k - 16 - 1;
    top_two =
      k - 16 <= 0 ? null : k - 16 + 1 > right_boundary - 16 ? null : k - 16 + 1;
    left_one =
      k - 2 <= 0
        ? null
        : k - 2 < left_boundary
        ? null
        : k - 2 + 8 > bottom_boundary - 2
        ? null
        : k - 2 + 8;
    left_two =
      k - 2 <= 0
        ? null
        : k - 2 < left_boundary
        ? null
        : k - 2 - 8 < top_boundary - 2
        ? null
        : k - 2 - 8 <= 0
        ? null
        : k - 2 - 8;
    bottom_one =
      k + 16 > bottom_boundary
        ? null
        : k + 16 - 1 < left_boundary + 16
        ? null
        : k + 16 - 1;
    bottom_two =
      k + 16 > bottom_boundary
        ? null
        : k + 16 + 1 > right_boundary + 16
        ? null
        : k + 16 + 1;
    right_one =
      k + 2 > right_boundary
        ? null
        : k + 2 + 8 > bottom_boundary + 2
        ? null
        : k + 2 + 8;
    right_two =
      k + 2 > right_boundary
        ? null
        : k + 2 - 8 < top_boundary + 2
        ? null
        : k + 2 - 8 <= 0
        ? null
        : k + 2 - 8;

    setMovableCells(
      [
        top_one,
        top_two,
        left_one,
        left_two,
        bottom_one,
        bottom_two,
        right_one,
        right_two,
      ].filter((x) => x != null)
    );
  };

  return (
    <div className="App" id={theme}>
      <div className="header">
        {theme === "light" ? <FaSun /> : <FaSun color="White" />}
        <Switch onChange={handleThemeChange} checked={theme === "dark"} />
        {theme === "light" ? <FaMoon /> : <FaMoon color="white" />}
      </div>
      <h1 id={theme}>Roc8 Moonshot - Chess Board Knight movement</h1>
      <Board
        selectedCell={selectedCell}
        handleSelection={handleSelection}
        movableCells={movableCells}
        theme={theme}
      />
    </div>
  );
}

export default App;
