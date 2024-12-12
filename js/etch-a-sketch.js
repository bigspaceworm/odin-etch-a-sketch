const BLOCK_SIZE = 15;
const sketchContainer = document.querySelector("#sketchContainer");
// Initial grid
createGrid(16);

function createGrid(gridSize) {
	const containerSize = (gridSize * BLOCK_SIZE);

	sketchContainer.style.height = containerSize + "px";
	sketchContainer.style.width = containerSize + "px";

	for(let i = 0; i < gridSize * gridSize; i++){
		const block = document.createElement("div");
		block.classList.add("block");

		sketchContainer.appendChild(block);
	}
}

function clearGrid() {
	while(sketchContainer.firstChild){
		sketchContainer.removeChild(sketchContainer.lastChild);
	}
}

function getGridSize() {
	const inputField = document.querySelector("#uiContainer").querySelector(".gridSize").querySelector("#gridSize");

	return inputField.value;
}

const btnGetSize = document.querySelector("#uiContainer").querySelector(".gridSize").querySelector("button");

btnGetSize.addEventListener("click", () => {
	console.log("DEBUG: button clik")
	clearGrid();
	createGrid(getGridSize());
});
