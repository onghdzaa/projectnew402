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
        >เพิ่ม/แก้ไขข้อมูล</router-link
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
          แสดงจำนวนข้อมูลของพนักงาน
        </header>
        <hr />
        <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>รูปภาพ</th>
              <th>รหัสพนักงาน</th>
              <th>ชื่อ-นามสกุล</th>
              <th>เบอร์โทรศัพท์</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="sv in staff" :key="sv.ID_Staff">
              <td>
                <div class="img-container">
                  <img src="/img/imguser.jpg" alt="employee" />
                </div>
              </td>
               <td>{{sv.id_staff}}</td>
              <td>{{sv.full_name}} </td>
                    <td>{{sv.tell_staff}}</td>
                   
              
              <td class="text-right">
                <i @click="gotoEdit(sv.id_staff,sv.full_name,sv.tell_staff )"
                  class="pointer fa fa-pencil-square"
                  style="padding-right: 19%; color: #17a2bb"
                >
                </i>
                <i @click="onDelete(employee)" class="pointer fa fa-trash" style="color: #ed2939"> </i>
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
    ...mapState(["staff"])
  },
   created(){
this.$store.dispatch("set_staff");
  },
   data() {
        return {
            employees: [
                { id: '00001', name: 'Frank Murphy', tel: '0908801234' },
                { id: '00002',name: 'Vic Reynolds', tel: '0908801234' },
                { id: '00003',name: 'Gina Jabowski', tel: '0908801234' },
                
            ]
        };
    },
    methods:{
      onDelete(employees){
    this.alertify.confirm('คุณต้องการจะลบข้อมูลนี้ใช่หรือไม่ ?').setHeader('<em> แจ้งเตือน ! </em> '),() =>{
console.log(employees);
        }; 

      },gotoEdit(id,name,tel){
        
        this.$router.push({name :"admin-Edit_Employees",params:{ id:id,name:name,tel:tel
        }})
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