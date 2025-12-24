import { 
  makeContractDeploy,
  broadcastTransaction,
  AnchorMode 
} from '@stacks/transactions';
import { STACKS_TESTNET } from '@stacks/network';
import { readFileSync } from 'fs';
import { CONFIG } from './config.ts';

async function deployContract() {
  const network = STACKS_TESTNET;
  const contractSource = readFileSync('./contracts/coin-flip.clar', 'utf-8');
  
  const txOptions = {
    contractName: 'coin-flip',
    codeBody: contractSource,
    senderKey: CONFIG.PRIVATE_KEY,
    network,
    anchorMode: AnchorMode.Any,
    fee: 10000,
  };
  
  const transaction = await makeContractDeploy(txOptions);
  console.log("Transaction: ", transaction)
  const broadcastResponse = await broadcastTransaction({transaction, });
  
  console.log('Contract deployed!');
  console.log('Transaction ID:', broadcastResponse.txid);
  console.log('Contract address:', `${senderAddress}.${txOptions.contractName}`);
}

await deployContract();