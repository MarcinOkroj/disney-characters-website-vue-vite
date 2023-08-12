<script lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import FavService from '../service/FavService'



export default {
    setup() {

        let chars: any = ref()
        axios.get('https://api.disneyapi.dev/character?pageSize=20').then(response => {
            chars.value = response.data.data;
        })
        return {
            chars
        }
    },

    data() {       
        return {
            favService: new FavService()
        }
    }
}
</script>

<template>
    <div>
        <div class="char-table">
            <DataTable :value="chars" tableStyle="min-width: 50rem">
                <Column header="Picture">
                    <template #body="slotProps">
                        <img :src="`${slotProps.data.imageUrl}`" :alt="`Character's picture`" class="picture" />
                    </template>
                </Column>
                <Column field="name" header="Name"></Column>
                <Column field="films.length" header="Films count"></Column>
                <Column header="Favourite">
                    <template #body="slotProps">
                        <i v-if="favService.inLocalStorage(slotProps.data._id)"
                            class="fa-solid fa-star char-table__fav-icon"
                            @click="favService.onFavClick($event, slotProps.data)"></i>
                        <i v-if="!favService.inLocalStorage(slotProps.data._id)"
                            class="fa-regular fa-star char-table__fav-icon"
                            @click="favService.onFavClick($event, slotProps.data)"></i>
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>
</template>

<style>
.char-table {
    padding-top: 40px;
    width: 50vw;
}

.picture {
    border-radius: 50%;
    height: 12vw;
    max-height: 140px;
    max-width: 140px;
    padding: 5px;
    width: 12vw;
}

.char-table__fav-icon {
    font-size: 30px;
}

.fa-solid.fa-star {
    color: var(--star-yellow);
}

.fa-star:hover {
    cursor: pointer;
}

th {
    font-size: 1.3em;
}

td {
    font-size: 1.25em;
}
</style>