<template>
  <header class="bg-dark">
    <div class="">
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark">
          <p class="navbar-brand">
            <i class="fas fa-bicycle"></i>
           Road and Gravel Bike Life in Fukuoka
          </p>
  
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div id="navbarContent" class="collapse navbar-collapse">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#"
                  ><i class="fas fa-map-marked-alt"></i> Trails</a
                >
            
              </li>
              <li class="nav-item text-right active">
                <a class="nav-link" href="#" 
                  ><i class="fas fa-photo-video"></i> Media</a
                >
        
              </li>
              <li class="nav-item text-right active">
                <a class="nav-link" href="#" 
                  ><i class="far fa-newspaper"></i> Articles</a
                >
               
              </li>
              <li class="nav-item text-right active pl-5">
                
                <a class="nav-link" href="" 
                  ><i class="fas fa-graduation-cap"></i> E-learning
                </a>
          
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      eng: true,
    };
  },
  methods: {
    changeLang(e) {
      this.eng = !this.eng;
      e.preventDefault();
      this.$parent.changeLang();
    },
  },
};
</script>

<style lang="scss">
header {
  font-size: 130%;
  position: fixed;
  z-index: 4;
  width: 100%;
  background-color: blue;

  a {
    color: #ffff;
    padding-left: 1rem;
    transition: 400ms;
    &:hover {
      transform: scale(1.15);
      transition: 400ms;
    }
  }
  ul {
    margin-right: 0;
  }
  li {
    padding-left: 2rem;
  }
  .navbar-expand-lg .navbar-collapse {
    justify-content: flex-end;
  }
  .navbar-dark{
 background-color: #000000;
background-image: linear-gradient(147deg, #000000 0%, #04619f 74%);

  }
}
</style>

