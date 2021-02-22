
<template>
  <div class="main">
    <div id="login">
      <div class="content-main">
        <h1 class="text-center text-white">Login</h1>

        <div class="form">
          <form v-on:submit="handleSubmit($event)">
            <div class="form-group">
              <label for="">E-mail</label>
              <input
                class="form-control form-control-lg"
                name="username"
                id="username"
                type="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                placeholder="exemplo@exemplo.com"
                v-model="username"
              />
            </div>

            <div class="form-group">
              <label for="">Senha</label>
              <input
                class="form-control form-control-lg"
                name="password"
                id="password"
                type="password"
                placeholder="Senha"
                v-model="password"
              />
            </div>

            <button
              @click.prevent="login"
              type="submit"
              class="btn btn-dark btn-lg btn-block"
            >
              Entrar
            </button>

            <span
              >Não possuo uma conta
              <router-link to="/registrar">Criar uma conta</router-link></span
            >
            <div class="social-icons">
              <ul class="text-center">
                <li>
                  <a href="#"><i class="fa fa-github"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-instagram"></i></a>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login: function () {
      localStorage.username = this.username;
      localStorage.username = this.password;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.username, this.password)
        .then(
          //   (user) => {
          //     this.$router.replace('home')
          //     console.log('Bem vindo')
          //   },
          this.$router.replace("home"),
          console.log(" Bem vinda(o) "),
          (err) => {
            console.log("Não foi possível realizar o login. " + err.message);
          }
        );
    },
  },

  mounted() {
    if (localStorage.username) {
      this.username = localStorage.username;
    }
    if (localStorage.password) {
      this.password = localStorage.password;
    }
  },
  watch: {
    username(newUsername) {
      localStorage.username = newUsername;
    },
    password(newPassword) {
      localStorage.password = newPassword;
    },
  },
};
</script>

<style>
#login {
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
}
</style>