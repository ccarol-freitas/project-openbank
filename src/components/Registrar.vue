<template>
    <div id="registrar">
        <form>
           <h1>Criar uma Nova Conta</h1>

            <div class="form-group">
                <input type="text" class="form-control form-control-lg" placeholder="Nome"/>
            </div>

            <div class="form-group">
                <input type="text" class="form-control form-control-lg" placeholder="E-mail"/>
            </div>

            <div class="form-group">
                <input type="password" class="form-control form-control-lg" placeholder="Senha"/>
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Criar Conta</button>

            <router-link :to="{name: 'login'}">ou se já possui cadastro volte ao Login</router-link>
            
        </form>
    </div>
</template>

<script>
export default {
    name: "registrar",
    data(){
        return{};
    },
    methods:{}
};
</script>

<style lang="">
    
</style>