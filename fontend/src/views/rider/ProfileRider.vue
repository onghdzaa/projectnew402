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
        to="/rider/ProfileRider"
        >ประวัติส่วนตัว</router-link
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
        to="/rider/EditProfileRider"
        >แก้ไขข้อมูล</router-link
      > -->
    </div>
      <div class="card mb-3" style=" border-right: solid 9px #17A2BB;">
      <div class="row align align-items-center">
        <div class="col-sm-4 " >
          <img src="/img/employee.png"  alt="user" class="img-booking" style="max-width: 100%;">
        </div>
        <div class="col-sm-8  " style=" margin-left: -40px ;" >
          <div class="card-body" style="font-size: 19px;color:dimgray;">
            <div>ชื่อ - นามสกุล : {{name}}</div>
            <div>เบอร์โทรศัพท์ : {{tel}}</div>
           
            <hr>
            <div>อีเมล : {{email}}</div>
            <div>ชื่อผู้ใช้งาน : {{username}} </div>
            <div>ที่อยู่ : {{address}}</div>
            <hr>
            <div>ยี่ห้อของรถ :{{model}} </div>
            <div>ทะเบียนรถ : {{numcar}}</div>
            
          

            </div>
          
          </div>
     
      
    
          

        </div>

    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/Layoutrider'
import axios from "axios";
export default {
components:{
    Layout
},
  data() {
    return {
    name :'นาย เข้ม อุ่นใจ',
    tel :'0908807104',
     username:'kk_1',
    email:'kk@hotmail.com',
   
    address:'53/92 ตลาด interzone จังหวัด กรุงเทพ',
    model:'totota',
    numcar:'รข3443',


    };
  },
  created(){
    //console.log(this.$session.get('user'))
     axios.get('http://localhost:5000/profilerider',{params:{id:this.$session.get('user')}}).then(res=>{
        //console.log(res.data)
         this.name=res.data[0].full_name;
        this.tel=res.data[0].tell_staff;
        // this.email=res.data[0].email;
        // this.address=res.data[0].address;
        // this.model=res.data[0].numcar;
        // this.numcar=res.data[0].numcar;
        //this.username=res.data[0].user_id;

            })
            .catch(error =>{ 
                console.error(error);
            });
  }
}
</script>

<style>
@media screen and (max-width: 575.98px) {

 .col-sm-8 .card-body{
    margin-left: 70px !important;
     margin-right: 50px !important;
 }

  
}
</style>