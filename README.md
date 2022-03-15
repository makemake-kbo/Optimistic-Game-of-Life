# Optimistic Ethereum Game of Life

## What?
This is an implementation of <a href="https://en.wikipedia.org/wiki/Conway's_Game_of_Life"><u>Conway's game of life</u></a>, written in solidity and running on Optimistic Ethereum.   
The rules are:   
		<ol>
			<li>Any live cell with fewer than two live neighbours dies, as if by underpopulation.</li>
			<li>Any live cell with two or three live neighbours lives on to the next generation.</li>
			<li>Any live cell with more than three live neighbours dies, as if by overpopulation.</li>
			<li>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
		</ol>
You can only reset the board to its starting position and advance by one step at a time.

## Frontend
The frontend is currently hosted <a href="https://makemake-kbo.github.io/Optimistic-Game-of-Life/"><u>here</u></a>.

You can also host your own by cloning the repository and serving the `index.html` file.

## Contributing
If you find any bugs or have a suggestion, please open an issue. I also accept PR's so if you'd like to implement a feature feel free to open a PR.