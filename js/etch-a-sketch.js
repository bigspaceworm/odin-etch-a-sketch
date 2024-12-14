const BLOCK_SIZE = 15;
const GRID_SIDE = 550;
const sketchContainer = document.querySelector("#sketchContainer");
sketchContainer.style.height = GRID_SIDE + "px";
sketchContainer.style.width = GRID_SIDE + "px";

// Initial grid
createGrid(16);

function createGrid(gridSize) {
	let blockSide = GRID_SIDE / gridSize;
	changeGridInfo(true, gridSize);

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

function isValidGridSize(gridSize) {
	if(gridSize < 2 || gridSize > 100){
		return false;
	}
	else {
		return true;
	}
}

function changeGridInfo(validGrid, gridSize){
	const label = document.querySelector(".gridSize").querySelector("p");
	
	if(validGrid){
	label.textContent = "Current size: " + gridSize + " x " + gridSize;
	}
	else{
		label.textContent = "INVALID SIZE. Valid ranges: 2 - 100."
	}
}

const btnGetSize = document.querySelector("#uiContainer").querySelector(".gridSize").querySelector("button");

btnGetSize.addEventListener("click", () => {
	let validGrid = isValidGridSize(getGridSize());
	if(validGrid){
		clearGrid();
		createGrid(getGridSize());
	}
	else{
		changeGridInfo(validGrid, 0);
	}
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
