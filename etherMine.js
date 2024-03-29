//This program uses the web3 library to connect to a local Ganache instance via HTTP, retrieves the coinbase address for the first account, and continuously sends empty transactions //to the coinbase address to simulate mining. Note that this is just a basic example and there are many more factors to consider when mining ether, such as gas prices, difficulty, //and block rewards.
//npm install web3
//node ethermine.js
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545')); // Replace with your Ganache HTTP provider

async function mine() {
  const accounts = await web3.eth.getAccounts();
  const coinbaseacc1 = accounts[0];
  const coinbaseacc2 = accounts[1];

  console.log(`Mining ether on Ganache with coinbase address: ${coinbaseacc1}`);

  while (true) {
    try {
      await web3.eth.sendTransaction({
        from: coinbaseacc1,
        to: coinbaseacc2,
        value: 50,
      });

      console.log(`Mined a new block!`);
    } catch (err) {
      console.error(err);
    }
  }
}

mine();
