<template>
  <Layout_customer>
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
        to="/admin/Edit_Booking"
        >เพิ่ม/แก้ไขการจอง</router-link
      > -->
    </div>
   
  </Layout_customer>
</template>

<script>
import Layout from "@/components/Layoutcustomer";
import Pagination from "@/components/Pagination";
// import Layout from '../../components/Layout.vue';
export default {
  components: { Layoutcustomer, Pagination },
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
    // onDelete(users) {
    //   this.alertify
    //     .confirm("คุณต้องการจะลบข้อมูลนี้ใช่หรือไม่ ?")
    //     .setHeader("<em> แจ้งเตือน ! </em> "),
    //     () => {
    //       console.log(users);
    //     };
    //   //         this.alertify.confirm("คุณต้องการจะลบข้อมูลนี้ใช่หรือไม่ ?" ,() =>{
    //   // console.log(users);
    //   //         })
    // },
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
}
</style>