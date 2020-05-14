<template>
  <div class="footer text-center">
    <ul class="list-unstyled">
      <li>
        <i class="fab fa-facebook fa-lg fa-fw"></i>
      </li>
      <li>
        <i class="fab fa-twitter fa-lg fa-fw"></i>
      </li>
      <li>
        <i class="fab fa-dribbble fa-lg fa-fw"></i>
      </li>
      <li>
        <i class="fab fa-instagram fa-lg fa-fw"></i>
      </li>
    </ul>
    <p>2016-2017 © Design by Unvab. Code by nK</p>
  </div>
</template>
<script>
export default {
  name: "footer",
};
</script>
<style lang="scss" scoped>
.footer {
  background: #ddd;
  padding: 80px 0 40px;
  ul {
    width: 200px;
    margin: auto;
    li {
        display: inline-block;
        margin-right: 5px;
        color: gray;
    }
  }
  p{
      margin-top: 40px;
  }
}
</style>
