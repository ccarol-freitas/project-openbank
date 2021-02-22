<template>
  <div class="main">
    <div id="registrar">
      <div class="content-main">
        <h1 class="text-center text-white">Criar Conta</h1>
        <div class="form">
          <form>
            <div class="form-group">
              <label for="email">E-mail</label>
              <input
                id="username"
                type="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                class="form-control form-control-lg"
                placeholder="exemplo@exemplo.com"
                v-model="username"
              />
            </div>

            <div class="form-group">
              <label for="password">Senha</label>
              <input
                id="password"
                type="password"
                class="form-control form-control-lg"
                placeholder="Senha"
                v-model="password"
              />
            </div>

            <button
              type="submit"
              class="btn btn-dark btn-lg btn-block"
              @click.prevent="registrar"
            >
              Criar Conta
            </button>

            <span>Já possui uma conta? </span
            ><router-link to="/login">Fazer Login</router-link>

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
  name: "registrar",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    registrar() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.username, this.password)
        .then(
          // (user) => {
          //   this.$router.replace('home'),
          //    console.log(' Sua conta foi cadastrada com sucesso! ')
          // },
          this.$router.replace("home"),
          console.log(" Sua conta foi cadastrada com sucesso! "),
          (err) => {
            console.log("algo deu errado" + err.message);
          }
        );
      // this.$router.push('/login');
      localStorage.username = this.username;
      localStorage.username = this.password;
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
#registrar {
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
}
</style>