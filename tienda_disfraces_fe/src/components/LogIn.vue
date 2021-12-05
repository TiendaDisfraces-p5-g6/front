<template>
    <div class="loginUser">
        <div class= "containerloginUser">
            <img src="../assets/login.png">
            <br>
            <h2>Iniciar Sesión</h2>
            <br>
            <form v-on:submit.prevent="processLoginUser">
                <div class="username">
                    <input type="text" placeholder="username" v-model="user.username">
                </div>
             
                <div class="password">
                <input type="password" placeholder="password" v-model="user.password">
                </div>
                
                <button type="submit">INGRESAR</button>
            </form>
        </div>
    </div>
</template>

<script>
    
    export default{
        name:'logIn',
        
        data: function(){
            return{
                user:{
                    username:"",
                    password:"",
                }
            };
        },

        methods:{
            processLoginUser: function(){

            },
        },
    }
</script>

<style>
    .loginUser{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
    
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .containerloginUser {
        border: 3px solid #000000;
        border-radius: 10px;
        width: 25%;
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .containerloginUser img {
        height: 70px;
        width: 70px;
        display: block;
        position: absolute;
        top: 170px; 
    }

    .loginUser h2{
        font-family: 'Raleway', sans-serif;
        color: #000000;
        margin: 5px auto 5px auto;
        padding-top: 40px;
    }

    .loginUser form{
        width: 70%;
    }

    .loginUser input{
        height: 40px;
        width: 100%;
        box-sizing: border-box;
        padding: 10px 20px;
        margin: 5px 0;
        border: 1px solid #708090;
    }

    .username input{
        background-image: url("../assets/user.png");
        background-repeat: no-repeat;
        background-position: 4px center;
        background-size: 20px;
        padding-left: 35px;
        display: flex;
        align-items: center;
    }

    .password input{
        background-image: url("../assets/lock.png");
        background-repeat: no-repeat;
        background-position: 4px center;
        background-size: 20px;
        padding-left: 35px;
        display: flex;
        align-items: center;
    }
    

    .loginUser button{
        border-radius: 20px;
        border: 1px solid #fab000;
        background-color: #fab000;
        color: #000000;
        font-size: 12px;
        font-weight: bold;
        flex-direction:column;
        padding: 12px 45px;
        letter-spacing: 1px;
        transition: transform 80ms ease-in;
        position: relative;
        top: 20px;
        left: 35px;
    }

    .loginUser button:active {
        transform: scale(0.95);
    }

    .loginUser button:focus {
        outline: none;
    }

    .loginUser button.ghost {
        background-color: transparent;
        border-color: #FFFFFF;
    }

</style>