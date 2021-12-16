<template>

    <div class="logIn_user">
        <div class="container_logIn_user">
            <h2>Iniciar sesión</h2>

            <form v-on:submit.prevent="processLogInUser" >
                <input type="text" v-model="user.username" placeholder="Username">
                <br>
                <input type="password" v-model="user.password" placeholder="Password">
                <br>
                <center>
                    <button type="submit">Iniciar Sesion</button>
                </center>
                
            </form>
        </div>

    </div>

</template>




<script>
import gql from 'graphql-tag'
export default {
    name: "LogIn",

    data: function(){
        return {
            user: {
                username:"",
                password:""
            }
        }
    },

    methods: {
        processLogInUser: async function(){
          await this.$apollo.mutate(
                {
                    mutation: gql`
                        mutation RegistroUsuario($logInCredenciales: CredencialesIngreso!) {
                          logIn(credenciales: $logInCredenciales) {
                               refresh
                               access
                            }
                        }
                    `,
                    variables:{
                        logInCredenciales:this.user,
                    }
                }   
            )
            .then((result)=>{
                let dataSignUp = {
                    username     : this.user.username,
                    tokenRefresh : result.data.logIn.refresh,
                    tokenAccess  : result.data.logIn.access,
                };

                this.$emit("completedLogIn" , dataSignUp  )
            })
            .catch((error)=>{
                console.log(error);
                alert("fallo en el registro")
        })
       }
    }
}
</script>






<style>

    .logIn_user{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
    
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container_logIn_user {
        border: 1px solid  #c3cedb;
        border-radius: 10px;
        width: 20%;
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .logIn_user h2{
        color: #283747;

    }

    .logIn_user form{
        width: 70%;
        
    }

    .logIn_user input{
        height: 40px;
        width: 100%;
        box-sizing: border-box;
        padding: 10px 20px;
        margin: 5px 0;
        border-bottom: 1px solid #768da5;
        border-left: white;
        border-right: white;
        border-top: white;
       
    }

    .logIn_user button{
        width: 50%;
        height: 40px;

        color: #E5E7E9;
        background: #1c82f0;
        border: 1px solid #E5E7E9;
        border-radius: 5px;
        padding: 10px 25px;
        margin: 5px 0;
        margin-top: 50px;
    }

    .logIn_user button:hover{
        
        color: #060708;
        background: rgb(245, 237, 239);
        border: 1px solid #283747;
    }

</style>