<template>
  <div class="wrapper">
    <div class="wrapper-content">

      <section class='pb-0'>
      <div> 
        <div class="container">
              <div class="row my-4">
                <div class="col-sm">
                  <h1>Contacts</h1>
                </div>
              </div>
            </div>
            </div>
        <header>
           
             <div class="container ">
              <div class="row mb-5">

                <div class="col-12 col-sm-6">
                  <h2 class="mb-3"> <span class="additionalColor text-uppercase">GMS</span>  Headquarters</h2>
                   <div class="row">
                    <div class="col-sm pr-0 head-col">
                      <p>Global Message Services Ukraine LLC</p>
                      <p>Bundesstrasse 5 | 3rd Floor</p>
                      <p>6300 Zug</p>
                      <p>Switzerland</p>
                      <h3 class="additionalColor mt-4">+41 41 544 62 00</h3>
                    </div>
                    <div class="col-sm head-col2 ">
                      <p>Email</p>
                      <p class="">info@gms-worldwide.com</p>
                      <p>Send message</p>
                      <p class="">Viber us</p>
                      <p>Send form</p>
                      <p class="">Contact us</p>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-sm-6 head-col20">
                <div >
                  <h2 class="mb-3">Technical support <span class="additionalColor">24/7</span></h2>
                   <p> GMS understands that it can be hard to follow all new technologies. We regularly provide for all our clients educational trainings to make your operator`s business earn more and better though our best practices.</p> 
                  <h3 class="additionalColor mt-3">+41 41 544 62 06</h3>
                </div>
                 </div>
              </div>
            </div>
        </header>

              <div id="main">
                      <div class="container main">
                          <div class="row">
                            <div class="col-12 col-sm-6 ourOffices">
                              <h2 class="mb-3">Our Offices</h2>
                              <tabs class="mb-4" @inputData="updateCoord" >
                                <!-- <tab name="Kyiv" :selected="true" id = "4" @mark="addMarker(2)" @change="addMarker(2)"> -->
                                  <tab name="Kyiv" :selected="true">
                                    <h3 class="my-4" >Global Message Services Ukraine LLC</h3>
                                    <p>Kuiv, Stepan Bandera, 17</p>
                                    <p>02066</p>
                                    <p>Ukraine</p>
                                  </tab>
                              
                                <tab name="New York">
                                <h3 class="my-4">Global Message Services USA LLC</h3>
                                  <p>38 Charles Rd.Brooklyn, NY</p>
                                  <p>11224</p>
                                  <p>USA</p>
                                </tab>
                                <tab name="Guangzhou">
                                  <h3 class="my-4">Global Message Services China LLC</h3>
                                  <p>No.5 Zhujiang West Road, Pearl River New City, Tianhe District, Guangzhou</p>
                                  <p>510623</p>
                                  <p>China</p>
                                </tab>
                                <tab name="Barcelona">
                                  <h3 class="my-4">Global Message Services Spain LLC</h3>
                                  <p>Pl. Virgen Blanca 47, Barcelona</p>
                                  <p>08720</p>
                                  <p>Spain</p>
                                </tab>
                              </tabs>
                            </div>

                            <div class="col-12 col-sm-6 px-0">
                              <div id="map">
                                  <gmap-map
                                  :center="coord"
                                  :zoom="15"
                                  :options="{
                                       styles: mapStyles,
                                        disableDefaultUI: true
                                    }"
                                  disableDefaultUI = true
                                  >    
                                  <!-- <gmap-marker                                     
                                      v-for="(m, indexMarker) in coords"
                                      :key="indexMarker"
                                      :position="coord"
                                      @click="coord=m.position"
                                  ></gmap-marker> -->
                                  <gmap-circle
                                      v-for="(pin, i) in coords"
                                      :key="i"
                                      :center="coord"
                                      :radius="35"
                                      :visible="true"
                                      :options="{fillColor:'#3db565',fillOpacity:1.0, strokeColor :'#3db565'}"
                                      :position="coord"
                                      @click="coord=m.position"
                                    ></gmap-circle>
                                  </gmap-map>
                              </div>
                              </div>                          
                          </div>
                      </div>
              </div>

              <footer>
                <!-- <footer> -->
                <div class="container">
                  <div class="row">

                    <div class="col-sm Contact-Us1">
                      <h2>Contact Us</h2>

                      <div>
                        <form method="post" action="http://httpbin.org/post" autocomplete="off" @submit="submitted=true" target="_blank">
                          <label  class="boxColor1" :class="[boxColor1? 'is-black': 'is-white']">
                            <span>Name</span>
                            <input type="text" name="name" maxlength="30"  pattern="[\p{L}\s]{1,30}" required v-model="name"  @focus="changeColor1" @blur="changeColor1">
                          </label>
                          <label  class="boxColor2" :class="[boxColor2? 'is-black': 'is-white']">
                            <span>Phone</span>
                            <input type="tel" v-mask="'+38093-###-##-##'"  name="phone" required v-model="phone" @focus="changeColor2"  @blur="changeColor2">
                          </label>
                          <label  class="boxColor3" :class="[boxColor3? 'is-black': 'is-white']">
                            <span>E-mail</span>
                            <div :class="['input-group', isEmailValid()]">
                              
                              <input type="email" name ="email" class="form-control"  v-model="email"   @focus="changeColor3"   @blur="changeColor3">
                            </div>
                          </label>
                          
                          <label>
                            <input type="checkbox" name="check" checked required>
                            <span>I agree the processing of personal data</span> 
                           
                          </label>
                          
                          <button class="btn" type="submit" value="Submit" :disabled="submitted">Get in touch</button>
                        </form>
    
                      </div>
                    </div>
                    <div class="col-sm Contact-Us2">
                      <p>Please tell us more about your request and give us info about your company and country</p>
                      
                    </div>

                  </div>
                  <!-- row end -->
                </div>
                <!-- container end -->
              </footer>       
      </section>

    </div>
  </div>
   
</template>

<script>



import tabs from '@/components/UI/Tabs.vue'
import tab from '@/components/UI/Tab.vue'
import MY_JSON from '@/data.json'
import axios from 'axios'


export default { 

  components: {
    tabs, tab
    //, GoogleMap
  },
  data() {
    return {
      errors:[],
      name:null,
      phone:null,
      email: '',
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      checked:null,
      mapStyles: MY_JSON,
      coord:{},
      coords:[this.coord], 
      baseUrl: process.env.VUE_APP_BASE_URL,
      boxColor1: true,
      boxColor2: true,
      boxColor3: true,
      submitted: false
      }
  },

   methods: {
    changeColor1() {
      this.boxColor1 = !this.boxColor1
    },
    changeColor2() {
      this.boxColor2 = !this.boxColor2
    },
    changeColor3() {
      this.boxColor3 = !this.boxColor3
    },
    updateCoord(variable) {
      this.coord= variable;
        },
    isEmailValid() {
      return (this.email == "")? "" : (this.reg.test(this.email)) ? 'has-success' : 'has-error';
        }  
  }
}
</script>

<style lang="scss">

header {
    display:flex;
    justify-content: space-around;
    background-color: #ffffff;
    line-height: 28px;

  p {
    font-size:15px;
  }
  
  .head-col2>p:nth-child(2n) {
    color:#3db565;
    text-transform: uppercase;
    font-size:14px;
    font-weight: bold;
    letter-spacing: 0.85px;
    line-height: 30px;
  }
  .head-col2 {
    padding: 0 0 0 30px;
  }

  .head-col20 {
    padding: 0 10px 0 50px;
  }
}

#main {
    background-color:  #262626;
    font-size:11px;
    line-height: 20px;
}
.main {
    
    color:#ffffff;
    button {     
      margin: 0 0 30px 0;
      color:	#FF0000;
    }

    .ourOffices {
      padding-top: 100px;
      h3 {
        letter-spacing: 1.18px;
      }
      p {
        letter-spacing: 0.5px;
      }
    }
}

footer {
  // background-color:  #3db565;
  background-image:  url('img/pattern.png'); //require('./assets/img/pattern.gif);
  padding: 100px 0 100px 0!important;
  h2 {
    color: #ffffff;
    padding: 0 0 30px 0!important;
  }

    .Contact-Us1 {
      
      .is-black {
          color: #000000;
          border-color: #000000;
        }
      .is-white {
        color: #ffffff;
        border-color: #ffffff;
      }

      label {
      text-align:start;
      font-size:18px;
      display:flex;
      align-items:center;
      margin-bottom:5px;
      line-height: 60px;
      
      input {
        border-style:none;
        border-radius: 0;
        margin:0;
        padding: 0;
        background-color: transparent;   
      } 
    }
      label:nth-child(-n+3)>span {
          //  padding: 0 20px 0 0;
          width:90px;
          //  color:#ffffff!important;   
        }
        label:nth-child(4){
          margin-top: 20px;
          >input {
            width:15px;
            margin-right:20px;  
          }
        }
      label:not(:nth-child(4)) {
            border-bottom-style: solid;
            border-width: 1px;
            // border-color: #ffffff;
            // color:#ffffff;
        }      
        input {
          background-color:  transparent;         
        }
        button {
          /* Style for "base" */
          width: 279px;
          height: 83px;
          background-color: #262626!important;
          border-style:none!important;
          border-radius: 0;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1.54px;
          margin: 50px 0 0 0;
          color: #ffffff;
          font-weight:bold;      
        }
        .form-control {
          background-color:transparent;
        }

        button:disabled {
          background: #dddddd;
        }
      }

    .Contact-Us2 {
      p {
          color: #000000;
          font-size: 18px;
          font-weight: 300;
          line-height: 34px;
          padding: 100px 0 0 35px ;
      }
    } 
  }

    .vue-map-container {
      min-height: 504px;
    }    
    
@media screen and (max-width: 420px) { 

    .head-col20 {
        padding: 0 15px 0 15px!important;
      }

      .vue-map-container {
        min-height: 350px;
      }
}
</style>
