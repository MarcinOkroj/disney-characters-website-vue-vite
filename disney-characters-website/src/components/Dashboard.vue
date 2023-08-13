<script lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import FavService from '../service/FavService'

export default {
    props: {
        title: String,
        likes: Number
    },
    setup(props) {
        let chars: any = ref()
        let bestChars: any = ref()
        let bestCharsFlag: any = ref()
        axios.get('https://api.disneyapi.dev/character?pageSize=100').then(response => {
            chars.value = response.data.data;
            bestChars.value = response.data.data
                .slice() //make shallow copy
                .sort((a: any, b: any) => b.films.length - a.films.length)
                .slice(0, 3);
            bestCharsFlag.value = true
        })

        return {
            chars,
            bestChars,
            bestCharsFlag
        }
    },

    data() {
        return {
            tooltipText: function (char: any) {
                return char.tvShows.join(', ')
            },
            favService: new FavService()
        }
    }
}
</script>

<template>
    <div>
        <div v-if="bestCharsFlag" class="tiles-wrapper">
            <Tile v-for="bestChar in bestChars" v-bind:bestChar="bestChar" />
        </div>
        <div class="char-table">
            <DataTable :value="chars" tableStyle="min-width: 50rem">
                <Column header="Picture">
                    <template #body="slotProps">
                        <img :src="`${slotProps.data.imageUrl}`" :alt="`Character's picture`" class="picture" />
                    </template>
                </Column>
                <Column header="Name">
                    <template #body="slotProps">
                        {{ slotProps.data.name }}&nbsp;
                        <span v-if="slotProps.data.tvShows.length" v-tooltip.top="tooltipText(slotProps.data)">
                            <font-awesome-icon icon="tv" />
                        </span>
                    </template>
                </Column>
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
.tiles-wrapper {
    align-items: center;
    display: flex;
}

.tiles-wrapper__title {
    color: black;
    font-size: 3em;
}

.tiles-wrapper__tiles {
    display: flex;
}

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