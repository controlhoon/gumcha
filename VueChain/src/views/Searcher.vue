<template>
    <div>
        <div class="main2">
            <div class="header">
                <h2>사고 이력 검색</h2>
                <p>차량번호에 따른 사고이력 검색</p>
            </div>
        </div>        
        <center>
            <br><br><br>
            <div class="header2-1">
                <Block2 v-for="block in blockchain"
                  :key="block.index" 
                 v-bind="block">
                </Block2>
                <AddCard2 clickEvent="SearchCarNo" />
            </div>

            <br><br><br><br><br>
        </center>
    </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from "vuex";
import AddCard2 from "@/components/Add/AddCard2.vue";
import Block2 from "@/components/Block/Block2.vue";

export default {
    components: {
        AddCard2
    }
}
</script>