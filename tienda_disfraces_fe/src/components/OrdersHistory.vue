<template>
    <div class="ordersHistory">
        <h2>Mi Historial de Pedidos</h2>
        <div class="orders_table">
            <table>
                <tr>
                    <th>Nombre traje/disfraz</th>
                    <th>Talla</th>
                    <th>Fecha Solicitud</th>
                    <th>Fecha Entrega</th>
                    <th>Valor</th>
                </tr>

                <tr v-for="pedidos in pedidosUsername" :key="pedidos.id">
                    <td>{{ pedidos.nombrePrenda}}</td>
                    <td>{{ pedidos.fechaPedido}}</td>
                    <td>{{ pedidos.fechaEntrega}}</td>
                    <td>{{ pedidos.talla }}</td>
                    <td>${{ pedidos.valor }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default { 
    name:"ordersHistory",

    data: function(){
        return{
        
        }
    },

    methods: {

    },
}
</script>

<style>
    .ordersHistory {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
    }

    .ordersHistory h2{
        font-family: 'Raleway', sans-serif;
        font-size: 35px;
        color: #000000;
        margin: 5px auto 5px auto;
        padding-top: 40px;
    }

    .orders_table{
        width:80%;
        max-height: 250px;
        margin-top: 40px;
        overflow-y: scroll;
        overflow-x: hidden;
    }

    .orders_table table{
        width: 100%;
        border-collapse: collapse;
        border: 1px solid rgba(0,0,0, 0.3);
    }

    .orders_table table td, orders_table table th{
        border: 1px solid #ddd;
        padding: 8px;    
        text-align:center;
        font-family: "calibri";
    }

    .orders_table table tr:nth-child(even){
        background-color: #f2f2f2;
    }

    .orders_table table tr:hover{
        backgound-color: #ddd;
    }


    .orders_table table th{
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #000000;
        color: white;
        font-family: "calibri";
        font-size: 18px;
        text-transform:uppercase;
        text-align:center;
    }
</style>