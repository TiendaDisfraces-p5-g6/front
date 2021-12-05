<template>
    <div class="stock">
        <h2>Trajes y Disfraces Disponibles</h2>
        <div class="stock_table">
            <table>
                <tr>
                    <th>Tipo</th>
                    <th>Descripción</th>
                    <th>Talla</th>
                    <th>Cantidad</th>
                </tr>

                <tr v-for="prenda in prendaInventario" :key="prenda.id">
                    <td>{{ prenda.tipo_prenda}}</td>
                    <td>{{ pedidos.descripción}}</td>
                    <td>{{ pedidos.talla}}</td>
                    <td>{{ pedidos.cantidad}}</td>
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
    .stock {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
    }

    .stock h2{
        font-family: 'Raleway', sans-serif;
        font-size: 35px;
        color: #000000;
        margin: 5px auto 5px auto;
        padding-top: 40px;
    }

    .stock_table{
        width:80%;
        max-height: 250px;
        margin-top: 40px;
        overflow-y: scroll;
        overflow-x: hidden;
    }

    .stock_table table{
        width: 100%;
        border-collapse: collapse;
        border: 1px solid rgba(0,0,0, 0.3);
    }

    .stock_table table td, stock_table table th{
        border: 1px solid #ddd;
        padding: 8px;    
        text-align:center;
        font-family: "calibri";
    }

    .stock_table table tr:nth-child(even){
        background-color: #f2f2f2;
    }

    .stock_table table tr:hover{
        backgound-color: #ddd;
    }

    .stock_table table th{
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #fab000;
        border-color: #fab000;
        color: #000000;
        font-family: "calibri";
        font-size: 18px;
        text-transform:uppercase;
        text-align:center;
    }
</style>