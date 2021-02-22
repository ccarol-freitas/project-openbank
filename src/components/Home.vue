<template>
  <div id="home">
    <b-navbar toggleable="lg" type="dark" class="nav-custom">
      <b-navbar-brand href="https://ccarol-freitas.github.io/"
        >Project OpenBank</b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="nav-custom-text" right href="#"
            >DASHBOARD</b-nav-item
          >
          <b-button class="btn-sair" @click="sair">SAIR</b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div id="content-dash">
      <Moedas />
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import Moedas from "@/components/Moedas";
export default {
  components: {
    Moedas,
  },
  name: "home",
  data() {
    return {
      results: null,
    };
  },

  methods: {
    sair: function () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    },
  },

  mounted() {},
};
</script>

<style>
.nav-custom {
  background: #171821;
}
.nav-link {
  color: #fff !important;
  font-size: 20px !important;
}
</style>

