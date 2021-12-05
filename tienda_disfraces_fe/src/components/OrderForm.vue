<template>
    <div class="order">
        <div class="container_order">
            <h2>Solicita tu traje o disfraz</h2>
            
            <form v-on:submit.prevent="processOrderForm" >
                <div class="field_1">
                    <label for="prenda">Prenda</label>
                    <input type="text" id="prenda" v-model="pedidos.nombrePrenda">
                </div>
                <br>

                <div class="field_2">
                    <label for="talla">Talla</label>
                    <select id="talla" v-model="pedidos.talla">
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                    </select>
                </div>
               <br>
             
                <div class="field_3">
                    <label for="fechaPedido">Fecha de Pedido</label>
                    <input type="date" id="fechaPedido" v-model="pedidos.fechaPedido">
                </div>
                <br>
                
                <div class="field_4">
                    <label for="entrega">Fecha de Entrega</label>
                    <input type="date" id="entrega" v-model="pedidos.fechaEntrega">
                </div>
                <br>
                
                <div class="field_5">
                    <label for="valor">Valor ($)</label>
                    <input type="number" id="valor" v-model="pedidos.valor">
                </div>
                <br>
                
                <button type="submit">SOLICITAR</button>
            </form>
        </div>
    </div>
</template>

<script>
    
export default {
        name: "orderForm",
        
        data: function(){
            return {
                pedidos: {
                    fechaPedido: "",
                    valor: "",
                    fechaEntrega: "",
                    nombrePrenda: "",
                    talla:"",
                }
            }
        },

        methods:{
            processOrderForm: function(){

            },
        },
}
</script>

<style>
    .order{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container_order {
        border: 3px solid #000000;
        border-radius: 10px;
        width: 45%;
        height: 92%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
 
    .container_order h2{
        font-family: "Raleway", sans-serif;
        font-size: 35px;
        color: #000000;
        margin-top: 50px; 
    }
 
    .order form{
        width: 60%;   
    }

	.field_1 label{
        display: inline-block;
	  	width: 30%;
	  	text-align: right;
        margin-right: 5px;
	  	margin-left: 2px;
        margin-top: 2px;
        margin-bottom:0;
        font-family: "Raleway",sans-serif;
        font-size: 15.5px;
        color: #000000;
    }

    .field_1{
        display: flex;
        vertical-align: middle;
        align-items:center;
        margin-top: 2px;
    }

	.field_2 label{
        display: inline-block;
	  	width: 30%;
	  	text-align: right;
	  	margin: 5px;
        margin-left: 2px;
        margin-top: 7px;
        margin-bottom: 0;
        font-family: "Raleway",sans-serif;
        font-size: 15.5px;
        color: #000000;
        
    }

    .field_2{
        display: flex;
        vertical-align: middle;
        align-items:center;
        margin-top: 0;   
    }


	.field_3 label{
        display: inline-block;
	  	width: 30%;
	  	text-align: right;
	  	margin: 5px;
        margin-left: 2px;
        margin-top:7px;
        margin-bottom:0;
        font-family: "Raleway",sans-serif;
        font-size: 15.5px;
        color: #000000;
    }

    .field_3{
        display: flex;
        vertical-align: middle;
        align-items:center;
        margin-top:0px;
    }

	.field_4 label{
        display: inline-block;
	  	width: 30%;
	  	text-align: right;
	  	margin: 5px;
        margin-left: 2px;
        margin-top:7px;
        margin-bottom:0;
        font-family: "Raleway",sans-serif;
        font-size: 15.5px;
        color: #000000;
    }

    .field_4{
        display: flex;
        vertical-align: middle;
        align-items:center;
    }

	.field_5 label{
        display: inline-block;
	  	width: 30%;
	  	text-align: right;
	  	margin: 5px;
        margin-left: 2px;
        margin-top: 7px;
        margin-bottom:0;
        font-family: "Raleway",sans-serif;
        font-size: 15.5px;
        color: #000000;
    }
    
    .field_5{
        display: flex;
        vertical-align: middle;
        align-items:center;
    }

    .order input{
        height: 25px;
        width: 100%;
        box-sizing: border-box;
        padding: 10px 20px;
        margin: 5px 0;
        margin-left: 20px;
        margin-bottom: 1px;
        border: 1px solid #283747;
    }

    .field_2 select{
        height: 25px;
        width: 100%;
        box-sizing: border-box;
        padding: 10px 20px;
        margin: 5px 0;
        margin-left: 20px;
        margin-bottom: 1px;
        border: 1px solid #283747;  
    }
 
    .container_order button{
        width: 170px;
        height: 40px;
        color: #000000;
        background: #fab000;
        border: 1px solid #E5E7E9;
        border-radius: 20px;
        padding: 10px 15px;
        margin: 5px 0 35px 115px;
        vertical-align: middle;
        align-items:center;
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 1px;
        transition: transform 80ms ease-in;
    }

    .container_order button:active {
        transform: scale(0.95);
    }

    .container_order button:focus {
        outline: none;
    }

    .container_order button.ghost {
        background-color: transparent;
        border-color: #FFFFFF;
    }


</style>