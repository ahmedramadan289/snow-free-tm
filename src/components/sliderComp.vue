<template>
  <div class="slider">
    <div class="overlay">
      <div class="intro text-center">
        <h5>New Branding Agency</h5>
        <p>We are about to change the way</p>
        <P>you publish on the web</P>
        <b-button class="free">Free Downlaod</b-button>
      </div>
      <i class="fas fa-chevron-down"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "slider",
};
</script>
<style lang="scss" scoped>
.slider {
  background: url("../assets/home-7.jpg") no-repeat center center;
  background-size: cover;
  height: 100vh;
  position: relative;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(2, 2, 2, 0.6);
    z-index: 1;
    color: #fff;
    .intro{
        margin: auto;
        padding: 60px 0;
        width: 600px;
       h5{
           text-transform: uppercase;
       }
       p:first-of-type{
           font-size: 2rem;
           font-family: 'Playfair Display SC', serif;

       }
       p{
           font-size: 1.5rem;
           font-family: 'Playfair Display SC', serif;

       }
       .free{
           padding: 10px 30px;
           background: #252525;
           outline: none;
           border: none;
           text-transform: uppercase;
       }
       
    }
    i{
        position: absolute;
        bottom: 20px ;
        left: 50%;
        padding: 10px;
        border: 1px solid #222;
        border-radius: 50%;
        cursor: pointer;
        &:hover{
            border-color: #fff;
        }
    }
  }
}
</style>
