<template>
    <a-card class="mine is-valid mine-shadow">
        <a-input addonBefore="carNoandData" v-model="inputData">
            <a-icon slot="prefix" type="file-text" />
        </a-input>
        <p></p>        
        <p>hash: {{hash}}</p>
        <p>previousHash: {{previousHash}}</p>
        <p>carHash: {{carHash}}</p>
        <div>
        <span class="indexsp" style="font-size: 30px">
        BLOCK #{{index}}
        </span>
        <span class="indexsp1" style="font-size: 15px">
        {{$moment(timestamp).format('LLL')}}
        </span>
        </div>
    </a-Card>
</template>

<script>

export function genesisblock() {
    return {
        index: 0,
        hash: "2C4CEB90344F20CC4C77D626247AED3ED530C1AEE3E6E85AD494498B17414CAC",
        previousHash:null,
        timestamp:1520312194926,
        carNoanddata:"ex) 12거1234,침수사고 (띄어쓰기 x) ",
        carHash: "098F62D6FAB2E1B4D87E5A6C78DF5E083408E2F84DB7E1B1EE5C3A7CD3299895"
    }
}

export default {
    props: {
        index: Number,
        hash: String,
        previousHash: String,
        timestamp:Number,
        carNoanddata: String,
        carHash: String
    },

    data: function () {
        return { 
            inputData: this.carNoanddata
        }
    }
}


</script>

<style scoped>
@import '../Add/AddCard.css';
@import './Block.css';

</style>

