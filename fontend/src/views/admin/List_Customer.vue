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
        to="/admin/List_Customer"
        >ข้อมูลลูกค้า</router-link
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
          <i class="fa fa-address-card"> </i>
            แสดงข้อมูลลูกค้า
        </header>
        <hr />
        <table class="table">
          <thead>
            <tr>
              
              <th>#</th>
              <th>ชื่อ-นามสกุล</th>
              <th>ที่อยู่</th>
              <th>เบอร์โทรศัพท์</th>
              <th>อีเมลล์</th>
               <!-- <th>ยี่ห้อของรถ</th>
               <th>ทะเบียนรถ</th> -->
              
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              
               <td>{{user.no}}</td>
              <td>{{user.Name}} </td>
                    <td>{{user.address}}</td>
                    <td>{{user.tel}}</td>
                    <td>{{user.email}}</td>
                    <!-- <td>{{user.model}}</td>
                    <td>{{user.numcar}}</td> -->
                   <td>
                <!-- <div class="img-container">
                  <img src="/img/slip.jpg" alt="user" />
                </div> -->
              </td>
              
              
            </tr>
             
          </tbody>
        </table>
        
        
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
export default {
  components: { Layout,Pagination },
   data() {
        return {
            users: [
                { no: '1', Name: 'Frank Murphy', address: '153/41 หอพัก a3 จ.กรุงเทพ' ,tel:'0615103308',email:'kny@gmail.com'},
                { no: '2',Name: 'Vic Reynolds', address: '83/2 หอพัก c3 จ.ปทุมธานี' ,tel:'0908807104',email:'stp@gmail.com' },
                { no: '3',Name: 'Gina Jabowski', address: '153/41 หอพัก a3 จ.สุพรรณบุรี' ,tel:'0616482107',email:'spc@gmail.com' },
                // { Name: 'Jessi', lastName: 'Glaser', email: 'jessi.glaser@test.com', role: 'User' },
                // { Name: 'Jay', lastName: 'Bilzerian', email: 'jay.bilzerian@test.com', role: 'User' }
            ]
        };
    },
    methods:{
      onDelete(users){
        this.alertify.confirm('คุณต้องการจะลบข้อมูลนี้ใช่หรือไม่ ?'),() =>{
console.log(users);
        }; 
//         this.alertify.confirm("คุณต้องการจะลบข้อมูลนี้ใช่หรือไม่ ?" ,() =>{
// console.log(users);
//         })
        
      }
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