<template>
<div class="pedidos">
    <center>
         <div class="lista-Pedidos">
   
    <h1
     class="pedido"
     v-for="pedido in pedidoPorUsername"
        :key="pedido.id"
        :value="pedidoPorUsername.id">
        <center>
            {{pedido.nombrePrenda}} | 
            fechaPedido: {{pedido.fechaPedido.substring(0,10)}} | 
            talla : {{pedido.talla}} 
            <button v-on:click="deletePedido(pedido.id)" class="eliminar-traje">eliminar</button>
        </center>
          
        
    </h1>
       
 
     </div>
    </center>
   
</div>



</template>


<script>
import jwt_decode from "jwt-decode"
import gql  from "graphql-tag";
export default {
    name: "Pedidos",

    data: function(){
        return {
           
            username: localStorage.getItem("username") || "none",
            pedidoPorUsername:[]
        }
    },

     apollo:{
        pedidoPorUsername:{
            query: gql`
               query Query($username: String!) {
                pedidoPorUsername(username: $username) {
                id
                fechaPedido
                username
                valor
                fechaEntrega
                nombrePrenda
                talla
                }
            }`,
            variables(){
                return  {
                    username: this.username,
                    
                    }
            }
        }
        
        
        },

    methods: {
        created: async function () {
            this.$apollo.queries.pedidoPorUsername.refetch();
        },

        deletePedido: function (pedidoId) {
             this.$apollo.mutate({
                mutation: gql`
                mutation BorrarPedido($pedidoId: String!) {
                     borrarPedido(pedidoId: $pedidoId) {
                         status
                        }
                   }`,variables:{
                       pedidoId: pedidoId,
                    }
            }).then((result) => {
                  alert("pedido eliminado con exito");
                  this.$router.go(0);
              }).catch((error) => {
                  alert("hubo un error al eliminar el pedido");
              });
              
        }
    },

}
</script>


<style>
    .pedido{
        border: 1px solid rgb(168, 206, 241);
        height: 60px;
        border-radius: 10px;
        padding-top: 30px;
        box-shadow: 8px 10px 20px -10px rgb(189, 186, 186);
    }

    .pedido:hover{
        background-color:rgb(117, 243, 201);
    }

    .pedidos{
        margin-top: 30px;
        width: 100%;
        height: 80%;
        /*border: 1px solid black;*/
    }

    
    .eliminar-traje{
        margin-left: 70px;
        height: 40px;
        width: 110px;
        border-radius: 11px;
        border: 0px solid white;
        background-color:rgb(255, 117, 117);
    }

    .eliminar-traje:hover{
        background-color:rgb(248, 12, 24);
    }
    
    .lista-Pedidos{
       width:50%;
       /*border: 1px solid black;*/
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