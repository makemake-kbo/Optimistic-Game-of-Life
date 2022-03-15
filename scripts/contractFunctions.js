const advanceButton = document.getElementById('advanceButton');

advanceButton.addEventListener('click', () => {
    ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [
      {
        from: accounts[0],
        to: contractAddress,
        data: contract.methods.evaluate().encodeABI(),
      },
      ],
    })
    .then((txHash) => {console.log(txHash); renderGrid();})
    .catch((error) => console.error);
});


const resetButton = document.getElementById('resetButton');

resetButton.addEventListener('click', () => {
    ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [
      {
        from: accounts[0],
        to: contractAddress,
        data: contract.methods.reset().encodeABI(),
      },
      ],
    })
    .then((txHash) => {console.log(txHash); renderGrid();})
    .catch((error) => console.error);
});
