const BLOCK_SIZE = 15;
const GRID_SIDE = 550;
const sketchContainer = document.querySelector("#sketchContainer");
sketchContainer.style.height = GRID_SIDE + "px";
sketchContainer.style.width = GRID_SIDE + "px";

// Initial grid
createGrid(16);

function createGrid(gridSize) {
	// const containerSize = (gridSize * BLOCK_SIZE);

	// sketchContainer.style.height = containerSize + "px";
	// sketchContainer.style.width = containerSize + "px";
	let blockSide = GRID_SIDE / gridSize;

	for(let i = 0; i < gridSize * gridSize; i++){
		const block = document.createElement("div");
		block.classList.add("block");
		block.style.height = blockSide + "px";
		block.style.width = blockSide + "px";

		sketchContainer.appendChild(block);
	}

	gridColorChange();
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

function gridColorChange(){
	const gridBlocks = sketchContainer.querySelectorAll("div");

	gridBlocks.forEach((div) => {
		div.addEventListener("mouseover", () => {
			if(div.classList.contains("block")){
				div.classList.add("blockChangeColor");
			}
		});
	});
}
