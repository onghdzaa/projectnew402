<template>
  <Layout>
      <div slot="buttons" class="form-group">
      <!-- <router-link
        class="btn btn-menu"
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
        to="/rider/WorkStatus"
        >ขั้นตอนที่ 1</router-link
      > -->
        <router-link
        class="btn btn-menu"
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
        to="/rider/WorkCalendar"
        >ตารางงานพนักงาน</router-link
      >
        <!-- <router-link
        class="btn btn-menu"
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
        to="/rider/WorkStatus3"
        >ขั้นตอนที่ 3</router-link
      > -->
 
    </div>
     <div class="card">
         <div class="card-body"
         style="
          padding-left: 9%;
          padding-right: 9%;
          margin-left: 0%;
          margin-right: 0%;
          text-align: left;
          font-size: 21px;
        "
         >
       <br>
             <header>
               <div> <i class="fa fa-pencil-square" > </i> อัพเดทสถานะการให้บริการ </div>
            
             </header>
             <b-progress :value="100"  variant="info" animated  class="mt-2"></b-progress>
                 <br>
            
             <!-- <hr> -->
             <div class="table-responsive">
        <table class="table" style="font-size: 16px;white-space: nowrap">
          <thead>
            <tr>
              
              
              <th>เวลา</th>
              <th>ชื่อ-นามสกุล</th>
              <th>เบอร์โทรศัพท์</th>
              <th>ทะเบียนรถ</th>
            
               <th>ประเภท</th>
                 <th>ราคา</th>
              <th>รหัส</th>
              
            </tr>
          </thead>
          <tbody>
            <tr v-for="lr in employees" :key="lr.id">
              
               <!-- <td> <div class="img-container">
                  <img src="/img/imguser.jpg" alt="employee" />
                </div></td> -->
               <td>{{lr.time}}</td>
              <td>{{lr.name_member}} </td>
                    <td>{{lr.tel_member}}</td>
                     <td>{{lr.numcar}}</td>
                      
                        <td>{{lr.type}}</td>
                         <td>{{lr.price}}</td>
                     <td>{{lr.id}}</td>
            
              
            </tr>
             
          </tbody>
        </table>
         </div>
          <hr />     
 
            
      <div class="row " style="margin-top:0% !important;">
        <div class="col-sm-4 " style="max-width: 100%;margin-top:0 !important;">
          <img src="/img/start6.png"  alt="user" class="img-booking" style="max-width: 100%;margin-top:0 !important;">
      
    
        </div>
        
        <div class="col-sm-8">
            <br><br>
        <div> <i class="fa fa-check-square" aria-hidden="true"></i>  สถานะงานเสร็จสิ้น </div>
        <br>
      
 <br><br><br> 


        </div>

    </div>



         </div>
     </div>
  </Layout>
</template>

<script>
import Layout from "@/components/Layoutrider";
import axios from "axios";
export default {
components:{
    Layout
},data() {
    return { employees: [
                { time:'08.00-09.00', name_member: 'Frank phy', tel_member: '0908801234', numcar:'กข123',address:'14/53 มธ.',service:'ล้างภายใน',price:'300',id: '01' },
               
                
            ]
     ,
     
      form:{
               
                radio:""
               
                

            }
    };
  },
  created(){
    const parameters = {
    "id": this.$session.get('idwork'),
            
           
            }
                axios.put('http://localhost:5000/statuschange5',parameters).then(res=>{
        
            })
            .catch(error =>{ 
                console.error(error);
           });
              
  },
    methods:{
     onsubmit(){  
               this.$validator.validateAll().then(valid => {
                //  this.alertify.confirm('การจองเสร็จสิ้น').setHeader('<em> แจ้งเตือน ! </em> ')
                // console.log(this.form);
                if(this.form.radio=="")
                return this.alertify.warning('กรุณากรอกข้อมูลให้ครบ !!')
                
                  this.$router.push({name :"rider-WorkStatus3"})
                console.log(this.form);
           });
           
        }
    }
}
</script>

<style>

@media screen and (max-width: 575.98px){
  .form .form-group .btn {
    width:100%;
  }
}
</style>