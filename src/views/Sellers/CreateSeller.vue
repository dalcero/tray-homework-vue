<template>
    <div>
        <div class="container">
            <div class="col-sm-12">
                <div class="card">
                    <h5 class="card-header">Novo Vendedor</h5>

                    <div class="row">
                        <div class="col-sm-12 p-5">
                            <div
                                v-show="Object.keys(seller.errors).length"
                                class="alert alert-danger"
                                role="alert"
                            >
                                <ul
                                    v-for="(error, index) in seller.errors"
                                    :key="index"
                                >
                                    <li>{{ error[0] }}</li>
                                </ul>
                            </div>

                            <form
                                action="#"
                                method="post"
                                @submit.prevent="createSeller"
                            >
                                <div class="mb-3">
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Nome"
                                        required
                                        v-model="seller.name"
                                    />
                                </div>

                                <div class="mb-3">
                                    <input
                                        type="email"
                                        class="form-control"
                                        placeholder="Email"
                                        required
                                        v-model="seller.email"
                                    />
                                </div>

                                <router-link
                                    :to="{ name: 'sellers.index' }"
                                    class="btn btn-secondary"
                                    >Voltar</router-link
                                >

                                <button
                                    type="submit"
                                    :disabled="seller.loading"
                                    class="btn btn-primary float-end"
                                >
                                    <span v-if="seller.loading"
                                        >Salvando...</span
                                    >
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
import { reactive } from "vue";

import SellerService from "@/services/sellers.service";
import router from "@/router";

export default {
    name: "CreateSeller",
    setup() {
        const seller = reactive({
            name: "",
            email: "",
            loading: false,
            errors: [],
        });

        const createSeller = () => {
            seller.loading = true;
            SellerService.createSeller({ ...seller })
                .then((response) => {
                    if (response.data.success) {
                        alert("Vendedor cadastrado!")
                        router.push({ name: "sellers.index" })
                    }

                    seller.errors = response.data.data;
                })
                .finally(() => (seller.loading = false))
                .catch(() => {
                    alert("Não foi possível salvar o Vendedor.")
                });
        };

        return {
            createSeller,
            seller,
        };
    },
};
</script>