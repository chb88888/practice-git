<template>
  <div class="home">
    <router-view></router-view>
    <FooterBar />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterBar from "../../components/FooterBar";
export default {
  name: "home",
  components: {
    FooterBar
  }
};
</script>
