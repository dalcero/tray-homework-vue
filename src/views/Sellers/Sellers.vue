<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <h5 class="card-header">Vendedores</h5>

                    <h5 v-show="loading" class="text-center">Carregando...</h5>

                    <div v-show="!loading" class="card-body">
                        <router-link
                            :to="{ name: 'sellers.create' }"
                            class="btn btn-primary text-white float-end"
                            >Novo Vendedor</router-link
                        >

                        <table class="table table-bordered mt-5">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Comissão</th>
                                    <th scope="col" class="text-end">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="seller in sellers" :key="seller.id">
                                    <th scope="row">{{ seller.id }}</th>
                                    <td>{{ seller.name }}</td>
                                    <td>{{ seller.email }}</td>
                                    <td>{{ seller.commission }}</td>
                                    <td class="text-end">
                                        <seller :seller="seller" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <h5 v-show="!Object.keys(sellers).length">
                            Sem Vendedores cadastrados...
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from "vue";

import SellerService from "@/services/sellers.service";
import Seller from "./Seller.vue";

export default {
    name: "Sellers",
    setup() {
        const sellers = ref([]);

        const loading = ref(false);

        onMounted(() => {
            loading.value = true;

            SellerService.getAll()
                .then((response) => (sellers.value = response.data.data))
                .catch((error) => console.log(error))
                .finally(() => (loading.value = false));
        });

        return {
            loading,
            sellers,
        };
    },
    components: {
        Seller,
    },
};
</script>