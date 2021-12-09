<template>

    

</template>


<script>
import jwt_decode from "jwt-decode";


export default {
    name: "Pedidos",

    data: function(){
        return {
            name: "",
            email: "",
            balance: 0,
            loaded: false,
        }
    },

    methods: {
        getData: async function () {

            if (localStorage.getItem("token_access") === null || localStorage.getItem("token_refresh") === null) {
                this.$emit('logOut');
                return;
			}

            await this.verifyToken();
            
            let token = localStorage.getItem("token_access");
            let userId = jwt_decode(token).user_id.toString();
            
          
        },

        verifyToken: function () {
            
        }
    },

    created: async function(){
        this.getData();
    },
}
</script>


<style>
    .Pedidos{
        margin-top: 30px;
        width: 100%;
        height: 50%;
       
    }


    .information h1{
        font-size: 60px;
        color: #0f1316;
    }

    .information h2{
        font-size: 40px;
        color: #283747;
    }

    .information span{
        color: crimson;
        font-weight: bold;
    }
</style>