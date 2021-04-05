<template>
<Layout>
     <div slot="buttons" class="form-group">
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
        to="/customer/Booking"
        >จองบริการล้างรถ</router-link
      > -->
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
        to="/customer/BookingHistory"
        >ประวัติการจอง</router-link
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
          แสดงประวัติการจอง
        </header>
        <hr />
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
              <hr />
              <!-- <th></th> -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="employee in employees" :key="employee.id">
              <td>
                <div class="img-container">
                  <img src="/img/imguser.jpg" alt="employee" />
                </div>
              </td>
               <td>{{employee.time}}</td>
              <td>{{employee.name}} </td>
                    <td>{{employee.tel}}</td>
                     <td>{{employee.numcar}}</td>
                       <td>{{employee.address}}</td>
                     <td>{{employee.id}}</td>
                   <td> <div class="text-right">
                     
                     <label class="badge badge-success">
                        <i class="fa fa-check-square-o" style="color:black"></i> สำเร็จ
                     </label>
                     <!-- เชื่อมกับสถานะเพื่อเปลี่ยนไอคอน -->
                       <!-- <label class="badge badge-success" v-if="item.bk_status == 'allowed'">
                                    <i class="fa fa-check-square-o"></i> อนุมัติแล้ว
                                </label>

                                <label class="badge badge-danger" v-if="item.bk_status == 'not allowed'">
                                    <i class="fa fa-window-close"></i> ไม่สำเร็จ
                                </label> -->

                     </div></td>
              
             
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
import Layout from "@/components/Layoutcustomer";
export default {
components:{
   
Layout
},
 data() {
        return {
            employees: [
                { time:'08.00-09.00', name: 'Frank phy', tel: '0908801234', numcar:'กข123',address:'14/53 มธ.',id: '01' },
                { time:'09.00-10.00',name: 'Vic Reynolds', tel: '0908801234' , numcar:'กข123', address:'14/53 มธ.',id: '02'},
                { time:'10.00-11.00', name: 'Gina Jabowski', tel: '0908801234' ,  numcar:'กข123',address:'14/53 มธ.',id: '03'},
                
            ]
        };
    },

}
</script>

<style>
.badge {
  width: 80px;
  border-radius: 0;
  font-weight: 400;
  color:black;
  background-color: rgb(138, 226, 67);
}
</style>