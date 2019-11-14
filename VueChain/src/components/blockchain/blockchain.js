const CryptoJS = require("crypto-js");

class Block{
  constructor(index, hash, previousHash,timestamp, carNoanddata, carHash){
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.carNoanddata = carNoanddata;
    this.carHash = carHash;
  }
}

// const nowTime= (new Date).getTime().now / 1000;

const genesisBlock = new Block(
  0,
  "2C4CEB90344F20CC4C77D626247AED3ED530C1AEE3E6E85AD494498B17414CAC",
  null,
  1520312194926,
  "ex) 12거1234,침수사고 (띄어쓰기 x) ",
  "098F62D6FAB2E1B4D87E5A6C78DF5E083408E2F84DB7E1B1EE5C3A7CD3299895"
);

let blockchain = [genesisBlock];

const getLastBlock = () => blockchain[blockchain.length - 1];

const getTimestamp = () => new Date().toString();

export const getBlockchain = () => blockchain;

const getcarNoHash = (carNoanddata) => {
  const jbString = carNoanddata;
  const jbSplit = jbString.split(',');
  
  const carHash = CryptoJS.SHA256(JSON.stringify(jbSplit[0])).toString();
  return carHash;
}

const createHash = (index, previousHash, timestamp, carNoanddata)=>
  CryptoJS.SHA256(
    index + previousHash + timestamp + JSON.stringify(carNoanddata)
  ).toString();

export const createNewBlock = (carNoanddata) => {
  const previousBlock = getLastBlock();
  const newBlockIndex = previousBlock.index + 1;
  const newTimestamp = getTimestamp();
  const carHash = getcarNoHash();
  const newHash = createHash(
    newBlockIndex,
    previousBlock.hash,
    newTimestamp,
    carNoanddata
  );
  const newBlock = new Block(
    newBlockIndex,
    newHash,
    previousBlock.hash,
    newTimestamp,
    carNoanddata,
    carHash
  );
  addBlockToChain(newBlock);
  return newBlock;
};

const getBlockHash = block =>
  createHash(block.index, block.previousHash,block.timestamp, block.carNoanddata);

const isNewBlockValid = (candidateBlock, latestBlock) => {
  if(!isNewStructureValid(candidateBlock)){
    console.log("The candidate block structure is not valid")
    return false;
  }else if(latestBlock.index + 1 !== candidateBlock.index){
    console.log("The candidate block doesnt have a valid index")
    return false;
  }else if(latestBlock.hash !== candidateBlock.previousHash){
    console.log(
      "The previousHash of the candidate block is not the latest block"
    );
    return false;
  }else if(getBlockHash(candidateBlock) !== candidateBlock.hash){
    console.log("The hash of this block is invalid");
    return false;
  }
  return true;
};

const isNewStructureValid = (block) => {
  console.log(typeof block.index);
  console.log(typeof block.hash);
  console.log(typeof block.previousHash);
  console.log(typeof block.timestamp);

  return (
    typeof block.index === "number" &&
    typeof block.hash === "string" &&
    typeof block.previousHash === "string" &&
    typeof block.timestamp === "number" &&
    typeof block.carNoanddata === "string" &&
    typeof block.carHash === "string"
  );
};

const isChainValid = (candidateChain) => {
  const isGenesisValid = block => {
    return JSON.stringify(block) === JSON.stringify(genesisBlock);
  };
  if(!isGenesisValid(candidateChain[0])){
    console.log(
      "The candidateChain's genesisBlock is not the same as ourr genesisBlock"
    );
    return false;
  }
  //제네시스 블록을 검증하고 싶지 않긱 때문에 i=1부터 시작
  for(let i= 1; i < candidateChain.length; i++){
    if(!isNewBlockValid(candidateChain[i], candidateChain[i - 1])){
      return false;
    }
  }
  return true;
};

const addBlockToChain = candidateBlock => {
  if(isNewBlockValid(candidateBlock, getLastBlock())){
    getBlockchain().push(candidateBlock);
    return true;
  } else {
    return false;
  }
};

