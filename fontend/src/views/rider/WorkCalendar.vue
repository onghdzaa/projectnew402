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
        to="/rider/WorkCalendar"
        >ตารางคิวงาน</router-link
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
          แสดงตารางงานของพนักงาน
        </header>
        
           <div class="table-responsive">
        <table class="table" style="font-size: 16px;white-space: nowrap">
          <thead>
            <tr>
              
              
              <th>เวลา</th>
              <th>ชื่อ-นามสกุล</th>
              <th>เบอร์โทรศัพท์</th>
              <th>ทะเบียนรถ</th>
              <th>ที่อยู่</th>
               <th>ประเภท</th>
                 <th>ราคา</th>
              <th>รหัส</th>
              <th>เลือกทำ</th>
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
                       <td>{{lr.address}}</td>
                        <td>{{lr.type}}</td>
                         <td>{{lr.price}}</td>
                     <td>{{lr.id}}</td>
              <td class="text-right">
                <!-- <i  
                 @click="gotoEdit()"
                  class="pointer fa fa-pencil-square"
                  style="padding-right: 19%; color: #17a2bb"
                >
                </i> -->
                  <button type="submit" @click="BookingButton(lr.id)" class="btn btn-info btn-block" style=" margin-top: 10px;  background-color: #17A2BB;color:#fff;">
                  ทำเลย
                </button>
                <!-- <i @click="onDelete(sv)" class="fa fa-arrow-circle-right" style="background-color: #ed2939"> ทำเลย</i> -->
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
import Layout from "@/components/Layoutrider";
import {mapState} from "vuex";
export default {
components:{
    Layout
},
computed:{
    ...mapState(["listrider"])
  },
 data() {
        return {
            employees: [
                { time:'08.00-09.00', name_member: 'Frank phy', tel_member: '0908801234', numcar:'กข123',address:'14/53 มธ.',type:'ล้างภายใน',price:'300',id: '01' },
               
                
            ]
        };
    },
     created(){
this.$store.dispatch("set_listrider",this.$session.get('user'));

     },
    methods:{
    BookingButton(idwork){
       this.$session.set('idwork',idwork);
        this.$router.push({name :"rider-WorkStatus"})
    }
    }
}
</script>

<style>
@media screen and (max-width: 575.98px){
.card-header {
    margin-top: 7% !important;
}
.form-group .btn{
  width: 50% ;
}

}

</style>