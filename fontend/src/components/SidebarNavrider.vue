<template>
  <div class="sidebar">
    <section class="card" style="background: none; border: NONE">
      <header class="card-header text-center">
        <h5 class="m-0">
          <i class="fa fa-user-circle" style="font-size: 28px; font-weight: 600"></i>
          ส่วนของพนักงาน
        </h5>
      </header>
      <div class="card-body" style="padding: 1rem 0rem !important">
        <router-link to="/rider/WorkCalendar"  class="sidebar-link">
          <i class="fa fa-chevron-circle-right" style="color: #17a2bb"></i>
          ตารางคิวงานทั้งหมด
        </router-link>
<!-- 
        <router-link to='/admin/List_income' class="sidebar-link">
          <i class="fa fa-chevron-circle-right" style="color: #17a2bb"></i>
          ประวัติส่วนตัว
        </router-link> -->

        <router-link v-bind:to="form.path" class="sidebar-link">
          <i class="fa fa-chevron-circle-right" style="color: #17a2bb"></i>
          สถานะงานล่าสุด
        </router-link>

        <!-- <router-link to='/customer/BookingHistory' class="sidebar-link">
          <i class="fa fa-chevron-circle-right" style="color: #17a2bb"></i>
          ประวัติการทำงาน
        </router-link> -->
      </div>
    </section>
<!-- card ส่วนที่ 2 -->
       <section class="card" style="background: none; border: NONE">
      <header class="card-header text-center">
        <h5 class="m-0">
          <i class="fa fa-cogs" style="font-size: 28px; font-weight: 600"></i>
          ตั้งค่าอื่นๆ
        </h5>
      </header>
      <div class="card-body" style="padding: 1rem 0rem !important">
        <router-link to="/rider/ProfileRider" class="sidebar-link">
          <i class="fa fa-chevron-circle-right" style="color: #17a2bb"></i>
          ประวัติส่วนตัว
        </router-link>

        <router-link to="/login" class="sidebar-link">
          <i class="fa fa-chevron-circle-right" style="color: #17a2bb"></i>
          ออกจากระบบ
        </router-link>

        <!-- <router-link to="/customer/Booking" class="sidebar-link">
          <i class="fa fa-chevron-circle-right" style="color: #17a2bb"></i>
         การจอง
        </router-link> --> 

       
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";
export default {
  computed: {
    link() {
      var statuss
  //        axios.get('http://localhost:5000/riderstop',{params:{id:this.$session.get('user')}}).then(res=>{
  //   console.log(res.data[0].status)
  //  statuss=res.data[0].status
  //           })
  //           .catch(error =>{ 
  //               console.error(error);
  //           });  
  //           console.log(statuss+"sadasdasdasdas")
      //       if(res.data[0].status=="ยืนยันการจองคิว"){
      // return "/rider/UnClick";  }
      return "/rider/WorkStatus";
   
           
    }
},
  data() {
    return {
     
      form:{
               
                path:"/rider/UnClick"
               
                

            }
    };
  },
  // // props:["item"]
  // props:["header" , "navs"]
  created(){
   
 axios.get('http://localhost:5000/riderstop',{params:{id:this.$session.get('user')}}).then(res=>{
    //console.log(res.data[0].status)
    console.log(res.data.result)
   // console.log(res.data);
    if(res.data.result=="error"){
this.form.path="/rider/UnClick"
    }else{

    this.$session.set('idwork',res.data[0].id);
    if(res.data[0].status=="ยืนยันการจองคิว"){
this.form.path="/rider/WorkStatus"

    }else if(res.data[0].status=="ไปจุดนัดหมาย"){
this.form.path="/rider/WorkStatus2"
    }else if(res.data[0].status=="ถึงจุดนัดหมาย"){
this.form.path="/rider/WorkStatus3"
    }else if(res.data[0].status=="ล้างรถเสร็จสิ้น"){ 
this.form.path="/rider/WorkStatus4"}
     }
   
            })
            .catch(error =>{ 
                console.error(error);
            });  
//this.form.path="/rider/UnClick"
  },methods: {
     
    
  
  },
};
</script>

<style scope>
.card {
  background: none;
  border: none;
  border-color: #eeeeee;
}
.card-body {
  padding: 1rem 0rem;

  margin-left: 0;
  margin-right: 0;
}
.sidebar-link {
  display: block;
  padding: 0.9rem 1rem;
  color: dimgray;
  font-weight: 500;
  font-size: 19px;
  text-decoration: none !important;
  /* background-color: none;
       background: none;  */
  border: none;
}

.sidebar-link:hover {
  background-color: #d3dadf !important;
}
.sidebar-link:hover,
.sidebar-link:hover .fa fa-chevron-circle-right {
  color: black;
}
</style>