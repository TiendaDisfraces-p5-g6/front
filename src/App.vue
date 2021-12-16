<template>
  <div id="app" class="app">

    <div class="header">
      
      <nav>
      <div>
        <h1> Tienda disfraces </h1>
        <div></div>

      </div>

      <div id="menu">
        <center>
           <router-link to="/user/pedidos" id="linknav" v-if="is_auth">Pedidos</router-link>|
           <router-link to="/user/home" id="linknav">Disfraces</router-link>|
           <router-link to="/user/alquilados" id="linknav" v-if="is_auth">Alquilados</router-link>
        </center>
     </div>
       <div>
        <button v-if="is_auth" v-on:click="loadUser"> {{username}} </button>
        <button v-if="is_auth" v-on:click="loadHome"> Inicio </button>
        <button v-if="is_auth" v-on:click="logOut"> Cerrar Sesión </button>
        <button v-if="!is_auth" v-on:click="loadLogIn" > Iniciar Sesión </button>
        <button v-if="!is_auth" v-on:click="loadSignUp" > Registrarse </button></div>
        
      </nav>
    </div>
    

    <div class="main-component">
      <router-view  
        v-on:completedLogIn="completedLogIn"
        v-on:completedSignUp="completedSignUp"
        v-on:logOut="logOut">
      </router-view>
    </div>
    

    <div class="footer">
      <h2>Grupo 6</h2>
    </div>

  </div>
</template>




<script>
import gql  from "graphql-tag";
export default {
  name: 'App',

  data: function(){
      return{
        username : localStorage.getItem('username') || "none",
        pedidos: [],
        is_auth: false
      }
  },

  components: {
  },

  methods:{
    verifyAuth: function() {
      this.is_auth = localStorage.getItem("isAuth") || false;
		
			if (this.is_auth == false)
        this.$router.push({ name: "logIn" });
      else
        this.$router.push({ name: "home" });
    },

    loadLogIn: function(){
      this.$router.push({name: "logIn"})
    },

    loadSignUp: function(){
      this.$router.push({name: "signUp"})
    },

    completedLogIn: function(data) {
      localStorage.setItem("username", data.username);
			localStorage.setItem("isAuth", true);
			localStorage.setItem("token_access", data.tokenAccess);
			localStorage.setItem("token_refresh", data.tokenRefresh);
			alert("Autenticad@");
			this.verifyAuth();
      location.reload();
    },

    completedSignUp: function(data) {
			alert("Registrad@");
			this.completedLogIn(data);
    },

    loadHome: function() {
      this.$router.push({ name: "home" });
    },

    loadUser: function() {
      this.$router.push({ name: "Usuario" });
    },

    loadAccount: function () {
			this.$router.push({ name: "account" });
		},

    dataUsuario: async function() {
      await this.$apollo.mutate({
          mutation: gql`
               mutation ActualizacionUsuario($usuario: ActualizarUsuario!) {
                   actualizacionUsuario(usuario: $usuario) {
                     id
                     username
                     name
                     phone
                     email
                   }
                 }`,variables:{}
      
      })
    },

    logOut: function () {
			localStorage.clear();
			alert("Sesión Cerrada");
			this.verifyAuth();
		},
  },

  created: function(){
    this.verifyAuth()
  }

}
</script>






<style>
*{
 /* border: 1px solid black;*/
}

  body{
    margin: 0 0 0 0;
  }

  .header{
    margin: 0%;
    padding: 0;
    width: 100%;
    height: 10vh; 
    min-height: 100px;

    background-color: #072c52 ;
    color:#0b335a  ;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header h1{
    width: 20%;
    text-align: center;
    color: #f7f7f7;
  }

  .header nav {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
    color: #efeff0;
  }

  .header nav button{
    color: #E5E7E9;
    background: #5aa2f0;
    border: 1px solid #E5E7E9;
    margin-left: 5px;
    border-radius: 5px;
    padding: 10px 20px;
  }

  .header nav button:hover{
    color: #283747;
    background: #E5E7E9;
    border: 1px solid #E5E7E9;
  }

 #menu{
   width: 50%;
 /*  border: 1px solid black;*/
}

 #menu #linknav {
   position: relative;
   color: #f4f4f5;
   padding: 28px;
   letter-spacing: 1px;
   text-decoration: none;
 }
 
 #menu #linknav:after {
   content: "";
   position: absolute;
   background-color: #3ccdf1;
   height: 3px;
   width: 0%;
   left: 0;
   bottom: 8px;
   transition: 0.5s;
 }
 
 #menu #linknav:hover:after {
   width: 100%;
 }

.main-component{
   height: 75vh;
   margin: 0%;
   padding: 0%;
   background: #FDFEFE ;
  }
 

.footer{
   margin: 0;
   padding: 0;
   width: 100%;
   height: 10vh;
   min-height: 100px;  
   background-color: #072c52;
   color: #020405;

  }
 
  .footer h2{
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
  }
</style>
 