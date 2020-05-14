<template>
  <div class="Contact">
    <Contact /> 
    <FooterComp />
  </div>
</template>
<script>
import Contact from "@/components/contactInfo.vue";
import FooterComp from "@/components/global/footerComp.vue";


export default {
  nmae: "Contact Us",
  components: {
    Contact,
    FooterComp
    
  },
};
</script>

<style lang="scss" scoped>
    .contact-us{
        padding: 130px 0;
        
    }
</style>
