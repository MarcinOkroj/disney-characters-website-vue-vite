<script lang="ts">
import { ref } from 'vue'
import FavService from '../service/FavService'

export default {
    props: ['bestChar'],
    setup() {

    },

    data() {
        return {
            tooltipText : function(char: any){
                return char.tvShows.join(', ')
            },
            favService: new FavService()
        }
    }

}

</script>


<template>
    <div class="tile-wrapper">
        <div class="tile-bg-img__container">
            <img class="tile-bg-img__inner" :src="`${bestChar.imageUrl}`" :alt="`Character's picture`" />
        </div>
        <div class="tile-info">
            <div class="upper-row">
                <div class="upper-row__name">
                    {{ bestChar.name }}&nbsp;
                    <div v-if="bestChar.tvShows.length" v-tooltip.top="tooltipText(bestChar)">
                        <font-awesome-icon icon="tv" />
                    </div>
                </div>
                <div class="upper-row__fav">
                    <i v-if="favService.inLocalStorage(bestChar._id)" class="fa-solid fa-star char-table__fav-icon"
                        @click="favService.onFavClick($event, bestChar)"></i>
                    <i v-if="!favService.inLocalStorage(bestChar._id)" class="fa-regular fa-star char-table__fav-icon"
                        @click="favService.onFavClick($event, bestChar)"></i>
                </div>
            </div>
            <div class="lower-row">
                <div class="lower-row__films">
                    Films: {{ bestChar.films.length }}
                </div>
                <div class="lower-row__tvshows">
                    Tv Shows: {{ bestChar.tvShows.length }}
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.tile-wrapper {
    border-color: lightgray;
    border-style: solid;
    box-shadow: 1px 8px 7px 1px rgba(#5c5c5c, 0.2);
    border-radius: 12px;
    border-width: 2px;
    height: 300px;
    margin: 30px 25px 40px;
    width: 240px;
}

.tile-bg-img__inner {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: block;
    height: 160px;
    min-height: 190px;
    object-fit: cover;
    width: 100%;
}

.tile-bg-img {
    height: 190px;
    width: 100%;
}

.tile-info {
    display: flex;
    flex-direction: column;
    height: 110px;
    justify-content: space-between;
    padding: 0.5em 1em;
}

.upper-row {
    display: flex;
    justify-content: space-between;
}

.upper-row__name {
    font-size: 1.25em;
    padding-top: 0.5em;
    display: flex;
}

.upper-row__fav {
    font-size: 1.25em;
    padding-top: 0.5em;
}

.fa-solid.fa-star {
    color: yellow;
}

.fa-star:hover {
    cursor: pointer;
}

.lower-row__tvshows {
    padding-bottom: 1em;
}
</style>