<template>
  <a-button 
    class="mine-button animate"
    @click="click">
    <span> SEARCH CARNO </span>
  </a-button>
</template>

<script>

export default {
    methods: {
      click: function() {
        this.$emit("click");
      }
    }
}
</script>

<style scoped>
  @import 'AddButton.css';

  span {
    margin-left: "7.5px";
    color:"white";
  }
</style>