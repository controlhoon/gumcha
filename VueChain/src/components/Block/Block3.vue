<template>
    <a-card class="mine is-valid mine-shadow">
        <a-input addonBefore="carNo" v-model="inputData">
            <a-icon slot="prefix" type="file-text" />
        </a-input>
        <p></p>        
        <p>carHash: {{carHash}}</p>
        <!-- 여기에 검색한 결과 보여주는 VUE 넣어주면 될듯 -->
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
        carNoanddata:"ex) 12거1234,침수사고 (띄어쓰기 x) ",
        carHash: "098F62D6FAB2E1B4D87E5A6C78DF5E083408E2F84DB7E1B1EE5C3A7CD3299895"
    }
}

export default {
    props: {
        index: Number,
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

