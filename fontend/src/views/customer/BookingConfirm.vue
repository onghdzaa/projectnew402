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
            padding-left: 0% !important;
            padding-right: 0%;
            margin-left: -10px ;
          "
        ><div class="card-body" style="font-size: 19px; color: dimgray">
            <br />
          <div class="head" style="color: green ;font-size: 23px;"> " การจองสำเร็จ "  </div>
            <div> จองคิวบริการล้างรถวันที่ : 29 / 03 / 64</div>
            <div> เวลาให้บริการ : 08.00 - 09.00</div>
            <hr>
            <div>ชื่อ - นามสกุล : นาย สมสุข ใจดี</div>
            <div>เบอร์โทรศัพท์ : 0908807104</div>
            <div>รหัสพนักงาน : 00004</div>

            <hr />
            <br>
            <div>
   
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
// import Layout from '../../components/Layout.vue';
export default {
  components: { Layout, Pagination },
  data() {
      return {
        value: null
      }
    },
  methods: {
    BookingButton() {
      this.$router.push({ name: "BookingButton" });
    }, onsubmit(){
           
               console.log(this.form);
           
        },BookingConfirm(){
          this.$router.push({ name: "BookingButton" });
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
@media screen and (max-width: 575.98px) {

 
 .col-sm-8 .card-body{
   font-size: 18px !important;
 }
 .head{
   font-size: 20px !important;
 }

  
}
</style>