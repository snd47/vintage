<template>
        <div>
            <div class="tabs">
              <ul>
                <li  v-for="(tab, i) in tabs" :key="i" :class="{ 'is-active': tab.isActive }">
                    <a :href="tab.href"  @click="actions(tab)" class="text-uppercase" >{{ tab.name }}</a>
                </li>
              </ul>
            </div>
            <div class="tabs-details">
                <slot></slot>
            </div>          
        </div>
        
  </template>
   <script> 
   import tab from '@/components/UI/Tab.vue'
   export default {
    components :{
        tab
    },
    data() {
        return {
            tabs: [],
        
             cities: [
                {name:'Kyiv', lat: 50.489378, lng: 30.489970},
                {name:'New York', lat: 40.688268, lng: -73.991511},
                {name:'Guangzhou', lat: 23.129004, lng: 113.275446},
                {name:'Barcelona', lat: 41.384240, lng: 2.182396}
            ],
            currentPlace: "kyiv",       
            markers: [],
            marker:{},
            center: {},
            places: []
        };       
    },
    mounted() {
        this.addMarker(this.currentPlace)
    },
    created() {
        this.tabs = this.$children;      
    },
    methods: {    
        actions(selectedTab) {
            this.selectTab(selectedTab);
            this.addMarker(selectedTab);
        }, 
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);     
                if (tab.name == selectedTab.name)    {
                    this.currentPlace = tab.name.toLowerCase();
                }   
            });
        },
        addMarker() {
              
              console.log("this.currentPlace add maker  " + this.currentPlace);
                    var lat;
                    var lng;
                    var marker ;
            if (this.currentPlace == 'kyiv') { 
                    lat = this.cities[0].lat;
                    lng = this.cities[0].lng;
            } else  if (this.currentPlace == 'new york') { 
                    lat = this.cities[1].lat;
                    lng = this.cities[1].lng;
                    console.log("this.cities[1].lat " + this.cities[1].lat);
                    console.log("this.cities[1].lng " + this.cities[1].lng);
            } else  if (this.currentPlace == 'guangzhou') { 
                    lat = this.cities[2].lat;
                    lng = this.cities[2].lng;
            } else { 
                    lat = this.cities[3].lat;
                    lng = this.cities[3].lng;
            }                            
                marker = {
                            lat: lat,
                            lng: lng
                            };
                        console.log("marker.lat" + marker.lat);    
                this.marker = marker;
                console.log("this.marker " + this.marker.lat);
                this.markers.push({ position: marker });
                console.log("this.markers " + this.markers[0].position.lat);
                this.center = marker;
                console.log("this.center " + this.center.lat );
               
                this.$emit("inputData", this.marker); 
                this.markers = [];  
    },

    
    }
   }
</script>

<style lang="scss" scoped>

.tabs {
        user-select: none;
        align-items: stretch;
        display: flex;
        font-size: 1rem;
        justify-content: space-between;
        overflow: hidden;
        overflow-x: auto;
        white-space: nowrap;
    
    ul {
        align-items: center;
        display: flex;
        flex-grow: 1;
        flex-shrink: 0;
        justify-content: flex-start;
    }
    li {
        display: block;
    }
    a {
        align-items: center;
        color: #ffffff;
        display: flex;
        justify-content: center;
        margin-bottom: -1px;
        padding: .5em 2.5em .5em 0;
        vertical-align: top;
        font-size:11px;
        font-weight:600;
        letter-spacing: 1.54px;
    }
    a:hover {
        text-decoration-line: none;
    }
    li.is-active a{
    color: #3db565;
    }
}
</style>