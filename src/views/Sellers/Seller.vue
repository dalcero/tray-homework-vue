<template>
        <router-link :to="{name: 'sellers.sales', params: {id: seller.id}}" class="btn btn-sm btn-success">Vendas</router-link>
</template>

<script>

export default {
    name: 'Seller',
    props: {
        seller: {
            require: true,
            type: Object,
        }
    }
}
</script>