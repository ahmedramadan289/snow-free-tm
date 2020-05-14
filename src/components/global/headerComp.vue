<template>
  <div class="header">
    <div class="container">
      <div class="brand float-left">
        <a href="/about">Snow</a>
      </div>
      <ul class="navbar float-left">
        <router-link to="/about" exact tag="li">About</router-link>
        <router-link to="/contact" tag="li">Contact</router-link>
        <router-link to="/portfolio" tag="li">Portfolio</router-link>
        <router-link to="/blog" tag="li">Blog</router-link>
        <router-link to="/wordpress" tag="li">
          Wordpress Theme
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style lang="scss" scoped>
.header {
  position: relative;
  z-index: 2;
  .brand {
    width: 400px;
    padding: 20px 0;
    a {
      color: #fff;
      text-decoration: none;
      font-size: 1.5rem;
    }
  }
  .navbar {
    width: calc(100% - 400px);
    padding: 20px 0;
    li {
      cursor: pointer;
      color: gray;

      &:hover {
        color: #fff;
      }
    }
  }
}
</style>
