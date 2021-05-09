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
        to="/admin/List_income"
        >รายรับประจำวัน</router-link
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
    <!-- <div slot="buttons" class="form-group">
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
        to="/admin"
        >รายการข้อมูล</router-link
      >
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
        to="/admin/form"
        >เพิ่มข้อมูล</router-link
      >
    </div> -->
    <div class="card">
      <div
        class="card-body"
        style="
          padding-left: 9%;
          padding-right: 9%;
          margin-left: 0%;
          margin-right: 0%;
          text-align: left;
          font-size: 22px;
        "
      >
        <br />
        <header class="mb-4" >
          <i class="fa fa-align-justify"> </i>
          แสดงข้อมูลรายรับประจำวัน
        </header>
        
        <div class="table-responsive">
        <table class="table" style="font-size: 17px;white-space: nowrap">
          <thead>
            <tr>
              
              <th>รหัสพนักงาน</th>
              <th>ชื่อ-นามสกุล</th>
              <th>ยอดชำระ</th>
              <th>รูปภาพสลิป</th>
              <th>รูปภาพหลังงานเสร็จ</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in listtoday" :key="user.id">
              
               <td>{{user.id_staff}}</td>
              <td>{{user.name_staff}} </td>
                    <td>{{user.price}}</td>
                   <td>
                     <!-- <expandable-image/> -->
                <div class="img-container" @click="zoomimg()">
                  <expandable-image v-bind:src="user.imgcar"   alt="user" />
                </div>
                
              </td>
               <td>
                <div class="img-container">
                  <expandable-image v-bind:src="user.imgpay" alt="user" />
                </div>
                
              </td>
              
              <!-- <td class="text-right">
                 <i
                  class="pointer fa fa-pencil-square"
                  style="padding-right: 19%; color: #17a2bb"
                >
                </i> -->
                <!-- <i @click="onDelete(users)" class="pointer fa fa-trash" style="color: #ed2939"> </i>
              </td> --> 
            </tr>
             
          </tbody>
        </table>
        </div>
        <div class="total" style="text:r">
            <h5 > รวมยอดเงิน : {{price}} บาท </h5>
        </div>
        
        <!-- <Pagination/> -->
        <!-- <header>
          <i class="fa fa-list-alt"> </i>
          แสดงจำนวนข้อมูลของพนักงาน
        </header> -->
      </div>
    </div>
  </Layout>
</template>

<script>

import Layout from "@/components/Layout";
import Pagination from "@/components/Pagination";
import axios from 'axios';
import {mapState} from "vuex";
// import Layout from '../../components/Layout.vue';
export default {
  components: { Layout,Pagination },
   computed:{
    ...mapState(["listtoday"])
  },
   data() {
        return {
            users: [
                { id: '00001', Name: 'Frank Murphy', cash: '200' },
                { id: '00002',Name: 'Vic Reynolds', cash: '300' },
                { id: '00003',Name: 'Gina Jabowski', cash: '200' },
                // { Name: 'Jessi', lastName: 'Glaser', email: 'jessi.glaser@test.com', role: 'User' },
                // { Name: 'Jay', lastName: 'Bilzerian', email: 'jay.bilzerian@test.com', role: 'User' }
            ],
            price:"700"
        };
    },
    methods:{
      onDelete(users){
        this.alertify.confirm('คุณต้องการจะลบข้อมูลนี้ใช่หรือไม่ ?').setHeader('<em> แจ้งเตือน ! </em> '),() =>{
console.log(users);
        }; 
//         this.alertify.confirm("คุณต้องการจะลบข้อมูลนี้ใช่หรือไม่ ?" ,() =>{
// console.log(users);
//         })
        
      }
      // ,zoomimg(){
      //    this.$router.push({ name: "rider-WorkStatus4" });
      // }
    },
    created(){
      this.$store.dispatch("set_listtoday");
axios.get('http://localhost:5000/calender/today/sum').then(res=>{
        console.log(res);
      this.price=res.data[0].sum
            })
            .catch(error =>{ 
                console.error(error);
           });
    }
};
</script>

<style scope>
.total{
    text-align: right;
    color: dimgray;
}
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
  /* border: 3px solid rgb(194, 40, 29); */
  /* #17a2bb */
}
.card-body .fa-list-alt {
  padding-left: 5%;
  margin-left: 0%;
  text-align: left;
}
</style>