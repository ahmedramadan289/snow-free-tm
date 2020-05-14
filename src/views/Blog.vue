<template>
    <div class="blog">
        <BlogPost />
        <FooterComp />
    </div>
</template>
<script>
import BlogPost from "@/components/blogPost.vue";
import FooterComp from "@/components/global/footerComp.vue";
export default {
    nmae:"Blog",
    components:{
        BlogPost,
        FooterComp
    }
}
</script>