
<template>
    <div id="login">
        <form v-on:submit="handleSubmit($event)">
           <h1>Login</h1>

            <div class="form-group">
                <input class="form-control form-control-lg" name="username" id="username" type="text" placeholder="Usuário/E-mail" v-model="username">
            </div>

            <div class="form-group">
                 <input class="form-control form-control-lg" name="password" id="password" type="password" placeholder="Senha" v-model="password">
            </div>

            <button  @click="login" type="submit" class=" btn btn-dark btn-lg btn-block">Login</button>

             <p>Não tenho uma conta
                <span><router-link to="/registrar">Criar uma conta</router-link></span>
            </p>

            <div class="social-icons">
                <ul>
                    <li><a href="#"><i class="fa fa-github"></i></a></li>
                    <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                </ul>
            </div>

        </form>
    </div>
</template>

<script>
export default {
    name: "login",
    data(){
        return{
            username: '',
            password: ''   
        }
    },
   methods: {

  }
};
</script>

<style lang="">
    
</style>