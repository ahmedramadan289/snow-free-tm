<template>
  <div class="blog-post ">
    <div class="container">
      <h2 class="text-center">{{PageName}}</h2>
      <p class="text-center">
        Donec orci sem, pretium ac dolor et, faucibus faucibus mauris.
        Etiam,pellentesque faucibus. Vestibulum gravida volutpat ipsum non
        ultrices.
      </p>
      <div class="row">
      <div class="col-md-4">
          <b-card
            title="Something Ineed To Tell You"
            img-src="https://picsum.photos/seed/picsum/200/200
"
            img-alt="Image"
            img-top
            tag="article"
             style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
             <span>September 18 .2016</span>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus orci a purus lacinia consectetur. Vestibulum rutrum ex in odio placerat dictum. Morbi sit amet tortor mollis, tincidunt</p>
            </b-card-text>

          </b-card>
        </div>
         <div class="col-md-4">
          <b-card
            title="The History Of Nature"
            img-src="https://picsum.photos/seed/picsum/200/200
"
            img-alt="Image"
            img-top
            tag="article"
             style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
             <span>Augest 27 .2016</span>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus orci a purus lacinia consectetur. Vestibulum rutrum ex in odio placerat dictum. Morbi sit amet tortor mollis, tincidunt</p>
            </b-card-text>

          </b-card>
        </div>
         <div class="col-md-4">
          <b-card
            title="Why you should Always First"
            img-src="https://picsum.photos/seed/picsum/200/200
"
            img-alt="Image"
            img-top
            tag="article"
             style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
             <span>Augest 14 .2016</span>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus orci a purus lacinia consectetur. Vestibulum rutrum ex in odio placerat dictum. Morbi sit amet tortor mollis, tincidunt</p>
            </b-card-text>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name:"blogPost",
    data(){
      return{
        PageName:"Latest Blog ",
        
      }
    }
   
}
</script>
<style lang="scss" scoped>
    .blog-post{
        background-color: #fafafa;
        padding: 80px 0;

        h2{
            font-size: 2.2rem;
            font-weight: bold;
        }
        p{
            margin-bottom: 40px;
            font-size: 1.5rem;
        }
        .card-body{
            padding: 10px;
            .card-title{
                font-weight: bold;
            }
            .card-text{
                span{
                    font-size: 1rem;
                }
                p{
                    color: #5f5f5f;
                    margin-top: 20px;
                }
            }
        }
    }

</style>