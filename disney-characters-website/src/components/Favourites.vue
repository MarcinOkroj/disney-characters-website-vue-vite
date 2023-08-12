<script lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import FavService from '../service/FavService'

export default {
    setup() {
        let chars: any = ref([])
        JSON.parse(localStorage['favChars']).forEach((id: number) => {     
            axios.get(`https://api.disneyapi.dev/character/${id}`).then(response => {
                chars.value.push(response.data.data)           
            })
        });
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

<style></style>