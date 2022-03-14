<template>
    <div class="container">
        <div class="col-sm-12">
            <div class="card">
                <h5 class="card-header">Vendas</h5>

                <h5 v-show="loading" class="text-center">Carregando...</h5>

                <div v-show="!loading" class="card-body">
                    <router-link
                        :to="{ name: 'sales.create' }"
                        class="btn btn-primary text-white float-end"
                        >Lançar Venda</router-link
                    >

                    <table class="table table-bordered mt-5">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Email</th>
                                <th scope="col">Data da Venda</th>
                                <th scope="col">Valor da Venda</th>
                                <th scope="col">Comissão da Venda</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="sale in sales" :key="sale.id">
                                <th scope="row">{{ sale.id }}</th>
                                <td>{{ sale.name }}</td>
                                <td>{{ sale.email }}</td>
                                <td>{{ sale.date }}</td>
                                <td>{{ sale.total }}</td>
                                <td>{{ sale.commission }}</td>
                            </tr>
                        </tbody>
                    </table>

                    <h5 v-show="!Object.keys(sales).length">
                        Sem Vendas lançadas...
                    </h5>

                    <router-link
                        :to="{ name: 'sellers.index' }"
                        class="btn btn-secondary float-end"
                        >Voltar</router-link
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from "vue";

import SaleService from "@/services/sales.service";

export default {
    name: "Sales",
    props: {
        id: {
            require: true,
        },
    },
    setup(props) {
        const sales = ref([]);

        const loading = ref(false);

        onMounted(() => {
            loading.value = true;

            SaleService.getSalesBySeller(props.id)
                .then((response) => (sales.value = response.data.data))
                .catch((error) => console.log(error))
                .finally(() => (loading.value = false));
        });

        return {
            loading,
            sales,
        };
    },
};
</script>