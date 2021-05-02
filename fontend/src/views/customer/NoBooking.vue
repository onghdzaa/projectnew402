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
        to="/customer/booking"
        >ย้อนกลับ</router-link
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
               <div> <i class="fa fa-address-card" > </i>  สถานะการจอง </div>
            
             </header>
             <!-- <b-progress :value="50"  variant="info" striped :animated="animate"  class="mt-2"></b-progress> -->
             <hr>
               
 
            
      <div class="row " style="margin-top:0% !important;">
        <div class="col-sm-4 " style="max-width: 100%;margin-top:0 !important;">
          <img src="/img/unclick.png"  alt="user" class="img-booking" style="max-width: 100%;margin-top:0 !important;">
      
    
        </div>
        
        <div class="col-sm-8">
            <br><br>
        <div> <i class="fa fa-window-close" aria-hidden="true"></i>  ไม่มีการจอง </div>
        <hr>
        <div> กดปุ่มเริ่มจอง : <button type="submit" @click="startwork()" class="btn btn-info btn-block" style=" display:inline;margin-left:10px;max-width:75px;background-color: #17A2BB;color:#fff;"> จอง</button></div>
        <br>
      
 <br><br><br> 


        </div>

    </div>



         </div>
     </div>
  </Layout>
</template>

<script>
import Layout from "@/components/Layoutcustomer";

export default {
components:{
    Layout
},data() {
    return {
     
      form:{
               
                radio:""
               
                

            }
    };
  },
    methods:{
     startwork(){  
               this.$router.push({name :"customer-booking"})
           
        }
    }
}
</script>

<style>

@media screen and (max-width: 575.98px){
  .btn  {
    /* width:180px !important; */
    
  }
  .col-sm-8{
  font-size: 18px !important;
}
}
</style>