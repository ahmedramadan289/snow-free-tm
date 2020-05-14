<template>
  <div class="about">
    <SliderComp />
    <!--Start About Our Agency-->
    <div class="about-our-agency text-center">
      <div class="container">
        <h2>About Our Agency</h2>
        <p>
          We are a new design studio based in USA. We have over 20 years of
          combined experience, and know a thing or two about designing websites
          and mobile apps. Clever use of technology and lean processes enable us
          to work faster and smarter.
        </p>
        <img src="../assets/about-me-signature .png" alt="" />
      </div>
    </div>
    <!--ENd About Our Agency-->

    <!--Start rates-->
    <div class="rate-us">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <i class="fa fa-briefcase fa-3x fa-fw float-left"></i>
            <div class="info float-left">
              <span>548</span>
              <p>PROJECTS COMPLETED</p>
            </div>
          </div>
          <div class="col-md-3">
            <i class="far fa-clock fa-3x fa-fw float-left"></i>
            <div class="info float-left">
              <span>1465</span>
              <p>WORKING HOURS</p>
            </div>
          </div>
          <div class="col-md-3">
            <i class="far fa-star fa-3x fa-fw float-left"></i>
            <div class="info float-left">
              <span>612</span>
              <p>POSITIVE FEEDBACKS</p>
            </div>
          </div>
          <div class="col-md-3">
            <i class="far fa-heart fa-3x fa-fw float-left"></i>
            <div class="info float-left">
              <span>735</span>
              <p>PHAPPY CLIENTS</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--End rates-->
    <PortfolioComp />
    

    <!--Start Carousel-->
    <div class="carousel-container">
      <div class="container">
        <q
          >Outstanding job and exceeded all expectations. It was a pleasure to
          work with them on a sizable first project and am looking forward to
          start the next one asap.</q
        >
        <span>Michael Hopkins</span>

        <ul class="list-unstyled">
          <li class="active"></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>

    <!--End Carousel-->

    <!--Start brands-->
    <div class="brands">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <img
              src="../assets/partner-logo-1-dark.png"
              alt=""
              class="img-responsive"
            />
          </div>

          <div class="col-md-3">
            <img
              src="../assets/partner-logo-2-dark.png"
              alt=""
              class="img-responsive"
            />
          </div>

          <div class="col-md-3">
            <img
              src="../assets/partner-logo-3-dark.png"
              alt=""
              class="img-responsive"
            />
          </div>

          <div class="col-md-3">
            <img
              src="../assets/partner-logo-7-dark.png"
              alt=""
              class="img-responsive"
            />
          </div>
        </div>
      </div>
    </div>
    <!--End branmds-->
    <BlogPost />
    <ContactInfo />

    <Footer />
  </div>
</template>
<script>
import SliderComp from "@/components/sliderComp.vue";
import BlogPost from "@/components/blogPost.vue";
import PortfolioComp from "@/components/global/portfolio.vue";
import ContactInfo from "@/components/contactInfo.vue";
import Footer from "@/components/global/footerComp.vue";

export default {
  name: "About",
  components: {
    SliderComp,
    BlogPost,
    ContactInfo,
    Footer,
    PortfolioComp
  },
};
</script>
<style lang="scss" scoped>
.about {
  .about-our-agency {
    padding: 80px 0;
    h2 {
      font-weight: bold;
      font-size: 2.5rem;
      margin-bottom: 20px;
    }
    p {
      color: #767676;
    }
  }
  .rate-us {
    background: url("../assets/bg-pattern.jpg") no-repeat center center;
    background-size: cover;
    color: #fff;
    padding: 50px 0;
    i {
      width: 30%;
    }
    .info {
      width: 70%;
    }
  }
  
  .carousel-container {
    background: url("../assets/bg-pattern.jpg") no-repeat center center;
    background-size: cover;
    color: #fff;
    padding: 80px 0;

    q {
      text-align: center;
      font-size: 2rem;
      display: block;
      padding-left: 141px;
    }
    span {
      display: block;
      text-align: center;
      margin-top: 40px;
      font-size: 20px;
    }
    ul {
      margin: auto;
      width: 200px;
      text-align: center;
      margin-top: 100px;
      li {
        width: 15px;
        height: 15px;
        background: #525252;
        border-radius: 50%;
        display: inline-block;
        margin-right: 5px;
        cursor: pointer;
        &.active {
          background: #fff;
        }
      }
    }
  }
}
</style>
