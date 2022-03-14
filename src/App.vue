<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
        <div class="container-fluid">
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link
                            :to="{ name: 'home' }"
                            class="nav-link active"
                            >HOME</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link
                            :to="{ name: 'sellers.index' }"
                            class="nav-link"
                            >VENDEDORES</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link
                            :to="{ name: 'sales.create' }"
                            class="nav-link"
                            >LANÇAR VENDAS</router-link
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <router-view />
</template>