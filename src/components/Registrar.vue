<template>
  <div id="registrar">
    <section class="container-fluid bg">
      <div class="row justify-content-center">
        <div class="col-md-4 col-12 col-sm-3">
          <form class="form-container text-center">
            <h1 class="mb-4 font-weight-light text-uppercase text-white">
              Criar Conta
            </h1>
            <div class="form-group">
              <label for="email">E-mail</label>
              <input
                class="form-control rounded-pill form-control-lg"
                name="username"
                id="username"
                type="email"
                pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                required
                placeholder="exemplo@exemplo.com"
                v-model="username"
              />
            </div>

            <div class="form-group">
              <label for="password">Senha</label>
              <input
                class="form-control form-control rounded-pill form-control-lg"
                name="password"
                id="password"
                type="password"
                placeholder="Senha"
                v-model="password"
              />
            </div>

            <div v-if="error" class="error">{{ error.message }}</div>
            <button
              type="submit"
              class="btn btn-dark btn-block btn-lg rounded-pill mt-5 btn-custom"
              @click.prevent="registrar"
            >
              Criar Conta
            </button>

            <span>Já possui uma conta? </span
            ><router-link to="/login">Fazer Login</router-link>

            <div class="social-icons">
              <ul style="padding: 0" class="social-icons text-center">
                <li style="padding-right: 10px">
                  <a href="https://github.com/ccarol-freitas"
                    ><i class="fa fa-github"></i
                  ></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/cinterfaces/"
                    ><i class="fa fa-instagram"></i
                  ></a>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </section>
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
      error: "",
    };
  },
  methods: {
    registrar() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.username, this.password)
        .then(
          this.$router.replace("login"),
          console.log(" Sua conta foi cadastrada com sucesso! "),
          (err) => {
            console.log("algo deu errado" + err.message);
          }
        );
      localStorage.username = this.username;
      localStorage.password = this.password;
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
.error {
  color: red;
  font-size: 18px;
}
</style>