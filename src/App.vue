<template>
  <div id="app">
   <HeaderComp />
        
    <router-view />
  </div>
</template>
<script>
import HeaderComp from "@/components/global/headerComp.vue";

export default {
  name:"app",
  components:{
    HeaderComp,
    
  }
  
}
</script>
