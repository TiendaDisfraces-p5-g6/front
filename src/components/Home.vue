<template>

    <div class="greetings">
        <Prendas/>
    </div>

</template>


<script>
import Prendas from './inventario.vue'

export default {
    name: "Home",

    components:{
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