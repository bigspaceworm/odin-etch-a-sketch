const BLOCK_SIZE = 15;
const GRID_SIDE = 550;
const BLOCK_INIT_OPACITY = 0.1;
let colorMode = "solid";
const sketchContainer = document.querySelector("#sketchContainer");
sketchContainer.style.height = GRID_SIDE + "px";
sketchContainer.style.width = GRID_SIDE + "px";

const btnOpacity = document.querySelector("#additiveOpacity").querySelector("button");
const btnSolid = document.querySelector("#solidColor").querySelector("button");

// Initial grid
createGrid(16);

function gridColorMode() {

	const gridBlocks = sketchContainer.querySelectorAll("div");

	gridBlocks.forEach((div) => {
		div.addEventListener("mouseover", () => {
			if(div.style.opacity != 1){
				if(colorMode === "solid") {
					div.style.opacity = 1;
				}
				else if(colorMode === "opacity") {
					div.style.opacity = parseFloat(div.style.opacity) + 0.1;
				}
			}
		});
	});
}

function createGrid(gridSize) {
	let blockSide = GRID_SIDE / gridSize;
	changeGridInfo(true, gridSize);

	for(let i = 0; i < gridSize * gridSize; i++){
		const block = document.createElement("div");
		block.classList.add("block");
		block.classList.add("blockSolidColor");
		block.style.opacity = BLOCK_INIT_OPACITY;
		block.style.height = blockSide + "px";
		block.style.width = blockSide + "px";

		sketchContainer.appendChild(block);
	}

	gridColorMode();
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

btnOpacity.addEventListener("click", () => {
	colorMode = "opacity";
});

btnSolid.addEventListener("click", () => {
	colorMode = "solid";
});