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
        >จองคิวล้างรถ</router-link
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
        to="/customer/BookingHistory"
        >ประวัติการจอง</router-link
      > -->
       <!-- <div>สวัสดี คุณ ณัทชวัช อาวุธโสภา</div> -->
    </div>
   
    <div class="card mb-3" v-for="sv in users" :key="sv.ID_Staff" style=" border-right: solid 9px #17A2BB;">
      <div class="row  align-items-center">
        <div class="col-sm-4 ">
          <img src="/img/employee.png"  alt="user" class="img-booking" style="max-width: 100%;">
        </div>
        <div class="col-sm-8  "  style=" margin-left: -40px ;">
          <div class="card-body" style="font-size: 19px;color:dimgray;">
            <div>ชื่อ - นามสกุล : {{sv.full_name}}</div>
            <div>เบอร์โทรศัพท์ : {{sv.tell_staff}}</div>
            <div>รหัสพนักงาน  : {{sv.id_staff}}</div>
            <!-- เพิ่ม ช่องใส่คะแนนแต่ละคน <i class="fa fa-user" aria-hidden="true"></i>-->
            <div>คะแนน : 4.8 / 5 <i class="fa fa-star-half-o" aria-hidden="true"></i></div> 
             <div>จำนวนคนให้คะแนน :  20 คน  <i class="fa fa-user" aria-hidden="true"></i></div> 
            
            <hr>
            <div>เลือกช่วงเวลาที่ต้องการจอง</div>
             <div class="row"  >
              <div class="col-6 col-sm-4 "   >
                <button type="button"  @click="BookingButton(sv.id_staff,sv.tell_staff,sv.full_name,'08.00-09.00')"  class="btn btn-info btn-block" style="margin-top: 10px;  background-color: #17A2BB;color:#fff;">
                08.00-09.00
                </button>
              </div>
              <div class="col-6 col-sm-4 "  >
                <button type="submit" @click="BookingButton(sv.id_staff,sv.tell_staff,sv.full_name,'09.00-10.00')" class="btn btn-info btn-block" style="margin-top: 10px;   background-color: #17A2BB;color:#fff;">
                09.00-10.00
                </button>
              </div>
              <div class="col-6 col-sm-4 "  >
                <button type="submit" @click="BookingButton(sv.id_staff,sv.tell_staff,sv.full_name,'10.00-11.00')" class="btn btn-info btn-block" style=" margin-top: 10px;  background-color: #17A2BB;color:#fff;">
                10.00-11.00
                </button>
              </div>
              <div class="col-6 col-sm-4 "  >
                <button type="submit"  @click="BookingButton(sv.id_staff,sv.tell_staff,sv.full_name,'11.00-12.00')" class="btn btn-info btn-block" style=" margin-top: 10px;  background-color: #17A2BB;color:#fff;">
                  11.00 -12.00
                </button>
              </div>
              <div class="col-6 col-sm-4 "  >
                <button type="submit" @click="BookingButton(sv.id_staff,sv.tell_staff,sv.full_name,'12.00-13.00')" class="btn btn-info btn-block" style=" margin-top: 10px;  background-color: #17A2BB;color:#fff;">
                  12.00-13.00
                </button>
              </div>
              <div class="col-6 col-sm-4 "  >
                <button type="submit" @click="BookingButton(sv.id_staff,sv.tell_staff,sv.full_name,'13.00-14.00')" class="btn btn-info btn-block" style=" margin-top: 10px;  background-color: #17A2BB;color:#fff;">
                  13.00-14.00
                </button>
              </div>
              <div class="col-6 col-sm-4 "  >
                <button type="submit" @click="BookingButton(sv.id_staff,sv.tell_staff,sv.full_name,'14.00-15.00')" class="btn btn-info btn-block" style=" margin-top: 10px;  background-color: #17A2BB;color:#fff;">
                 14.00-15.00
                </button>
              </div>
              <div class="col-6 col-sm-4 "  >
                <button type="submit" @click="BookingButton(sv.id_staff,sv.tell_staff,sv.full_name,'15.00-16.00')" class="btn btn-info btn-block" style=" margin-top: 10px;  background-color: #17A2BB;color:#fff;">
                  15.00-16.00
                </button>
              </div>
              <div class="col-6 col-sm-4 "  >
                <button type="submit" @click="BookingButton(sv.id_staff,sv.tell_staff,sv.full_name,'16.00-27.00')" class="btn btn-info btn-block" style=" margin-top: 10px;  background-color: #17A2BB;color:#fff;" :disabled="sv.time9==1">
                  16.00-17.00
                </button>
              </div>
              
 
           </div>

            </div>
          
          </div>
     
      
    
          

        </div>

    </div>
   
  </Layout>
</template>

<script>
// import dialog from './dialog.vue'
import Layout from "@/components/Layoutcustomer";
import Pagination from "@/components/Pagination";
import {mapState} from "vuex";
// import Layout from '../../components/Layout.vue';
export default {
  components: { Layout, Pagination },
  computed:{
    ...mapState(["staff"])
  },
   created(){
     //console.log(today);
     //sent to data base
     // array today staff
     this.$store.dispatch("set_staff");
    //  console.log(this.$session.get('full_name'));
    //  console.log(this.$session.get('session-id'));
   },
  data() {
    return {
      users: [
        {full_name:"สมใจ ยินดี",tell_staff:"0918717426", id_staff:"001" },
        {full_name:"สิริ สีเขียว",tell_staff:"0918717426", id_staff:"002" }
        // { service: "ล้างภายใน", price: "200", waytobuy: "เงินสด / โอนเงิน" },
        // { service: "ล้างภายนอก", price: "200", waytobuy: "เงินสด / โอนเงิน" },
        // // {
        //   service: "ล้างภายใน + ภายนอก",
        //   price: "300",
        //   waytobuy: "เงินสด / โอนเงิน",
        // },
        // { Name: 'Jessi', lastName: 'Glaser', email: 'jessi.glaser@test.com', role: 'User' },
        // { Name: 'Jay', lastName: 'Bilzerian', email: 'jay.bilzerian@test.com', role: 'User' }
      ],
    };
  },
  methods: {
     BookingButton(staffid,tel,name,booktime){
        
        this.$router.push({name :"BookingButton", params: { staff: staffid , tel: tel ,name: name,time: booktime} })
    },provide(){
return{text: this.form.name}
    }, 
    
  
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
  padding-left: 0%;
  margin-left: 0%;
  text-align: left;
}
.img-booking {
  max-width: 100%;
  margin-left: 0%;
}
.card{
  border-right: solid 5px #17A2BB;
}
@media screen and (max-width: 575.98px) {
 /* .form-group .img-fluid{
   /* max-width:300px;
   max-height:360px; */
   
   /* margin-right: 15px;
 } * */
 /* .col-sm-6 .btn-danger {
    margin-top: 10px

 } */
 .card .row  .col-sm-8 .card-body{
    margin-left: 70px !important;
     margin-right: 50px !important;
 }

  
}

</style>