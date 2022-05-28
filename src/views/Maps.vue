<template>
    <div>
        <div>Google Map => {{center}}</div>
        <!-- <p>{{coordinates.lat}} latitude, {{coordinates.lng}}</p> -->
        
        <div class="">
            <v-col cols="12">
                <!-- <GmapAutocomplete @place_changed='setPlace'></GmapAutocomplete> -->
                 <!-- <gmap-map
                    :center="center"
                    :zoom="12"
                    style="width:100%;  height: 400px;"
                    >
                    <gmap-maker :key="index" v-for="(m, index) in markers" :position="m.position" @click="center=m.position"></gmap-maker>
                    </gmap-map> -->
                <!-- <gmapAutocomplete @></gmapAutocomplete> -->
                <GmapMap
                    :center="{lat:detailMap.lat, lng:detailMap.lng}"
                    :zoom="15"
                    map-type-id="terrain"
                    style="width: 500px; height: 300px"
                    >
                    <GmapMarker
                        
                        :key="index"
                        :position="{lat:detailMap.lat, lng:detailMap.lng}"
                        :clickable="true"
                        :draggable="true"
                        @click="center=m.position"
                    />
                    </GmapMap>
            </v-col>
            <v-col cols="12" class="Map-img"><v-img :src="detailMap.profile_url"></v-img></v-col>
            
        </div>
        
        <!-- <p>{{id}}</p>
        <p>{{detailMap.id}}</p>
        <p>{{detailMap.name}}</p> -->
    </div>
</template>


<script>

import axios from 'axios'
// import marker from 'vue2-google-maps/dist/components/marker';
export default {
    name:'Maps',
    data() {
        return {
            // center: { lat :, lng: this.$route.params.lng },
            // center: { lat: 45.508, lng: -73.587 },
            center:{
                lat:17.980496173423,
                lng:102.60572439511
            },
            currentPlace: null,
            markers: [
                
                    
                
            ],
            places: [],

            
            id:this.$route.params.id,
            mapsData:[],
        }
    },
    
    
        computed:{
            mapID(){
                return parseInt(this.$route.params.id)
            },
            detailMap(){
                let item  = this.mapsData
                return item.find(LocatV => LocatV.id === this.mapID)
            }
        },
    async mounted(){
            await axios.get('http://localhost:3000/maps')
                .then(resp => {
                    this.mapsData = resp.data
                    })
                    .catch(err =>{
                        console.log(err,'errorMap')
                    })
         },
    methods: {

        
        }
}
</script>

<style lang="scss" scoped>
.Map-img{
    width:100%px;
    height: 100%px;
}
</style>