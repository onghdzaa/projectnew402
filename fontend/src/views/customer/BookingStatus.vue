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
        to="/customer/BookingStatus"
        >สถานะการจอง</router-link
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
          <i class="fa fa-address-card"> </i>
            สถานะการจองปัจจุบัน
        </header>
        <hr />
         <div class="table-responsive">
        <table class="table" style="font-size: 16px;">
          <thead>
            <tr>
              
               <th>รูป</th>
              <th>เวลา</th>
              <th>ชื่อ-นามสกุล</th>
              <th>เบอร์โทรศัพท์</th>
              <th>ทะเบียนรถ</th>
              <th>ที่อยู่</th>
              <th>รหัส</th>
              <th>สถานะ</th>
              <th>เสร็จสิ้น</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="employee in employees" :key="employee.id">
              
               <td> <div class="img-container">
                  <img src="/img/imguser.jpg" alt="employee" />
                </div></td>
               <td>{{employee.time}}</td>
              <td>{{employee.name}} </td>
                    <td>{{employee.tel}}</td>
                     <td>{{employee.numcar}}</td>
                       <td>{{employee.address}}</td>
                     <td>{{employee.id}}</td>
                     <td>ดำเนินการ</td>
             
                     <td>
                         <button type="submit" @click="BookingButton()" class="btn btn-info btn-block" style=" margin-top: 10px;  background-color: #17A2BB;color:#fff;">
                  ยืนยัน
                </button>
                     </td>
              
            </tr>
             
          </tbody>
        </table>
        <br>
        <div></div>
   
         </div>
      
      </div>
    </div>
  
  </Layout>
</template>

<script>
import Layout from "@/components/Layoutcustomer";
export default {
 components: { Layout },
 data() {
        return {
            employees: [
                { time:'08.00-09.00', name: 'Frank phy', tel: '0908801234', numcar:'กข123',address:'14/53 มธ.',id: '01' },
               
                
            ]
        };
    },
    methods:{BookingButton(){
      this.push("https://router.vuejs.org/api/#router-aftereach");
      console.log("sss")}
      
    }
    
    
}
</script>

<style>

</style>