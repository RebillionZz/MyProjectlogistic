<template>
<div>
    <Toolbar/>
    <div>
      <infosidebar/>
    test sidebar
    </div>
    <Footer/>
</div>
</template>

<script>
import Toolbar from "../../components/Toolbar.vue";
import Footer from "../../components/Footer.vue";
import HomeView from "../HomeView.vue";
import infosidebar from "../../components/infosidebar.vue";
export default {
  name: "infohal",
  components: {
    infosidebar,
    Toolbar,
    Footer,
    HomeView,
  },
};
</script>

<style>

</style>