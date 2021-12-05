<template>

  <div id="app" class="app">
 
    <div class="header">
      <img src= "../src/assets/logo_tienda2.png">
      <h1>Tienda de Disfraces</h1>
    
      <nav>
        <button v-if="is_auth"> Inicio </button>
        <button v-if="is_auth" v-on:click="loadAccount"> Cuenta </button>
        <button v-if="is_auth" v-on:click="loadOrdersHistory"> Historial </button>
        
        <button v-if="is_auth" v-on:click="loadOrderForm"> Alquilar </button>
        <button v-if="is_auth"> Cerrar sesion </button>

        <button  v-if="!is_auth" v-on:click="loadStock"> Inventario </button>
        <button  v-if="!is_auth" v-on:click="loadLogIn"> Iniciar Sesión </button>
        <button  v-if="!is_auth" v-on:click="loadSignUp"> Registrase </button>
      </nav>
    </div>

    <div class="main-component">
      <router-view
        v-on:completedLogIn="completedLogIn"
        v-on:completedSignUp="completedSignUp"
        v-on:logOut="logOut"
      >
      </router-view>
    </div>

    <div class="footer">
      <h2>MisionTic 2022 - P5 Grupo 6</h2>
    </div>

  </div>
</template>

<script>
export default{
    name: 'App',
    
    data: function(){
      return{
        is_auth: false
      }
    },
    
    components: {
    },

    methods:{
      verifyAuth: function(){
        if(this.is_auth == false){
          this.$router.push({name:"logIn"})
        }
      },

      loadLogIn: function(){
        this.$router.push({name:"logIn"})
      },

      loadSignUp: function(){
        this.$router.push({name:"signUp"})
      },

      loadAccount: function(){
        this.$router.push({name:"account"});
      },

      logOut: function(){
        localStorage.clear();
        alert("Sesión Terminada");
        this.veryAuth();
      },

      loadOrdersHistory: function(){
        this.$router.push({name:"ordersHistory"})
      },

      loadOrderForm: function(){
        this.$router.push({name:"orderForm"})
      },

      loadStock: function(){
        this.$router.push({name:"stock"})
      },

      completedLogIn: function(data){
        
      },

      completedSignUp: function(data){
        
      },
    },
    created: function(){
      this.verifyAuth()
    }
}

</script>

<style>
  body{
    margin:0 0 0 0; 
  }
  
  .header{
    margin:     0;
    padding:    0;
    width:      100%;
    height:     10vh;
    min-height: 100px;

    background-color: #000000;
    color:            #fab000; 
    
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header img{
    height: 12%;
    width: 6%;
    display: block;
    position: absolute;
    top: 14px; 
    margin-left: 230px;
  }
  
  .header h1{
    width:  20%;
    text-align: center;
    font-family: "Raleway", sans-serif;
  }

  .header nav{
    height: 100%;
    width: 40%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
  }



  .header nav button{
    overflow: hidden;
    border: none;
    background: transparent;
    border: 2px solid #E5E7E9;
    color: #F8F8FF;
    font-family: "Raleway", sans-serif;
    font-size: 14px;
    padding: 10px 20px;
    transition: all 300ms ease;
    
  }


  .header nav button:hover{
    color: #000000;
    border: #F8F8FF solid 1px;
    background:#fff;
  }

  .main-component{
    height: 75vh;
    margin: 0%;
    padding: 0%;
    background: #FDFEFE; 
  }

  .footer{
    margin:0;
    padding:0;
    width: 100%;
    height: 5vh;
    min-height: 100px;
    background-color: #000000;
    color: #E5E7E9;
  }

  .footer h2{
    width: 100%;
    height: 100%;
    font-family: "Trebuchet MS", sans-serif;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
