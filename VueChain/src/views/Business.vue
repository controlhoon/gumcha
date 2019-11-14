<template>
    <div>
        <div class="main">
            <div class="header">
                <h2>차량 사고이력 기록</h2>
                <p>차량 및 차대번호에 대한 사고이력 기록</p>
            </div>
            <div class="header3">
                <div class="buttonsBusiness">
                    <div class="butrightBusiness">
                     <h3>사고 기록</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="header2">
            <Block v-for="block in blockchain"
                :key="block.index" 
                v-bind="block">
            </Block>
            <AddCard clickEvent="RequestAddBlock"/>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions, mapMutations } from "vuex";
import AddCard from "@/components/Add/AddCard.vue";
import Block from "@/components/Block/Block.vue";

export default {
    computed: {
        ...mapState({
            blockchain: state => state.blockchain,
            user: state => state.user
        }),
    },
    components: {
        AddCard,
        Block
    },
    methods: {
        ...mapMutations(['setUser']),
        ...mapActions(['RequestBlockchainSync']),
    },
    created: function() {
        if(!(this.$cookies.get('user') === null)) {
            this.$http.get("/api/checkUser")
            .then((response) => {
                this.setUser(response.data);

                if(!this.$store.state.user.nickname) {
                    this.$router.push("/login");     
                } else {
                    this.RequestBlockchainSync(); 
                }
            });    
        } else {
            if(this.$cookies.get('user')){
                this.RequestBlockchainSync();
            } else {
                this.$router.push('/login');
            }
        }
   }
}

</script>

<style scoped>
</style>