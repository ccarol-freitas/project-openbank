<template>
  <div id="home">
    <div id="main-home">
      <div id="sidebar">
        <ul class="sidebar-nav">
          <li class="sidebar-brand text-left">
            <a style="font-size: 25px"> Project Open Bank</a>
          </li>
          <li>
            <router-link to="/"
              ><i
                style="font-size: 25px; padding-right: 10px"
                class="fa fa-dashboard"
              ></i
              >DASHBOARD</router-link
            >
          </li>
          <li>
            <button class="btn-sair" @click="sair">
              <i
                style="font-size: 25px; padding-right: 10px"
                class="fa fa-sign-out"
              ></i
              >SAIR
            </button>
          </li>
        </ul>
      </div>

      <div id="content-dash">
        <Moedas />
      </div>
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

