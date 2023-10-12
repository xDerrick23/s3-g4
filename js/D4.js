const newTable = () => {
    const tabellone = document.getElementById("tabellone");
    for (let i = 1; i < 76; i++) {
      const cell = document.createElement("div");
      cell.textContent = i;
      cell.classList.add("cell");
      tabellone.appendChild(cell);
    }
    clearInterval.textContent = i;
  };
  
  newTable();