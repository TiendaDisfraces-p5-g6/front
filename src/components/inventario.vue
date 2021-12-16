<template>

<div>
   
    <center>
     <div class="Pedidos">
       <center><button v-if="is_auth" v-on:click="abrir" type ="checkbox" class="pedidos-button"> + Realizar pedido personalizado</button></center>
    </div>
    <div class="prenda-container">
   
         <div class = "prenda" 
                v-for="detallePrenda in detallePrenda"
                :key="detallePrenda.id"
                :value="detallePrenda.id">
            <div >
              <div ><center><img placeholder ="img" :src="detallePrenda.img"/></center></div>
            </div>
             <div class = "prenda-detalle">
              <div><h1>Tipo:{{detallePrenda.tipoPrenda}}</h1></div>
              <div><h1>Descripcion:{{detallePrenda.descripcion}}</h1></div>
              <div><h1>Precio:{{detallePrenda.precio}}</h1></div>
              </div>
              <div>
                  <center>
                      <button class="alquilar">
                          alquilar
                      </button>
                  </center>
                  
              </div>
        </div>
     </div>
   </center>
 </div>
</template>

<script>
import gql  from "graphql-tag";
export default {
    name: "Prendas",
   
    
    data: function(){
        return {

             is_auth : localStorage.getItem("isAuth"),
             detallePrenda:{
                id: "",
                tipoPrenda:"",
                descripcion:"",
                cantidad:0,
                precio:0,
                img:""
            }
        }
    },
    
    apollo:{
         detallePrenda : {
            query : gql`query DetallePrenda {
                 detallePrenda {
                       id
                       tipoPrenda
                       descripcion
                       cantidad
                       precio
                       img
                    }
                }`,

                variables(){
                    return {
                        
                    }
                }
                
        }
    },

    methods:{
        abrir: function() {
         document.getElementById("modal").style.display = "flex";
         },

        crearPedido: async function(){
            await this.$apollo.mutate({
                
            })
        } 
    }
  
}
</script>

<style>


 .pedidos-button{
     border-radius: 10px;
     border:1px solid white;
     background-color: rgb(171, 243, 177);
     font-size:15px;
     height: 40px;
     width:300px;
 }

 .pedidos-button:hover{
     background-color: #16c71f;
 }

.prenda{
    display:block;
    overflow: hidden;
    border-radius: 3%;
    border:1px solid rgb(227, 240, 252); 
    width: 400px;
    height: 450px;
    margin-right: 20px;
    box-shadow: 8px 10px 20px -10px rgb(189, 186, 186);
    /*border:1px solid black;*/
}

.prenda:hover{
   background-color: rgb(239, 240, 243);
}

.prenda-detalle{
    font-size:50%;
    display: flex;
    display:block;
    overflow: hidden;
    border-radius: 10%;
    font-size:50%;
   /* border:1px solid black; */
    width: 100%;
    height: 150px;
    margin-right: 20px;
}

img{
    width: 200px;
    height: 250px;
}

.prenda h1{
    width: 100%;
    height: 100%;
}

.alquilar{
    width:90px;
    height:40px;
    background-color:#abf7b5;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
}

.alquilar:hover{
    background-color:#16c71f;
}

.prenda-container{
    margin-top: 20px;
    display: flex;
   /* border: 1px solid black; */
    width:70%;
    height: 600px;
}
</style>