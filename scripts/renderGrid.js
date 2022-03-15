grid = [];


function getGridRow(value) {
	contract.methods.viewRow(value).call((err, result) => { console.log(result) });
}

function createCell(value) {
	var div = document.createElement("div");

	div.style.width = "100px";
	div.style.height = "100px";
	div.style.background = value;

	return div;
}

async function renderGrid() {
	let htmlGrid = document.getElementById('grid');
	htmlGrid.innerHTML = '';
	grid = [];

	for (var i = 1; i < 6; i++) {
		let buf = await contract.methods.viewRow(i).call();
		grid = [...grid, buf.valueOf()];
	}

	for (var i = 0; i < 5; i++) {
		var div = document.createElement("div");

		for (var j = 1; j < 6; j++) {
			if (grid[i][j] == 1) {
				div.appendChild(createCell('green'));
			} else {
				div.appendChild(createCell('#F0FFF0'));
			}
		}

		htmlGrid.appendChild(div);
	}
}
renderGrid()