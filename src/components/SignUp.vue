<template>

    <div class="signUp_user">
        <div class="container_signUp_user">
            <h2>Registrarse</h2>

            <form v-on:submit.prevent="processSignUp" >

                <input type="text" v-model="user.username" placeholder="Username">
                <br>
                
                <input type="password" v-model="user.password" placeholder="Password">
                <br>
                
                <input type="text" v-model="user.name" placeholder="Name">
                <br>

                <input type="email" v-model="user.email" placeholder="Email">
                <br>

                <input type="number" v-model="user.phone" placeholder=" phone">
                 <br>

                 <center>
                     <button type="submit">Registrarse</button>
                 </center>
                
            </form>
        </div>

    </div>

</template>




<script>
import gql from 'graphql-tag'
export default {
    name: "SignUp",

    data: function(){
        return {
            user: {
                username         : "",
                password         : "",
                name             : "",
                phone            : "",
                email            : "",
                prendasAlquiladas: 0
            }
        }
    },

    methods: {
        processSignUp: async function(){
            await this.$apollo.mutate(
                {
                    mutation: gql`
                        mutation RegistroUsuario($registroUsuarioEntradaUsuario: RegistroIngreso) {
                            registroUsuario(entradaUsuario: $registroUsuarioEntradaUsuario) {
                                refresh
                                access
                            }
                        }
                    `,
                    variables:{
                        registroUsuarioEntradaUsuario:this.user,
                    }
                }   
            )
            .then((result)=>{
                let dataSignUp = {
                    tekenRefresh : result.data.registroUsuario.refresh,
                    tokenAccess  : result.data.registroUsuario.accsess
                };

                this.$emit("completedSignUp" , dataSignUp  )
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

    .signUp_user{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
    
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container_signUp_user {
        border: 1px solid  #c1d3e6;
        border-radius: 10px;
        width: 20%;
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .signUp_user h2{
        color: #283747;

    }

    .signUp_user form{
        width: 70%;
        
    }

    .signUp_user input{
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

    .signUp_user button{
        width: 50%;
        height: 40px;
        color: #E5E7E9;
        background: #1c82f0;
        border: 1px solid #E5E7E9;
        border-radius: 5px;
        padding: 10px 25px;
        margin: 5px 0 25px 0;
        margin-top: 50px;
    }

    .signUp_user button:hover{
        color: #050607;
        background: rgb(241, 233, 234);
        border: 1px solid #283747;
    }

</style>