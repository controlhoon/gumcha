<template>
  <a-button
    @click="click">
    <span> OK </span>
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
  

  span {
    margin-left: "7.5px";
    color:"white";
  }
</style>