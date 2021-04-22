<template>
  <Layout>
    <div slot="buttons" class="form-group">
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
        to="/customer/Profile"
        >ประวัติส่วนตัว</router-link
      >
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
        to="/customer/Edit_Profile"
        >แก้ไขประวัติ</router-link
      >
    </div>
    <div class="card">
      <div class="card-body" style="
          padding-left: 9%;
          padding-right: 9%;
          margin-left: 0%;
          margin-right: 0%;
          text-align: left;
          font-size: 22px;
        ">
        <br />
        <header>
          <i class="fa fa-pencil-square"> </i>
          แก้ไขประวัติส่วนตัว
        </header>
        <hr />
        <form @submit.prevent="onsubmit()">
          <div
            class="form-group"
            style="max-width: 350px !important; margin: auto ;padding: 0.5rem 1rem;"
          >
            <label for="">ชื่อ - นามสกุล</label>
            <input type="text" 
            v-model.trim="form.name" 
            name ="name"
            v-validate="{ required:true}"
            :class="{'is-invalid' : errors.has('name')}"
            class="form-control" />
            <p class="invalid-feedback">{{errors.first('name')}}</p>
          </div>

          <div
            class="form-group"
            style="max-width: 350px !important; margin: auto ;padding: 0.5rem 1rem;"
          >
            <label for="">เบอร์โทรศัพท์</label>
            <input type="tel" 
            v-model.trim="form.tel"
             name =" tel"
             v-validate="{ required:true}"
            :class="{'is-invalid' : errors.has(' tel')}"
             class="form-control" />
             <p class="invalid-feedback">{{errors.first(' tel')}}</p>
          </div>

          <div
            class="form-group"
            style="max-width: 350px !important; margin: auto;padding: 0.5rem 1rem;"
          >
            <label for="">อีเมล</label>
            <input type="email" 
            v-model.trim="form.email" 
             name ="email"
              v-validate="{ required:true}"
               :class="{'is-invalid' : errors.has('email')}"
              
            class="form-control" />
             <p class="invalid-feedback">{{errors.first('email')}}</p>
          </div>
           <div
            class="form-group"
            style="max-width: 350px !important; margin: auto ;padding: 0.5rem 1rem;"
          >
            <label for="">ที่อยู่</label>
            <input type="text" 
            v-model.trim="form.address" 
            name ="address"
            v-validate="{ required:true}"
            :class="{'is-invalid' : errors.has('address')}"
            class="form-control" />
            <p class="invalid-feedback">{{errors.first('address')}}</p>
          </div>

          <div
            class="form-group"
            style="max-width: 350px !important; margin: auto ;padding: 0.5rem 1rem;"
          >
            <label for="">ยี่ห้อของรถ</label>
            <input type="text" 
            v-model.trim="form.model" 
            name ="model"
            v-validate="{ required:true}"
            :class="{'is-invalid' : errors.has('model')}"
            class="form-control" />
            <p class="invalid-feedback">{{errors.first('model')}}</p>
          </div>

         <div
            class="form-group"
            style="max-width: 350px !important; margin: auto ;padding: 0.5rem 1rem;"
          >
            <label for="">ทะเบียนรถ</label>
            <input type="text" 
            v-model.trim="form.numcar" 
            name ="numcar"
            v-validate="{ required:true}"
            :class="{'is-invalid' : errors.has('numcar')}"
            class="form-control" />
            <p class="invalid-feedback">{{errors.first('numcar')}}</p>
          </div>
          <br />
          






          
          <div class="form-group" style=" margin: auto !important;padding: 0rem 1rem; text-align:center;margin-bottom: 25px">
            <label
              class="btn btn-secondary" style="max-width: 260px !important;margin-bottom: 25px;"
              
            >
            
              <i class="fa fa-upload" > </i> อัพโหลดรูปภาพ
              <input type="file" class="d-none" @change="onChangeFile($event.target)">
            </label>
<br>
            <img class="img-fluid" :src="form.img ||'/img/noimg.jpg'" alt="no_img" />
          </div>

          <div class="form-group mb-5" style="max-width: 50% !important; margin: auto; ">
            <div class="row"  >
              <div class="col-sm-6" >
                <button type="submit" class="btn btn-info btn-block" style=" background-color: #17A2BB;color:#fff;">
                  บันทึก
                </button>
              </div>
              <div class="col-sm-6" >
                 <router-link to="/admin/List_Price" class="btn btn-danger btn-block" style=" background-color: #ed2939;color:#fff;border-color: #ed2939;" >
                  ยกเลิก
                 </router-link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "@/components/Layoutcustomer";
// import Layout from '../../components/Layout.vue';
export default {
  data(){
        return {
            form:{
                name:"",
                tel:"",
                email:"",
                address:"",
                model:"",
                numcar:"",
                img:""
                

            }
        };
    },
  components: { Layout },
  methods:{
    onsubmit(){
      this.$validator.validateAll().then(valid => {
               console.log(this.form);
               if(this.form.img=="")
                return this.alertify.warning('กรุณาอัพโหลดรูปภาพ !!');
                //axios ส่งข้อมูลไปยังแบคเอน
           });
     
    },
    onChangeFile(input){
      // const imag =""
       this.form.img="";
      if(input.files && input.files.length > 0){
        const file = input.files[0];
        if(file.type.indexOf("image/") >= 0){
          //   
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.addEventListener("load",() => {
            // console.log(reader.result);
            // this.form.eq_image=reader.result;
            this.form.img = reader.result;

          });
          return;
        }
      }
      this.alertify.warning('กรุณาเลือกรูปภาพที่จะอัพโหลด');
    }
  }
};
</script>

<style scope>
.card-body .fa-list-alt {
  padding-left: 5%;
  margin-left: 0%;
  text-align: left;
}
/* .form-control {
  max-width: 350px !important;
  margin: auto;
} */
/* .form-group .img{
  width: 60px;
  height: 60px;
} img-fluid*/
@media screen and (max-width: 575.98px) {
 .form-group .img-fluid{
   /* max-width:300px;
   max-height:360px; */
   
   margin-right: 15px;
 }
 .col-sm-6 .btn-danger {
    margin-top: 10px

 }

  
}
</style>