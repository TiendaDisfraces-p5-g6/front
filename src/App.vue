<template>
  <div id="app" class="app">

    <div class="header">
      
      <nav>
      <div>
        <h1> Tienda disfraces </h1>
      </div>

      <div id="menu">
        <center>
           <router-link to="/tabla" id="linknav" v-if="is_auth">Pedidos</router-link>|
           <router-link to="/censoIndigena" id="linknav">Dizfraces</router-link>|
           <router-link to="/" id="linknav">Compras</router-link>
        </center>
     </div>
       <div><button v-if="is_auth" v-on:click="loadHome"> Inicio </button>
        <button v-if="is_auth" v-on:click="loadAccount"> Cuenta </button>
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
      <h2>Misión TIC 2022</h2>
    </div>

  </div>
</template>




<script>
export default {
  name: 'App',

  data: function(){
      return{
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
			localStorage.setItem("isAuth", true);
			localStorage.setItem("username", data.username);
			localStorage.setItem("token_access", data.token_access);
			localStorage.setItem("token_refresh", data.token_refresh);
			alert("Autenticación Exitosa");
			this.verifyAuth();
    },

    completedSignUp: function(data) {
			alert("Registro Exitoso");
			this.completedLogIn(data);
    },

    loadHome: function() {
      this.$router.push({ name: "home" });
    },

    loadAccount: function () {
			this.$router.push({ name: "account" });
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

    background-color: #f6f7f8 ;
    color:#E5E7E9  ;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header h1{
    width: 20%;
    text-align: center;
    color: #020405;
  }

  .header nav {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
    color: #020405;
  }

  .header nav button{
    color: #E5E7E9;
    background: #5aa2f0;
    border: 1px solid #E5E7E9;
    
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
   color: #030608;
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
   background-color: #eff0f1;
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
 