const contractAddress = '0x1D54216004D4cf75fbb335E9D5089D967742cec5';

const contractABI = [
{
	"inputs": [],
	"stateMutability": "nonpayable",
	"type": "constructor"
},
{
	"anonymous": false,
	"inputs": [],
	"name": "boardReset",
	"type": "event"
},
{
	"anonymous": false,
	"inputs": [],
	"name": "evaluated",
	"type": "event"
},
{
	"inputs": [],
	"name": "evaluate",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [],
	"name": "reset",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "uint8",
		"name": "i",
		"type": "uint8"
	}
	],
	"name": "viewRow",
	"outputs": [
	{
		"internalType": "uint8[7]",
		"name": "",
		"type": "uint8[7]"
	}
	],
	"stateMutability": "view",
	"type": "function"
}];
