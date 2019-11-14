<template>
  <div class="main">
      <div class="header4">  
        <h1>REGISTER</h1> 
    </div>
        <div class="headerRegis">
        <RegisterForm/>
        </div>
    
    
  </div>
</template>

<script>


import RegisterForm from "@/components/Register/RegisterForm.vue";

export default {
    components: {
        RegisterForm
    }
}

</script>