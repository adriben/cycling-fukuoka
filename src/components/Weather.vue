<template>
<div>
  <div>
    <input type="text" id="position" v-model="request" v-on:keypress="goMeteo">
  </div>
  <div v-if="temps">
    <h3>Position: {{ temps.name }}</h3>
    <h4>Temperature: {{temps.main.temp }}</h4>
    <h4>Temps : {{ temps.weather[0].description }}</h4>
  </div>
</div>
  
</template>

<script>
import axios from 'axios'

export default {
  name: "Weather",
  data(){
    return{
      request: '',
      temps: undefined,
      api_code:"e9f4b1ae54152d7a7dbd8b74fe806637",
      url_recherche: "https://api.openweathermap.org/data/2.5/weather?"

  }
  },
  methods: {
    goMeteo(e){
      if(e.key == "Enter"){
        axios
        .get(`${this.url_recherche}q=${this.request}&units=metric&APPID=${this.api_code}&lang=en`)
        .then(response => {
          this.temps = response.data
        })
        this.request = ""
      }
    }
  }
};


</script>

<style lang="scss">
:root {
  --bg-color-1: rgb(233, 233, 239);
}

.weather-widget-container {
  width: 320px;
  height: 380px;
  border-radius: 12px;
  box-shadow: 
    0px 0px 2px 4px rgba(255, 255, 255, 0.1),
    -12px -12px 32px rgba(255, 255, 255, 0.5),
    12px 12px 32px rgba(0, 0, 0, 0.1);
}

#app .open-weather-widget {
  border-radius: 12px;
  background-color: var(--bg-color-1);
  &__input-element {
    & label {
      background-color: var(--bg-color-1);
    }
  }
  &__sortable-list {
    &__item {
      padding: 12px;
      margin: 16px 0;
      background-color: var(--bg-color-1);
      border-radius: 4px;
      border: none;
      box-shadow: 
        -2px -2px 8px rgba(255,255,255,0.6), 
        2px 2px 8px rgba(0,0,0,0.1);
    }
  }
}

#app #open-weather-widget {
  &__loading-screen {
    background-color: var(--bg-color-1);
  }
}
</style>
