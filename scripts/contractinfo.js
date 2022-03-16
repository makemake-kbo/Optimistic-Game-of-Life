const contractAddress = '0x5A00D05bA499d5113959dF92f8F6ca62C0269F3D';

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
		"inputs": [],
		"name": "evaluate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "evaluated",
		"type": "event"
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
	}
];