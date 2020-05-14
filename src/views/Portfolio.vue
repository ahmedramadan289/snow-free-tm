<template>
    <div class="portfolio">
      <PortfolioComp />
      <FooterComp />
    </div>
</template>
<script>
import PortfolioComp from "@/components/global/portfolio.vue";
import FooterComp from "@/components/global/footerComp.vue";

export default {
    nmae:"Portfolio",
    components: {
      PortfolioComp,
      FooterComp
  },
}
</script>