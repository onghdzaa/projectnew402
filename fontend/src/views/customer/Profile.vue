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
        to="/customer/Profile"
        >ประวัติส่วนตัว</router-link
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
        to="/customer/Edit_Profile"
        >แก้ไขประวัติ</router-link
      >
    </div>
    <div class="card mb-3" style=" border-right: solid 9px #17A2BB;">
      <div class="row align align-items-center">
        <div class="col-sm-4 " >
          <img v-bind:src="img"  alt="user" class="img-booking" style="max-width: 100%;">
        </div>
        <div class="col-sm-8  " style=" margin-left: -40px ;">
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
// import dialog from './dialog.vue'
import axios from 'axios';
import Layout from "@/components/Layoutcustomer";
import Pagination from "@/components/Pagination";
// import Layout from '../../components/Layout.vue';
export default {
  components: { Layout, Pagination },
  data() {
    return {
    name :'นางสาว สุขศรี อิ่มบุญ',
    tel :'0908807104',
     username:'suksri_1',
    email:'suksri@hotmail.com',
   
    address:'11/22 เชียงราก 1 หอพัก city จังหวัด ปทุมธานี',
    model:'honda',
    numcar:'กข123',
    img:''

    };
  },
  created(){
     
      axios.post('http://localhost:5000/profile',{fullname:this.$session.get('user')}).then(res=>{
        console.log(this.$session.get('user'))
        this.name=res.data[0].name;
        this.tel=res.data[0].tel;
        this.email=res.data[0].email;
        this.address=res.data[0].address;
        this.model=res.data[0].numcar;
        this.numcar=res.data[0].numcar;
        this.username=res.data[0].user_id;
        this.img=res.data[0].img;
        console.log(res);
            })
            .catch(error =>{ 
                console.error(error);
            });
   },
  methods: {
     BookingButton(){
        this.$router.push({name :"BookingButton"})
    }, 
    
    
  },
};
</script>

<style scope>

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

 .col-sm-8 .card-body{
    margin-left: 70px !important;
     margin-right: 50px !important;
     font-size: 18px !important;
 }

  
}
</style>