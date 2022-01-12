<template>
  <div class="home">
    <TheHeader></TheHeader>
    <section class="banniere col-12 hero">
      <div class="hero-text">
        <h1>
          Discover new trails, learn about cycling, enjoy Fukuoka's nature and
          more...
        </h1>
        <br />
        <p>
          This website is dedicated to riders and nature lovers around Fukuoka
          Japan
        </p>
      </div>
    </section>

    <div>
      <div class="card mt-3 container mb-3">
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1pApsJ_gwsZKXSVSxFwaSppqBjQt2Kgrq&ehbc=2E312F"
          width="1040"
          height="380"
        ></iframe>

        <div class="card-body mt-0">
          <div class="card-title">
            <h3>Along the coast of Itoshima</h3>
          </div>
          <p class="card-text mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
            non consectetur rem ad blanditiis odio perspiciatis pariatur eveniet
            repudiandae rerum, consequatur voluptas labore, mollitia fuga
            explicabo aut sunt iste alias.
          </p>
          <div>
            <div>
              <h5>Difficulty</h5>
              <p>🤗 easy</p>
            </div>
            <div>
              <h5>Recomended for</h5>
              <p>Gravel</p>
            </div>
            <div>
              <h5>Length</h5>
              <p>~35km</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card mt-3 container mb-3">
       <iframe src="https://www.google.com/maps/d/embed?mid=1kyxxVZjAwt4S3pfkl1ESmYAEvh2KweH5&ehbc=2E312F" width="1040" height="480"></iframe>

        <div class="card-body mt-0">
          <div class="card-title">
            <h3>Exploration of the south</h3>
          </div>
          <p class="card-text mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
            non consectetur rem ad blanditiis odio perspiciatis pariatur eveniet
            repudiandae rerum, consequatur voluptas labore, mollitia fuga
            explicabo aut sunt iste alias.
          </p>
          <div>
            <div>
              <h5>Difficulty</h5>
              <p>😏 medium</p>
            </div>
            <div>
              <h5>Recomended for</h5>
              <p>Road bike</p>
            </div>
            <div>
              <h5>Length</h5>
              <p>~35km</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "Home",
  components: {
    TheHeader: TheHeader,
    TheFooter: TheFooter
  },
};
</script>
<style lang="scss">
.hero {
  color: white;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/landscape.jpg");
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
    left: 40%;
  }
}

.card {
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid grey;
}
</style>
