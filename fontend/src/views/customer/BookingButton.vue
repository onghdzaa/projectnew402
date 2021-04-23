<template>
  <Layout>
    <div slot="buttons" class="form-group">
      <router-link
        class="btn"
        style="
          background-color: #17a2bb;
          color: #fff;
          margin-right: 10px;
          width: 15%;
          font-size: 17px;
          border-radius: 4px;
          margin-bottom: 15px;
          min-width: 130px;
        "
        to="/customer/Booking"
        >ย้อนกลับ</router-link
      >
      <!-- <router-link
        class="btn"
        style="
          background-color: #17a2bb;
          color: #fff;
          margin-right: 10px;
          width: 15%;
          font-size: 17px;
          border-radius: 4px;
          margin-bottom: 15px;
          min-width: 130px;
        "
        to="/admin/Edit_Booking"
        >เพิ่ม/แก้ไขการจอง</router-link
      > -->
    </div>
    <div class="card mb-3" style="border-right: solid 9px #17a2bb">
      <div class="row">
        <div class="col-sm-4">
          <img
            src="/img/employee.png"
            alt="user"
            class="img-booking"
            style="max-width: 100%"
          />
        </div>
        <div
          class="col-sm-8"
          style="
            padding-left: 0% !important;margin-left: -90px;
            
           
          "
        >
          <div class="card-body" style="font-size: 22px; color: dimgray">
            <br />
            <div> จองคิวบริการล้างรถวันที่ : ({{ currentDateTime() }})</div>
            <div> เวลาให้บริการ : {{ time }}</div>
            <hr>
            <div>ชื่อ - นามสกุล : {{ name }}</div>
            <div>เบอร์โทรศัพท์ : {{ tel }}</div>
            <div>รหัสพนักงาน : {{ staff }}</div>

            <hr />
            <form @submit.prevent="onsubmit()">
            <div class="form-group" style="font-size: 21px">
              <i class="fa fa-pencil-square"> </i>
              กรอกข้อมูลเพื่อทำการจอง
              <br />
              <br />
              <label for="">ทะเบียนรถ</label>
              <input
                type="text"
                class="form-control"
                style="font-size: 21px; margin-bottom: 15px;"
                name="numcar"
                             v-validate="{required: true}"
                            v-model.trim = form.numcar 
                            :class="{ 'is-invalid' : errors.has('numcar')}" 
                       
              />

              <!-- <div class="form-group"  style="font-size: 21px;margin-bottom:15px">
              <label for="">ยี่ห้อของรถ</label>
              <input type="text" class="form-control"  style="font-size: 21px;margin-bottom:15px">
            </div> -->
            </div>
            <div
              class="form-group"
              style="font-size: 21px; margin-bottom: 15px"
            >
              <label for="">ยี่ห้อของรถ</label>
              <input  
                type="text"
                class="form-control"
                style="font-size: 21px; margin-bottom: 15px;"
                 name=" model"
                             v-validate="{required: true}"
                            v-model.trim = form.model 
                            :class="{ 'is-invalid' : errors.has(' model')}" 
                       
              />
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="radio"
                 v-validate="{required: true}"
                            v-model.trim = form.radio
                            :class="{ 'is-invalid' : errors.has(' radio')}" 
                id="radio"
                value="ล้างภายใน"
                checked
              />
              <label class="form-check-label" >
                ล้างภายใน
              </label>
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
               name="radio"
                 v-validate="{required: true}"
                            v-model.trim = form.radio
                            :class="{ 'is-invalid' : errors.has(' radio')}" 
                id="radio"
                value="ล้างภายนอก"
                checked
              />
              <label class="form-check-label" for="fexampleRadios2">
                ล้างภายนอก
              </label>
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="radio"
                 v-validate="{required: true}"
                            v-model.trim = form.radio
                            :class="{ 'is-invalid' : errors.has(' radio')}" 
                id="radio"
                value="ล้างภายใน+ภายนอก"
                checked
              />
              <label class="form-check-label" >
                ล้างภายใน+ภายนอก
              </label>
            </div>
            <br>
            

<!-- 
            <input type="radio" id="one" value="One" v-model="picked">
<label for="one">One</label>
<br>
<input type="radio" id="two" value="Two" v-model="picked">
<label for="two">Two</label>
<br>
<span>Picked: {{ picked }}</span> -->
<!-- <h1>map</h1> -->

<div>
                <GmapMap
                  :center="coordinates"
                  :zoom="14"
                  style="width:640px; height:360px;"
                  ref="mapRef"
                >
                  <gmap-marker :position="mapcoordinates"> </gmap-marker>
                </GmapMap>
                <p>{{ mapcoordinates.lat }},{{ mapcoordinates.lng }}</p>
              </div>

            <div class="form-group">
              <!-- @click="BookingConfirm()" -->
                        <button type="submit" 
                       
                        class="btn btn-info" 
                        style="background-color: #17A2BB; max-width:200px;font-size: 17px;
                        color : #fff ;">ยืนยันการจอง
                        </button>
                    </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "@/components/Layoutcustomer";
import Pagination from "@/components/Pagination";
// import Layout from '../../components/Layout.vue';
export default {
  components: { Layout, Pagination },
  props: ["staff", "time", "name", "tel"],
  data() {
    return {
     
      form:{
                numcar:"",
                model:"" ,
                radio:""
               
                

            },
           coordinates: {
        lat: 0,
        lng: 0,
      },
      map: null, 
    };
  },
  created() {
  //  console.log(this.form.name + "ssssss");
    this.$getLocation({}).then((coordinates) => {
      this.coordinates = coordinates;
    });
  },
  mounted() {
    this.$refs.mapRef.$mapPromise.then((map) => (this.map = map));
  },
  computed: {
    mapcoordinates() {
      if (!this.map) {
        return {
          lat: 0,
          lng: 0,
        };
      }
      return {
        lat: this.map.getCenter().lat(),
        lng: this.map.getCenter().lng(),
      };
    },
  },
  methods: {
//     BookingButton(form) {
   
//         this.alertify.confirm('การจองเสร็จสิ้น').setHeader('<em> แจ้งเตือน ! </em> '),() =>{
// console.log(form);
//         }; 
//     },
currentDateTime() {
      const current = new Date();
      const date =
        current.getFullYear() +
        "-" +
        (current.getMonth() + 1) +
        "-" +
        current.getDate();
      //const time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
      const dateTime = date;

      return dateTime;
    },
     onsubmit(){  
               this.$validator.validateAll().then(valid => {
                //  this.alertify.confirm('การจองเสร็จสิ้น').setHeader('<em> แจ้งเตือน ! </em> ')
                // console.log(this.form);
                if(this.form.numcar=="" ||this.form.model==""||this.form.radio=="")
                return this.alertify.warning('กรุณากรอกข้อมูลให้ครบ !!')
                
                 this.$router.push({ name: "BookingConfirm" });
                console.log(this.form);
           });
           
        },
        BookingConfirm(){
            axios
        .post("http://localhost:5000/profile", {
          fullname: this.$session.get("user"),
        })
        .then((res) => {
          var prices = ""
          if (this.form.type == "ล้างภายใน") {
            prices = "100";
          } else if (this.form.type == "ล้างภายนอก") {
            prices = "150";
          } else {
            prices = "200";
          }
          //console.log(prices+"sssssss")
          const parameters = {
            "name_member": res.data[0].name,
            "tel_member": res.data[0].tel,
            "model": res.data[0].model,
            "numcar": this.form.numcar,
            "name_staff": this.name,
            "tel_staff": this.tel,
            "id_staff": this.staff,
            "time": this.time,
            "gps": this.mapcoordinates,
            "type": this.form.radio,
            "date": this.currentDateTime(),
            "price": prices,
            "status": "กำลังดำเนินการ",
            "id_member": this.$session.get("user"),
            "address": res.data[0].address
          };
          axios
            .post("http://localhost:5000/booking", parameters)
            .then((res) => {
             // console.log(res.data);
            })
            .catch((error) => {
              console.error(error);
            });
        })
        .catch((error) => {
          console.error(error);
        });
          this.$router.push({ name: "BookingConfirm" });
        }
    
  },
};
</script>

<style scope>
/* .form-group .btn{
    color: #fff !important;
    margin-right: 10px;
    width: 15%;
    font-size: 10px;
    border-radius: 4px;
    margin-bottom: 15px;
    background-color:#ced4da !important;
    
} */
.btn.router-link-exact-active {
  /* background-color:#ced4da !important ; */
  border: 4px solid rgb(165, 163, 155);

  /* #17a2bb */
}
.card-body .fa-list-alt {
  padding-left: 5%;
  margin-left: 0%;
  text-align: left;
}
.img-booking {
  max-width: 100%;
  margin-left: 0%;
}
.card {
  border-right: solid 5px #17a2bb;
}
</style>