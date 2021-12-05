<template>
    <div class="signUp_user">
        <div class="container_signUp_user">
            <h2>Crea tu cuenta!</h2>
            
            <form v-on:submit.prevent="processSignUp" >
                <div class="username_field">
                    <label for="username">Username</label>
                    <input type="text" id="username" v-model="user.username" placeholder="username">
                </div>
                <br>

                <div class="name_field">
                    <label for="name">Name</label>
                    <input type="text" id="name" v-model="user.name" placeholder="nombre">
                </div>
               <br>
                
                <div class="password_field">
                    <label for="password">Password</label>
                    <input type="password" id="password" v-model="user.password" placeholder="password">
                </div>
                <br>
                
                <div class="phone_field">
                    <label for="phone">Teléfono</label>
                    <input type="text" id="phone" v-model="user.phone" placeholder="telefono">
                </div>
                <br>
                
                <div class="email_field">
                    <label for="email">E-mail</label>
                    <input type="email" id="email" v-model="user.email" placeholder="email">
                </div>
                <br>
                
                <button type="submit">REGISTRARSE</button>
            </form>
        </div>
    </div>
</template>

<script>
    
export default {
        name: "signUp",
        data: function(){
            return {
                user: {
                    username: "",
                    name: "",
                    password: "",
                    phone:"",
                    email: "",
                    account: {
                        prendasAlquiladas: 0,
                    }
                },
            };
        },

        methods: {
            processSignUp: function(){
                
            }
        },
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
        border: 3px solid #000000;
        border-radius: 10px;
        width: 50%;
        height: 92%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
 
    .signUp_user h2{
        font-family: "Raleway", sans-serif;
        font-size: 35px;
        color: #000000;
        margin-top: 50px; 
    }
 
    .signUp_user form{
        width: 70%;
        
    }

	.username_field label{
        display: inline-block;
	  	width: 25%;
	  	text-align: right;
        margin: 20px;
	  	margin-left: 4px;
        margin-top: 7px;
        margin-bottom:0;
        font-family: "Raleway",sans-serif;
        font-size: 15.5px;
        color: #000000;
    }

    .username_field{
        display: flex;
        vertical-align: middle;
        align-items:center;
        margin-top: 7px;
    }

	.name_field label{
        display: inline-block;
	  	width: 25%;
	  	text-align: right;
	  	margin: 20px;
        margin-left: 4px;
        margin-top: 7px;
        margin-bottom: 0;
        font-family: "Raleway",sans-serif;
        font-size: 15.5px;
        color: #000000;
        
    }

    .name_field{
        display: flex;
        vertical-align: middle;
        align-items:center;
        margin-top: 0;   
    }


	.password_field label{
        display: inline-block;
	  	width: 25%;
	  	text-align: right;
	  	margin: 20px;
        margin-left: 4px;
        margin-top:7px;
        margin-bottom:0;
        font-family: "Raleway",sans-serif;
        font-size: 15.5px;
        color: #000000;
    }

    .password_field{
        display: flex;
        vertical-align: middle;
        align-items:center;
        margin-top:0px;
        
    }


	.phone_field label{
        display: inline-block;
	  	width: 25%;
	  	text-align: right;
	  	margin: 20px;
        margin-left: 4px;
        margin-top:7px;
        margin-bottom:0;
        font-family: "Raleway",sans-serif;
        font-size: 15.5px;
        color: #000000;
    }

    .phone_field{
        display: flex;
        vertical-align: middle;
        align-items:center;
    }


	.email_field label{
        display: inline-block;
	  	width: 25%;
	  	text-align: right;
	  	margin: 20px;
        margin-left: 4px;
        margin-top: 7px;
        margin-bottom:0;
        font-family: "Raleway",sans-serif;
        font-size: 15.5px;
        color: #000000;
    }
    
    .email_field{
        display: flex;
        vertical-align: middle;
        align-items:center;
    }

    .signUp_user input{
        height: 25px;
        width: 100%;
        box-sizing: border-box;
        padding: 10px 20px;
        margin: 5px 0;
        margin-left: 20px;
        margin-bottom: 1px;
        border: 1px solid #283747;
    }
 
    .signUp_user button{
        width: 170px;
        height: 40px;
        color: #000000;
        background: #fab000;
        border: 1px solid #E5E7E9;
        border-radius: 20px;
        padding: 10px 15px;
        margin: 5px 0 35px 150px;
        vertical-align: middle;
        align-items:center;
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 1px;
        transition: transform 80ms ease-in;
    }

    .signUp_user button:active {
        transform: scale(0.95);
    }

    .signUp_user button:focus {
        outline: none;
    }

    .signUp_user button.ghost {
        background-color: transparent;
        border-color: #FFFFFF;
    }


</style>

