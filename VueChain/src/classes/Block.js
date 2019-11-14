class Block {
    constructor(index, hash,previousHash,timestamp,carNoanddata,carHash,nonce){
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.carNoanddata = carNoanddata;
        this.carHash = carHash;
        this.nonce = nonce;
    }
}

export default Block;