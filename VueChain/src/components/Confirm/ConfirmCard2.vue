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
import OK from "@/components/Confirm/OkButton.vue";
import { mapActions } from "vuex";

export default {
    props: {
        index: Number,
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
            'SearchCarNo'
        ]),
        click: function() {
            if( this.clickEvent == "SearchCarNo") {
                this.SearchCarNo(this.$refs.AddInput.getData());
                this.$refs.AddInput.clearData();
            } else {
                this.$refs.AddInput.clearData();

            }
        }
    }
}


</script>

<style scoped>
@import '../Add/AddCard.css';
@import './ConfirmCard.css';

</style>