<template>
<div class="modal" id="modal">
  <div class="container">
      <div>
          <div class="container-btn">
              <button v-on:click="cerrar" class="btn-close">X</button>
          </div>
          <div class="input-datos">
              <center>
                 <h1>Datos del pedido</h1>
              </center>
         </div>

         <div>
             <center>
               <input type="text">
               <br>
               <br>
               <input type="text">
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

    methods:{
      cerrar: function() {
         document.getElementById("modal").style.display = "none";
    },
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
    from {top: -90px; opacity:1;}
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
</style>