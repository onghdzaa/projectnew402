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
    <div class="card mb-3" style="border-right: solid 9px #17a2bb">
      <div class="row">
        <div class="col-sm-4">
          <img
            v-bind:src="img"
            alt="user"
            class="img-booking"
            style="max-width: 100%"
          />
        </div>
        <div
          class="col-sm-8"
          style="
            padding-left: 0% !important;
            padding-right: 0%;
            margin-left: -10px;
          "
        >
          <div class="card-body" style="font-size: 19px; color: dimgray">
            <br />
            <div class="head" style="color: green; font-size: 23px">
              สถานะการจอง : " {{status}} "
            </div>
            <div>จองคิวบริการล้างรถวันที่ : ({{date}})</div>
            <div>เวลาให้บริการ : {{time}}</div>
    
    
            <hr />
            <!-- <div>  ยกเลิกการจอง : <i @click="onDelete(employee)" class="pointer fa fa-trash" style="color: #ed2939"> </i> </div> -->
            <!-- <i @click="onDelete(employee)" class="pointer fa fa-trash" style="color: #ed2939"> </i> -->

            <div>
              ยกเลิกการจอง :
                
  <b-button   style="
                  border: none;
                  display: inline;
                  margin-left: 10px;
                  max-width: 95px;
                  background-color: #ed2939;
                  color: #fff;
                " id="show-btn" @click="$bvModal.show('bv-modal-example')" :disabled="this.status!='กำลังดำเนินการ'" > <i
                  
                  class="pointer fa fa-trash"
                  style="color: #fff"
                >
                </i>
                ยกเลิก</b-button>

  <b-modal id="bv-modal-example" hide-footer>
    <template #modal-title>
      แจ้งเตือน !
    </template>
    <br>
    <div class="d-block text-center" >
      <h5>ต้องการยกเลิกการจองใช่หรือไม่ ?</h5>
      <br>
      <hr>
    </div>
    <b-button class="mt-3 " block style="margin:auto;width:50%;border:none; background-color: #ed2939;"  @click="onDelete()">ยกเลิกการจอง</b-button>
  </b-modal>

              <!-- <button
                type="submit"
                @click="onDelete()"
                class="btn btn-info btn-block"
                style="
                  border: none;
                  display: inline;
                  margin-left: 10px;
                  max-width: 95px;
                  background-color: #ed2939;
                  color: #fff;
                "
              >
                <i
                  
                  class="pointer fa fa-trash"
                  style="color: #fff"
                >
                </i>
                ยกเลิก
              </button> -->
            </div>
            <hr />
            <div>ชื่อ - นามสกุล : {{name}}</div>
            <div>เบอร์โทรศัพท์ : {{tel}}</div>
            <div>รหัสพนักงาน : {{id}}</div>
            <!-- <div>รหัสพนักงาน : 00004</div>margin-top:10px; -->
            <div>
              สถานะงานเสร็จสิ้น :
              <button
                type="submit"
                @click="BookingSuccess()"
                class="btn btn-info btn-block"
                style="
                  display: inline;
                  margin-left: 10px;
                  max-width: 75px;
                  background-color: #17a2bb;
                  color: #fff;
                "
              >
                ยืนยัน
              </button>
            </div>

            <hr />

            <br />
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "@/components/Layoutcustomer";
import Pagination from "@/components/Pagination";
import axios from 'axios';
import moment from 'moment'
// import Layout from '../../components/Layout.vue';
export default {
  components: { Layout, Pagination },
  created(){
 axios.get('http://localhost:5000/customerpresent',{params:{id:this.$session.get("user")}}).then(res=>{
        console.log(res)
        this.status=res.data[0].status
      this.date=moment(String(res.data[0].date)).format('MM-DD-YYYY')
        this.time=res.data[0].time
        this.name=res.data[0].name_staff
        this.tel=res.data[0].tel_staff
        this.id=res.data[0].id_staff
        this.id_reserve=res.data[0].id
        this.img=res.data[0].img
            })
            .catch(error =>{ 
                console.error(error);
           });
          
        //  console.log(this.$session.get("id2"));
  },
  data() {
    return {
      status: "succcess",
      date:"",
      time:"",
      name:"",
      tel:"",
      id:"",
      id_reserve:"",
      img:""
    };
  },
  methods: {
    BookingButton() {
      this.$router.push({ name: "BookingButton" });
    },
    onsubmit() {
      console.log(this.form);
    },
    BookingSuccess() {
      this.$router.push({ name: "customer-Rating", params: { id:this.id_reserve,id_staff:this.id,time:this.time,date:this.date,name:this.name,tel:this.tel,img:this.img}  });
    },
    onDelete() {
//   !! ลีอองใส่เมทอดลบการจองในนี้ !!
      // NoBooking
this.$router.push({ name: "NoBooking" });
    }, 



  },
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
  /* background-color:#ced4da !important ;font-size: 18px !important; */
  border: 4px solid rgb(165, 163, 155);

  /* #17a2bb */
}
.card-body .fa-list-alt {
  padding-left: 5%;
  margin-left: 0%;
  text-align: left;
}
.img-booking {
  max-width: 10%;
}
.card {
  border-right: solid 5px #17a2bb;
}
@media screen and (max-width: 575.98px) {
  .col-sm-8 .card-body .btn {
    max-width: 85px !important;
    margin-top: 10px;
  }
  .col-sm-8 .card-body {
    font-size: 18px !important;
  }
  .head {
    font-size: 20px !important;
  }
}
</style>