<template>
  <div class="contact-us">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="contact-intro">
            <h2>Contact Info:</h2>
            <p>
              Praesent interdum congue mauris, et fringilla lacus pel vitae.
              Quisque nisl mauris, aliquam eu ultrices vel, conse vitae sapien
              at imperdiet risus. Quisque cursus risus id. fermentum, in auctor
              quam consectetur.
            </p>
            <p><span>Address:</span> 10111 Santa Monica Boulevard, LA</p>
            <p><span>Phone:</span> +44 987 065 908</p>
            <p><span>Email:</span>info@Example.com</p>
            <p><span>Fax:</span> +44 987 065 909</p>
          </div>
        </div>
        <form class="col-md-8">
          <div class="row">
            <div class="col-md-6">
              <input type="text" placeholder="Your Name" />
            </div>
            <div class="col-md-6">
              <input type="email" placeholder="Your Email" />
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <input type="text" placeholder="Yout Title" />
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <textarea
                name=""
                id="area"
                cols="30"
                rows="10"
                placeholder="Your Comment"
              ></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Contact",
};
</script>
<style lang="scss" scoped>
.contact-us {
  padding: 80px 0;
  background: #eee;
  .contact-intro {
    h2 {
      font-weight: bold;
      font-size: 2rem;
      margin-bottom: 20px;
    }
    p {
      line-height: 1.7;
    }
    span {
      font-weight: bold;
      font-size: 1.2rem;
    }
  }
  form {
    input[type="text"],
    input[type="email"] {
      width: 100%;
      padding: 15px;
      border: none;
      margin-bottom: 20px;
            outline: none;

    }
    #area {
      width: 100%;
      border: none;
      padding: 15px;
      outline: none;
    }
  }
}
</style>
