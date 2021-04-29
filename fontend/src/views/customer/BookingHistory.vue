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
        
        <div class="table-responsive">
        <table class="table" style="font-size: 17px;white-space: nowrap">
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
            <tr v-for="sv in bookinghistory" :key="sv.id">
              <td>
                <div class="img-container">
                  <img v-bind:src="form.img" alt="bookinghistory" />
                </div>
              </td>
               <td>{{sv.time}}</td>
              <td>{{sv.name_member}} </td>
                    <td>{{sv.tel_member}}</td>
                     <td>{{sv.numcar}}</td>
                       <td>{{sv.address}}</td>
                     <td>{{sv.id}}</td>
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
import Layout from "@/components/Layoutcustomer";
import axios from "axios";
import {mapState} from "vuex";
export default {
components:{
   
Layout
},
computed:{
    ...mapState(["bookinghistory"])
  },
 data() {
        return {
            employees: [
              
                { time:'08.00-09.00', name: 'Frank phy', tel: '0908801234', numcar:'กข123',address:'14/53 มธ.',id: '01' },
                { time:'09.00-10.00',name: 'Vic Reynolds', tel: '0908801234' , numcar:'กข123', address:'14/53 มธ.',id: '02'},
                { time:'10.00-11.00', name: 'Gina Jabowski', tel: '0908801234' ,  numcar:'กข123',address:'14/53 มธ.',id: '03'},
                
            ],
            form:{
              
              img:"/img/imguser.jpg"
            }
        };
    },
      created(){
        
    // axios
    //         .get("http://localhost:5000/bookinghistory/search",{
    //                 params: {
    //                     id: this.$session.get("user")}
    //                 })
    //         .then((res) => {
              
    //         //console.log(res)
    //         })
    //         .catch((error) => {
              
    //           console.error(error);
    //         });
            this.$store.dispatch("set_bookinghistory",this.$session.get('user'));
            axios.post('http://localhost:5000/profile',{fullname:this.$session.get('user')}).then(res=>{
             // console.log(res.data[0].img)
       if(res.data[0].img!=null){
         //console.log("sssssssss")
          this.form.img=res.data[0].img
       }

            })
            .catch(error =>{ 
                console.error(error);
            });
           
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