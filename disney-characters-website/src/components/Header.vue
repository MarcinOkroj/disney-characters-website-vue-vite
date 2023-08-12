<script lang="ts" setup>
import { ref } from 'vue'
</script>

<template>
    <header class="header">
        <div class="header__icon" routerLinkActive="active">
            <router-link to="/">
                <img src="../assets/Disney_wordmark.svg" />
            </router-link>
        </div>
        <div class="header__favourites" routerLinkActive="active">
            <router-link to="/favourite" class="header__favourites--link">My favourite</router-link>
        </div>
    </header>
</template>

<style>
.header {
    align-items: center;
    display: flex;
    height: 65px;
    width: 100vw;
}

.header__icon {
    margin-left: 40px;
}

.header__icon a {
    color: black;
    font-size: large;
    text-decoration: none;
}

.header__icon a:hover {
    cursor: pointer;
}


.header__icon a img {
    height: 35px;
}

.header__favourites {
    border-color: black;
    border-style: solid;
    border-width: 0 1px 0 1px;
    margin-left: 20px;
    padding-left: 20px;
    padding-right: 20px;
}

.header__favourites a {
    font-weight: 600;
    text-decoration: none;
    font-size: large;
    color: black
}

.header__favourites a:hover{
    cursor: pointer;
}

/* .header{
    align-items: center;
    display: flex;
    height: 65px;
    width: 100vw;

    &__icon{
        margin-left: 40px;


        &--img{
            height: 35px;
        }
    }

    &__favourites{
        margin-left: 20px;
        padding-left: 20px;
        padding-right: 20px;
        border-width: 0 1px 0 1px;
        border-color: $black;
        border-style: solid;

        &--link{
            text-decoration: none;
            font-size: large;
            color: $black

        }
        
    }
} */
</style>