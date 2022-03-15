let web3 = new Web3(Web3.givenProvider);
web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.goerli.mudit.blog"));


var contract;
function initializeContract() {
	contract = new web3.eth.Contract(contractABI, contractAddress); //0x1b7e35ee9fAF386A0ae40685c8a2EC3f51ddFb32
	//contract.methods.name().call((err, result) => { console.log('Contract initialized: ' + result) });
}


let accounts = [];

const ethEnabled = () => {
	if (getAccount()) {
		switchButtonToWalletState();
		return true;
	}
	return false;
}


async function getAccount() {
  accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  return true;
}


function switchButtonToWalletState() {
	if (ethereum.isConnected()) {
		document.getElementById('btn-connect').style = 'display: none';
		document.getElementById('connected').style = 'display: block';
		document.getElementById('connected').innerHTML = ethereum.selectedAddress;
	} else {
		document.getElementById('btn-connect').style = 'display: block';
		document.getElementById('connected').style = 'display: none';
	}
}


initializeContract()