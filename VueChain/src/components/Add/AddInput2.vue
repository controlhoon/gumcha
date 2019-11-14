
<template>
  <div>
   <a-input addonBefore="carNo" v-model="data">
     <a-icon slot="prefix" type="file-text" />
   </a-input>
  </div>
</template>

<script>

export default {
  data: function() {
    return {
      data: ""
    }
  },
  methods: {
    getData: function() {
      return this.data;
    },
    clearData: function() {
      return this.data = '';
    }
  }
}
</script>

<style scoped>
</style>
