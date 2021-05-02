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
        to="/admin/List_Price"
        >ราคาค่าบริการ</router-link
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
        to="/admin/Edit_Price"
        >เพิ่ม/แก้ไขราคา</router-link
      >
    </div>
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
          แสดงราคาค่าบริการแต่ละประเภท
        </header>
      
        <div class="table-responsive">
        <table class="table" style="font-size: 17px;white-space: nowrap">
          <thead>
            <tr>
                
              <th>รูปภาพ</th>
              <th>ประเภทการบริการ</th>
              <th>ราคา</th>
              <th>วิธีการชำระเงิน</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="sv in listprice" :key="sv.type">
              <td>
                <div class="img-container">
                  <expandable-image src="/img/ล้างรถภายใน.png" alt="sv" />
                </div>
              </td>
               
              <td>{{sv.type}} </td>
                    <td>{{sv.price}}</td>
                    <td>{{sv.process}}</td>
                   
              
              <td class="text-right">
                <i  
                 @click="gotoEdit(sv.type,sv.price,sv.process,sv.id)"
                  class="pointer fa fa-pencil-square"
                  style="padding-right: 19%; color: #17a2bb"
                >
                </i>
                <i @click="onDelete(sv)" class="pointer fa fa-trash" style="color: #ed2939"> </i>
              </td>
            </tr>
          </tbody>
        </table>
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
// import Layout from '../../components/Layout.vue';
import {mapState} from "vuex";
export default {
  components: { Layout,Pagination },
   computed:{
    ...mapState(["listprice"])
  },
  created(){
this.$store.dispatch("set_listprice");
  },
   data() {
        return {
            service: [
                {  services: 'ล้างภายใน', price: '200',waytobuy:'เงินสด / โอนเงิน' },
                { services: 'ล้างภายนอก', price: '200' ,waytobuy:'เงินสด / โอนเงิน'},
                { services: 'ล้างภายใน + ภายนอก', price: '300' ,waytobuy:'เงินสด / โอนเงิน'},
                // { Name: 'Jessi', lastName: 'Glaser', email: 'jessi.glaser@test.com', role: 'User' },
                // { Name: 'Jay', lastName: 'Bilzerian', email: 'jay.bilzerian@test.com', role: 'User' }
            ]
        };
    },
    methods:{
      onDelete(service){

         this.alertify.confirm('คุณต้องการจะลบข้อมูลนี้ใช่หรือไม่ ?').setHeader('<em> แจ้งเตือน ! </em> '),() =>{
console.log(service);
        }
        
      },gotoEdit(services,price,waytobuy,id){
        this.$router.push({name :"admin-Edit_Price",params: { service: services , price: price,waytobuy: waytobuy,id:id}})
    }
    }
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
  /* border: 3px solid rgb(194, 40, 29); */
  /* #17a2bb */
}
.card-body .fa-list-alt {
  padding-left: 5%;
  margin-left: 0%;
  text-align: left;
}
</style>