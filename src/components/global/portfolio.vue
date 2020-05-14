<template>
    <!--Start Projects-->
    <div class="projects text-center">
      <div class="container">
        <h2>Best Projects</h2>
        <p>
          Donec orci sem, pretium ac dolor et, faucibus faucibus mauris.
          Etiam,pellentesque faucibus. Vestibulum gravida volutpat ipsum non
          ultrices.
        </p>
        <div class="row">
          <div class="col-md-4 config">
            <div class="overlay">
              <h2>Vinyl Record</h2>
              <p>Mockup</p>
            </div>
            <img
              src="../../assets/portfolio-4-sm.jpg"
              alt=""
              class="img-responsive"
            />
          </div>
          <div class="col-md-4 config">
            <div class="overlay">
              <h2>Vinyl Record</h2>
              <p>Mockup</p>
            </div>
            <img
              src="../../assets/portfolio-3-sm.jpg"
              alt=""
              class="img-responsive"
            />
          </div>
          <div class="col-md-4 config">
            <div class="overlay">
              <h2>Vinyl Record</h2>
              <p>Mockup</p>
            </div>
            <img
              src="../../assets/portfolio-4-sm.jpg"
              alt=""
              class="img-responsive"
            />
          </div>
        </div>

        <div class="row">
          <div class="col-md-4 config">
            <div class="overlay">
              <h2>Vinyl Record</h2>
              <p>Mockup</p>
            </div>
            <img
              src="../../assets/portfolio-7-sm.jpg"
              class="img-responsive"
            />
          </div>
          <div class="col-md-4 config">
            <div class="overlay">
              <h2>Vinyl Record</h2>
              <p>Mockup</p>
            </div>
            <img
              src="../../assets/portfolio-8-sm.jpg"
              alt=""
              class="img-responsive"
            />
          </div>
          <div class="col-md-4 config">
            <div class="overlay">
              <h2>Vinyl Record</h2>
              <p>Mockup</p>
            </div>
            <img
              src="../../assets/portfolio-7-sm.jpg"
              alt=""
              class="img-responsive"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 config">
            <div class="overlay">
              <h2>Vinyl Record</h2>
              <p>Mockup</p>
            </div>
            <img
              src="../../assets/portfolio-8-sm.jpg"
              alt=""
              class="img-responsive"
            />
          </div>
          <div class="col-md-4 config">
            <div class="overlay">
              <h2>Vinyl Record</h2>
              <p>Mockup</p>
            </div>
            <img
              src="../../assets/portfolio-9-sm.jpg"
              alt=""
              class="img-responsive"
            />
          </div>
          <div class="col-md-4 config">
            <div class="overlay">
              <h2>Vinyl Record</h2>
              <p>Mockup</p>
            </div>
            <img
              src="../../assets/portfolio-12-sm.jpg"
              alt=""
              class="img-responsive"
            />
          </div>
        </div>
      </div>
    </div>

    <!--End Projects-->
</template>
<script>
export default {
    name:"portfolio"
}
</script>
<style lang="scss" scoped>
.projects {
    padding: 80px 0;
    h2 {
      font-weight: bold;
      font-size: 2rem;
    }
    p {
      line-height: 1.5;
      margin: 25px 0 40px;
    }
    .config {
      padding-right: 0 !important;
      padding-left: 0 !important;
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
        display: none;
        color: #fff;
        padding: 100px 0;
        transition: all .5s ease-in-out;
      }
      &:hover .overlay {
        display: block;
      }
    }
  }
</style>