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
        <span class="indexsp2" style="font-size: 15px">
            <OK/>
        </span>
        </div>
    </a-Card>
</template>

<script>
import OK from "@/components/Confirm/OkButton.vue";
import { mapActions } from "vuex";

export default {
    props: {
        index: Number,
        hash: String,
        previousHash: String,
        carNoanddata: String,
        timestamp:Number,
        carHash: String,
        clickEvent: String
    },

    components: {
        OK
    },

    data: function () {
        return { 
            inputData: this.data
        }
    },
    methods: {
        ...mapActions([
            'RequestAddBlock',
            'SearchCarNo'
        ]),
        click: function() {
            if( this.clickEvent == "RequestAddBlock") {
                this.RequestAddBlock(this.$refs.AddInput.getData());
                this.$refs.AddInput.clearData();
            } else {
                if( this.clickEvent == "SearchCarNo"){
                    this.SearhCarNo(this.$refs.AddInput.getData());
                    this.$refs.AddInput.clickData();
                }
                else{
                
                this.$block.createNewBlock(this.$refs.AddInput.getData());
                this.$refs.AddInput.clearData();

            }}
            
        }
    }
}


</script>

<style scoped>
@import '../Add/AddCard.css';
@import './ConfirmCard.css';

</style>