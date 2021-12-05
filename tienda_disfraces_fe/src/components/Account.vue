<template>
    <div class="AccountInfo">
        <div class="container">
            <h1>Información de su cuenta</h1>
            <h2>Nombre: <span>{{name}}</span></h2>
            <h2>Teléfono: <span>{{phone}}</span></h2>
            <h2>Correo electrónico: <span>{{email}}</span></h2>
            <h2>Prendas Alquiladas: <span>{{prendasAlquiladas}}</span></h2>
        </div>
    </div>
</template>

<script>

export default {
        name: "account",

        data: function(){
            return {
                user: {
                    name: "",
                    password: "",
                    phone:"",
                    email: "",
                    prendasAlquiladas: 0,
                }
            };
        },

        methods: {
    
        },
}
</script>

<style>
    .AccountInfo{
        margin: 0;
        padding: 0%;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center; 
        align-items: center;
    }

    .container{
        padding: 30px;
        border: 3px solid rgba(0, 0, 0.3);
        border-radius: 20px;
        margin: 7% 0 6% 0;
        width: 40%;
        height: 80%;  
    }

    .container h1{
        font-size: 30px;
        font-family: 'Raleway', sans-serif;
        color: #000000;
        margin-left: 17%;
        margin-top: 5px;
        margin-bottom: 35px;
    }
 
    .container h2{
        font-size: 18px;
        font-family: 'Raleway', sans-serif;
        color: #000000;
    }
 
    .container span{
        color: #000080;
        font-weight: bold;
    }
</style>