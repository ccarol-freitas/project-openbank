<template>
  <div v-if="warningZone">Você continua acessando a aplicação?</div>
</template>

<script>
export default {
  name: "Autologout",

  data: function () {
    return {
      events: ["click", "mousemove", "scroll", "keypress", "load"],

      warningTime: null,
      logoutTimer: null,
      warningZone: false,
    };
  },

  mounted() {
    this.events.forEach(function (event) {
      window.addEventListener(event, this.resetTimer);
    }, this);
    this.setTimers();
  },
  destroyed() {
    this.events.forEach(function (event) {
      window.removeEventListener(event, this.resetTimer);
    }, this);
    this.resetTimer();
  },

  methods: {
    setTimers: function () {
      this.warningTime = setTimeout(this.warningMessage, 3 + 1000);
      this.logoutTimer = setTimeout(this.logoutUser, 10 + 1000);

      this.warningZone = false;
    },
    warningMessage: function () {
      this.warningZone = true;
    },
    logoutUser: function () {
      document.getElementsByClassName("btn-sair").submit();
    },
    resetTimer: function () {
      clearTimeout(this.warningTime);
      clearTimeout(this.logoutTimer);

      this.setTimers();
    },
  },
};
</script>