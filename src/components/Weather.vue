<template>

  <VueWeather
  api-key="dcc609cfb89f26aed8a2e79535415a34"
    units="auto"
    latitude="33.590355"
    longitude="130.401718"></VueWeather>
</template>

<script>
import VueWeather from "vue-weather-widget";

export default {
    components: {
        VueWeather: VueWeather
    }
}


</script>
