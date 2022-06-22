<template>
    <div class="ovf">
        <Toolbar/>
        <div class="service">
            <h2>ສາຂາ {{detailMap.name}}</h2>
            <div class="bsv">
            <v-row>
                <v-col cols="12" sm="7">
                  <div class="picl">
                      <img :src="detailMap.profile_url" alt="" class="picresponsive">
                                          </div>
                </v-col>
                <v-col cols="12" sm="5">
                    <!-- <Maps></Maps> -->
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
                        :draggable="false"
                        @click="center=m.position"
                    />
                    </GmapMap>
                </v-col>
            </v-row>
            </div>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Toolbar from "../../components/Toolbar.vue";
import Footer from "../../components/Footer.vue";
import HomeView from "../HomeView.vue";
// import Maps from "../Maps.vue";
import axios from 'axios'
export default {
  name: "branch",
  data() {
      return {
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

        
        },
  components: {
    //   Maps,
    Toolbar,
    Footer,
    HomeView,
    
  },
};
</script>
<style scoped>
.service{
    text-align: center;
    margin-top: 80px;
}
.bsv{
    padding: 3%;
}
.picl{
    position:relative;
}
.picresponsive{
    width: 80%;
    height: auto;
}
.ovf{
    overflow: hidden;
}
</style>