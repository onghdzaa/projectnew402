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
        to="/customer/BookingStatus"
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
            v-bind:src="img"
            alt="user"
            class="img-booking"
            style="max-width: 100%"
          />
        </div>
        <div
          class="col-sm-8"
          style="
            padding-left: 0% !important;
            padding-right: 0%;
            margin-left: -10px ;
          "
        ><div class="card-body" style="font-size: 19px; color: dimgray">
            <br />
          <div class="head" style="color: green ;font-size: 23px;"> <i class="fa fa-check-square-o" aria-hidden="true"></i> " ยืนยันการล้างรถเสร็จสิ้น "  </div>
            <div> จองคิวบริการล้างรถวันที่ : {{date}}</div>
            <div> เวลาให้บริการ : {{time}}</div>
            <hr>
            <div>ชื่อ - นามสกุล : {{name}}</div>
            <div>เบอร์โทรศัพท์ : {{tel}}</div>
            <div>รหัสพนักงาน : {{id_staff}}</div>
            <div></div>
            <hr />
            
            <div class="head" style="color: green ;font-size: 23px;"> <i class="fa fa-star-half-o" aria-hidden="true"></i> " ให้คะแนนพนักงาน "  </div>
            <div>
     
    <b-form-rating v-model="value"></b-form-rating>
    <p class="mt-2">คะแนน : {{ value }} / 5 </p>
  </div>
    <!-- <div><button type="submit" @click="BookingSuccess()" class="btn btn-info btn-block" style=" font-size: 19px;display:inline;max-width:95px;background-color: #17A2BB;color:#fff;"> ยืนยัน</button></div> -->
    <div>

  <b-button v-b-modal.modalPopover type="submit" @click="onsubmit()" style="border:none; font-size: 19px;display:inline;max-width:95px;background-color: #17A2BB;color:#fff;"> ยืนยัน</b-button>

 
  <b-modal  id="modalPopover" title="เสร็จสิ้น" ok-only @click="gotobooking()" >ให้คะแนนเสร็จสิ้น !</b-modal>
</div>



          </div>
          
          
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "@/components/Layoutcustomer";
import Pagination from "@/components/Pagination";
import axios from "axios";
// import Layout from '../../components/Layout.vue';
export default {
  props:["id","id_staff","time","date","name","tel","img"],
  components: { Layout, Pagination },
  created(){
  //console.log(this.id_staff);
  //console.log(this.value);
  },
  data() {
      return {
        value: null
      }
    },
  methods: {
    BookingButton() {
      this.$router.push({ name: "BookingButton" });
    }, onsubmit(){
           
               const parameters = {
           
            
            
            "value":this.value,
            "id":this.id_staff
           
            }
                axios.put('http://localhost:5000/calculate',parameters).then(res=>{
                  //console.log("sdasd");
            })
            .catch(error =>{ 
                console.error(error);
           });
axios.put('http://localhost:5000/calculate/average',parameters).then(res=>{
        
            })
            .catch(error =>{ 
                console.error(error);
           });
//console.log(this.id);
          axios.put('http://localhost:5000/stop',{id:this.id}).then(res=>{
   // console.log(this.$session.get('user'))
   
            })
            .catch(error =>{ 
                console.error(error);
            });  

        },gotobooking(){
           this.$router.push({ name: "customer-booking" });
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
  max-width: 10%;
}
.card {
  border-right: solid 5px #17a2bb;
}
.modal-footer  {
    margin: 0.5px 10px !important ;
}
.btn-primary {
    color: #fff;
    background-color: #17a2bb !important ;
    border: none !important ;
}
</style>