<template>
    <a-card class="mine1 is-valid mine-shadow">

        <div class="items">
            <AddInput ref="AddInput"/>
            <AddButton v-on:click="click"/>
        </div>

    </a-Card>
</template>

<script>
// @ is an alias to /src
import AddInput from "@/components/Add/AddInput.vue";
import AddButton from "@/components/Add/AddButton.vue";
import ConfirmCard from "@/components/Confirm/ConfirmCard.vue";
import { mapActions } from "vuex";

export default {
    props: {
        clickEvent: String
    },
    components: {
        AddInput,
        AddButton,
        ConfirmCard
    },
    methods: {
        ...mapActions([
            'RequestAddBlock'
        ]),
        click: function() {
            if( this.clickEvent == "RequestAddBlock") {
                //this.RequestAddBlock(this.$refs.AddInput.getData());
                //this.$refs.AddInput.clearData();


//addblock 클릭 누르고 agree 시 
                if( confirm('agreed?') == true ){
                    alert("connect Chain");
                    this.RequestAddBlock(this.$refs.AddInput.getData());
                    this.$refs.AddInput.clearData();
                    //window.location.reload();
                }else{
                    alert("disconnect Chain");
                }
            } else {
                this.$block.createNewBlock(this.$refs.AddInput.getData());
                this.$refs.AddInput.clearData();
            }
        }
    }
}

/* 수정
 if( this.clickEvent == "RequestAddBlock") {
                //this.RequestAddBlock(this.$refs.AddInput.getData());
                //this.$refs.AddInput.clearData();
                if( confirm('agreed?') == true ){
                    alert("connect Chain");
                    this.RequestAddBlock(this.$refs.AddInput.getData());
                    this.$refs.AddInput.clearData();
                    window.location.reload();
                }else{
                    alert("disconnect Chain");
                }
            } else {
                this.$block.createNewBlock(this.$refs.AddInput.getData());
                this.$refs.AddInput.clearData();
            }*/

            /* 기존
            if( this.clickEvent == "RequestAddBlock") {

                this.RequestAddBlock(this.$refs.AddInput.getData());
                this.$refs.AddInput.clearData();
            } else {
                this.$block.createNewBlock(this.$refs.AddInput.getData());
                this.$refs.AddInput.clearData();
            }*/
</script>

<style scoped>
@import 'AddCard.css';

</style>
