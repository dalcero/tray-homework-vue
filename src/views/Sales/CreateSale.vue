<template>
    <div>
        <div class="container">
            <div class="col-sm-12">
                <div class="card">
                    <h5 class="card-header">Nova Venda</h5>

                    <div class="row">
                        <div class="col-sm-12 p-5">
                            <div
                                v-show="Object.keys(sale.errors).length"
                                class="alert alert-danger"
                                role="alert"
                            >
                                <ul
                                    v-for="(error, index) in sale.errors"
                                    :key="index"
                                >
                                    <li>{{ error[0] }}</li>
                                </ul>
                            </div>

                            <form
                                action="#"
                                method="post"
                                @submit.prevent="createSale"
                            >
                                <div class="mb-3">
                                    <select
                                        class="form-control"
                                        v-model="sale.seller_id"
                                    >
                                        <option disabled value="">
                                            Escolha um vendedor
                                        </option>
                                        <option
                                            v-for="(seller, index) in sellers"
                                            :value="seller.id"
                                            :key="index"
                                        >
                                            {{ seller.name }}
                                        </option>
                                    </select>
                                </div>

                                <div class="mb-3">
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Valor da Venda"
                                        v-model="sale.total"
                                    />
                                </div>

                                <router-link
                                    :to="{ name: 'sellers.index' }"
                                    class="btn btn-secondary"
                                    >Voltar</router-link
                                >

                                <button
                                    type="submit"
                                    :disabled="sale.loading"
                                    class="btn btn-primary float-end"
                                >
                                    <span v-if="sale.loading">Salvando...</span>
                                    <span v-else>Salvar</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref, reactive } from "vue";

import SaleService from "@/services/sales.service";
import SellerService from "@/services/sellers.service";
import router from "@/router";

export default {
    name: "CreateSale",
    setup() {
        const sellers = ref([]);

        const sale = reactive({
            seller_id: "",
            total: "",
            loading: false,
            errors: [],
        });

        onMounted(() => {
            SellerService.getAll().then(
                (response) => (sellers.value = response.data.data)
            );
        });

        const createSale = () => {
            sale.loading = true;
            SaleService.createSale({ ...sale })
                .then((response) => {
                    if (response.data.success) {
                        alert("Venda lançada!");
                        router.push({ name: "sellers.index" });
                    }

                    sale.errors = response.data.data;
                })
                .finally(() => (sale.loading = false))
                .catch(() => {
                    alert("Não foi possível lançar a Venda.");
                });
        };

        return {
            createSale,
            sale,
            sellers,
        };
    }
};
</script>