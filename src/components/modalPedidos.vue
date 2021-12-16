<template>
<div class="modal" id="modal">
  <div class="container" >
      <div>
          <div class="container-btn">
              <button v-on:click="cerrar" class="btn-close">X</button>
          </div>
          <div class="input-datos">
              <center>
                 <h1>Datos del pedido</h1>
              </center>
         </div>

         <div >
             <center>
               <input v-model="pedido.nombrePrenda" placeholder = "que prenda desea" type="text" Required>
               <br>
              <h4>seleccione su talla</h4>
              <select
              v-model="pedido.talla"
              placeholder="Seleccione su talla" Required>
              <option
               v-for="talla of tallas"
               :key="talla"
               :value="talla">
               {{talla}}
             </option>
             </select>
               <br>
               <br>
               <button  type="submit" v-on:click="setPedido" class="btn-pedido">crear</button>

             </center>
             
         </div>
          
      </div>
  </div>
</div>
</template>

<script>
import gql from 'graphql-tag'
export default {
    name: "Modal",

    data: function() {
        return{
           pedido:{
                   fechaPedido: localStorage.getItem("fecha"),
                   username: localStorage.getItem("username"),
                   valor: 5000,
                   fechaEntrega: localStorage.getItem("fecha"),
                   nombrePrenda: "",
                   talla: ""
                  },

                 tallas:[
                "Xs","S", "L" ,"XL"
                 ]
          };
    },

    created: async function() {
    this.getFecha();
  },
   
    methods:{
      cerrar: async function() {
         document.getElementById("modal").style.display = "none";
    },


      setPedido: async function(){
          await this.$apollo.mutate(
              {
                  mutation: gql`
                   mutation CrearPedido($pedido: PedidoIngreso!) {
                     crearPedido(pedido: $pedido) {
                        username
                        }
                     }`,
                   variables:{
                     pedido : this.pedido
                },

              }).then((result) => {

                  alert("pedido creado con exito");
              }).catch((error) => {
                  alert("hubo un error al crear su pedido");
              });
      },

      getFecha: async function (){
          let hoy = new Date();

          let dia = hoy.getDate();
          let mes = hoy.getMonth()+1;
          let anio = hoy.getFullYear();
          let diaEntrega = dia + 15;
          let mesEntrega = mes;
          if(diaEntrega > 30 )
             diaEntrega = 0;
             diaEntrega = (dia - 30) - 15;
             mesEntrega = mesEntrega +1;
         let fecha = `${anio}-${mes}-${dia}`;
         let fechaEntrega = `${anio}-${mesEntrega}-${diaEntrega}`;
         console.log(fecha)
         console.log(fechaEntrega)
        localStorage.setItem("fecha" , fecha);
        localStorage.setItem("fechaEntrega" , fechaEntrega)
      } 
    }
}
</script>

<style>

.input-datos{
    height:100%;
    margin-top:70px;
}


.modal{
    width: 100%;
    height: 110%;
    justify-content: center;
    align-items: center;
    color: black;
    position : fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    transition: all 500ms ease;
    display: none;
    -webkit-animation-name: modal;
    -webkit-animation-duration: 0.4s;
    animation-name: modal;
    animation-duration: 0.4s;
}

@-webkit-keyframes modal {
    from {top: -90px; opacity:0;}
    to   {top:0; opacity:1}
}

.container{
    width: 600px;
    height: 300px;
    margin: auto;
    background: #fff;
    box-shadow: 1px 7px 25px rgba(0,0,0,0.6);
    border-radius: 10px;
    position: relative;
   
}


.container-btn{
    justify-content:right;
    align-items: right;
   /* border: 1px solid black;*/
}

.btn-close{
    position: absolute;
    right: 5px;
    top: 5px;
    border-radius: 50%;
    border:#fff;
    height:60px;
    width: 60px;
    background: #fff;
    font-size: 35px;
    cursor: pointer;
}

.btn-close:hover{
    color: rgb(238, 10, 10);
}

.btn-pedido{
  border-radius: 8px;
  width: 80px;
  height: 40px;
  background-color:rgb(171, 243, 177);
  font-size: 20px;
  border: 1px solid rgb(248, 247, 247);
}

.btn-pedido:hover{
  background-color:#16c71f;
}
</style>