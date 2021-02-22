
<template>
  <div id="login">
    <section class="container-fluid bg">
      <div class="row justify-content-center">
        <div class="col-md-4 col-12 col-sm-3">
          <form class="form-container text-center">
            <h1 class="mb-4 font-weight-light text-uppercase text-white">
              Login
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

            <button
              @click.prevent="login"
              type="submit"
              class="btn btn-dark btn-block btn-lg rounded-pill mt-5 btn-custom"
            >
              Entrar
            </button>

            <span
              >Não possuo uma conta
              <router-link to="/registrar"
                ><strong>Criar uma conta</strong></router-link
              ></span
            >

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
          </form>
        </div>
      </div>
    </section>
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
      localStorage.password = this.password;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.username, this.password)
        .then(
          this.$router.replace("home"),
          console.log(" Bem vinda(o) "),
          (err) => {
            console.log("Não foi possível realizar o login. " + err.message);
          }
        );
    },
  },

  mounted() {},
};
</script>

<style>
.bg {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(55, 120, 138, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  width: 100%;
  height: 100vh;
  background-size: 200%;
}
.form-container {
  position: relative;
  top: 15vh;
  background: #171821;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px #000;
}
.form-control {
  font-size: 15px;
  min-height: 48px;
  font-weight: 500;
}
label {
  font-size: 18px;
}
.form-control:focus {
  border: 1px solid #00d4ff;
  box-shadow: 0 0 0 0.2rem rgba(#00d4ff) !important;
}
.btn-custom {
  background: #000 !important;
  border: 1px solid #00d4ff !important;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  min-height: 48px;
  margin-bottom: 10px;
}

.btn-custom:hover {
  background: #00d4ff !important;
  color: #000 !important;
}
</style>