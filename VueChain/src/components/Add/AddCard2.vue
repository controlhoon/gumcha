<template>
    <a-card class="mine1 is-valid mine-shadow">

        <div class="items">
            <AddInput2 ref="AddInput2"/>
            <AddButton2 v-on:click="click2"/>
        </div>

    </a-Card>
</template>

<script>
// @ is an alias to /src
import AddInput2 from "@/components/Add/AddInput2.vue";
import AddButton2 from "@/components/Add/AddButton2.vue";
import ConfirmCard2 from "@/components/Confirm/ConfirmCard2.vue";
import { mapActions } from "vuex";

export default {
    props: {
        clickEvent: String
    },
    components: {
        AddInput2,
        AddButton2,
        ConfirmCard2
    },
    methods: {
        ...mapActions([
            'SearchCarNo'
        ]),
        click2: function(carno) {
            if( this.clickEvent == "SearchCarNo") {
                //this.SearchCarNo(this.$refs.AddInput.getData());
                //this.$refs.AddInput.clearData();

                if( confirm('agreed?') == true ){
                    alert("search CarNo");
                    this.SearchCarNo(this.$refs.AddInput2.getData());
                    this.$refs.AddInput2.clearData();
                    //window.location.reload();
                }else{
                    alert("disconnect");
                }
            } else {
                this.$refs.AddInput2.clearData();
            }
        }
    }
}

/* 수정
 if( this.clickEvent == "SearchCarNo") {
                //this.SearchCarNo(this.$refs.AddInput.getData());
                //this.$refs.AddInput.clearData();
                if( confirm('agreed?') == true ){
                    alert("connect Chain");
                    this.SearchCarNo(this.$refs.AddInput.getData());
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
            if( this.clickEvent == "SearchCarNo") {

                this.SearchCarNo(this.$refs.AddInput.getData());
                this.$refs.AddInput.clearData();
            } else {
                this.$block.createNewBlock(this.$refs.AddInput.getData());
                this.$refs.AddInput.clearData();
            }*/
</script>

<style scoped>
@import 'AddCard.css';

</style>
