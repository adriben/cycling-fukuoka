<template>
  <div class="home">
    <TheHeader></TheHeader>
     <section class="banniere col-12 hero">
      <div class="hero-text">
      

        <h1 class="pt-4 text-center" v-if="eng">
          I am a Web developer
          
          
        </h1>
        
      </div>
    </section>

 <div>
<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1pApsJ_gwsZKXSVSxFwaSppqBjQt2Kgrq&ehbc=2E312F" width="640" height="480"></iframe>

 </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from "@/components/TheHeader.vue";

export default {
  name: 'Home',
  components: {
   TheHeader: TheHeader
  }
}
</script>
<style lang="scss">
.hero {
  color: white;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/landscape2.jpg");
  background-position: -50px +50px;
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;
  width: 100%;
  position: relative;

  .hero-text {
    position: absolute;
    align-items: center;
    top: 30%;
    left: 60%;
    @media screen and (max-width: 900px) {
      left: 200px;
    }
    @media screen and (max-width: 560px) {
      left: 1px;
    }
    p {
      position: absolute;
      font-size: 200%;
      top: -20%;
      left: 10%;
      animation: slideDisplay 3s;
    }
    h1 {
      animation: slideDisplay 500ms;

      span.cursor {
        display: inline-block;
        margin-left: 3px;
        width: 4px;
        background-color: #fff;
        animation: cursorBlink 800ms infinite;
      }
      span.cursor.typing {
        animation: none;
      }
      span.typed-text {
        color: #e27d60;
      }
    }
  }
}
</style>