<template>

    <div class="greetings">
        <Modal/>
        <Prendas/>
    </div>

</template>


<script>
import Prendas from './inventario.vue'
import Modal from './modalPedidos.vue'

export default {
    name: "Home",

    components:{
        Modal,
        Prendas
        },

    data: function(){
        return {
            username: localStorage.getItem('username') || "none"
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
    .greetings{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
    
        display: flex;
        justify-content: center;
        align-items: center;
    }

  
</style>