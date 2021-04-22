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
        >จองบริการล้างรถ</router-link
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
    </div>
    <div class="card mb-3" style=" border-right: solid 9px #17A2BB;">
      <div class="row align align-items-center">
        <div class="col-sm-4 ">
          <img src="/img/employee.png"  alt="user" class="img-booking" style="max-width: 100%;">
        </div>
        <div class="col-sm-8  "  style=" padding-left:0% !important; padding-right:0%;margin-left: -90px;">
          <div class="card-body" style="font-size: 19px;color:dimgray;">
            <div>ชื่อ - นามสกุล : นาย สมสุข ใจดี</div>
            <div>เบอร์โทรศัพท์ : 0908807104</div>
            <div>รหัสพนักงาน  : 00004</div>
            <!-- เพิ่ม ช่องใส่คะแนนแต่ละคน -->
            <div>คะแนน : 4.8 / 5 <i class="fa fa-star-half-o" aria-hidden="true"></i></div> 
            
            <hr>
            <div>เลือกช่วงเวลาที่ต้องการจอง</div>
             <div class="row"  >
              <div class="col-6 col-sm-4 "   >
                <button type="button"  @click="BookingButton()"  class="btn btn-info btn-block" style="margin-top: 10px;  background-color: #17A2BB;color:#fff;">
                  08.00-09.00
                </button>
              </div>
              <div class="col-6 col-sm-4 "  >
                <button type="submit" @click="BookingButton()" class="btn btn-info btn-block" style="margin-top: 10px;   background-color: #17A2BB;color:#fff;">
                  09.00-10.00
                </button>
              </div>
              <div class="col-6 col-sm-4 "  >
                <button type="submit" @click="BookingButton()" class="btn btn-info btn-block" style=" margin-top: 10px;  background-color: #17A2BB;color:#fff;">
                  10.00-11.00
                </button>
              </div>
              <div class="col-6 col-sm-4 "  >
                <button type="submit"  @click="BookingButton()" class="btn btn-info btn-block" style=" margin-top: 10px;  background-color: #17A2BB;color:#fff;">
                  11.00 -12.00
                </button>
              </div>
              <div class="col-6 col-sm-4 "  >
                <button type="submit" @click="BookingButton()" class="btn btn-info btn-block" style=" margin-top: 10px;  background-color: #17A2BB;color:#fff;">
                  12.00-13.00
                </button>
              </div>
              <div class="col-6 col-sm-4 "  >
                <button type="submit" @click="BookingButton()" class="btn btn-info btn-block" style=" margin-top: 10px;  background-color: #17A2BB;color:#fff;">
                  13.00-14.00
                </button>
              </div>
              <div class="col-6 col-sm-4 "  >
                <button type="submit" @click="BookingButton()" class="btn btn-info btn-block" style=" margin-top: 10px;  background-color: #17A2BB;color:#fff;">
                 14.00-15.00
                </button>
              </div>
              <div class="col-6 col-sm-4 "  >
                <button type="submit" @click="BookingButton()" class="btn btn-info btn-block" style=" margin-top: 10px;  background-color: #17A2BB;color:#fff;">
                  15.00-16.00
                </button>
              </div>
              <div class="col-6 col-sm-4 "  >
                <button type="submit" @click="BookingButton()" class="btn btn-info btn-block" style=" margin-top: 10px;  background-color: #17A2BB;color:#fff;">
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
// import Layout from '../../components/Layout.vue';
export default {
  components: { Layout, Pagination },
  data() {
    return {
      users: [
        // { service: "ล้างภายใน", price: "200", waytobuy: "เงินสด / โอนเงิน" },
        // { service: "ล้างภายนอก", price: "200", waytobuy: "เงินสด / โอนเงิน" },
        // {
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
     BookingButton(){
        this.$router.push({name :"BookingButton"})
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
    margin-left: 130px;
 }

  
}

</style>