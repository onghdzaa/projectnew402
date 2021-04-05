
<template>
  <div class="register ">
     
              <!-- รูปโลโก้ -->
              <img src="/img/logoo.png" alt="Logo" class="img-logo">
              <!-- การ์ดทั้งใบ -->
      <div class="card">
          <h1 class="card-header">
            LOGIN
          </h1>
          <div class="card-body" style=" margin-left: 15%;
    margin-right: 15%;">
                <form 
                @submit.prevent="onsubmit()">
                    <!-- ชื่อผู้ใช้งาน -->
                    <div class="form-group">
                        <label for="">ชื่อผู้ใช้งาน</label>
                        <input type="text" 
                          name="username"
                          v-validate="{required: true}"
                          v-model.trim = form.username 
                          :class="{ 'is-invalid' : errors.has('username')}" 
                          class="form-control" >
                        <span>{{ errors.first('username') }}</span>
                    </div>
                        <br>
                    <!-- รหัสผ่าน -->
                   <div class="form-group">
                        <label for="">รหัสผ่าน</label>
                        <input type="password" 
                            name="password"
                             v-validate="{required: true}"
                            v-model.trim = form.password 
                            :class="{ 'is-invalid' : errors.has('password')}" 
                        class="form-control">
                        <span>{{ errors.first('password') }}</span>
                        <br>
                    </div>
                    
                     <!--ปุ่มเข้าสู่ระบบ -->
                     <div class="form-group">
                        <button type="submit" 
                        class="btn btn-info" 
                        style="background-color: #17A2BB; 
                        color : #fff ">เข้าสู่ระบบ
                        </button>
                    </div>
                   <br>
                     <!-- ปุ่มไปหน้า ลงทะเบียน  สร้าง@click -->
                     <div class="form-group">
                        <button type="button" 
                        @click="gotoRegister()" 
                        class="btn btn-secondary" 
                        style="margin-top: -2%; margin-bottom: 4%">ลงทะเบียน
                        <br>
                        </button>
                    </div>
               
                   
                    
                </form>
          </div>
      </div>
  </div>
</template>

<script>
//ขาด method เชื่อม backend !
export default {
    data(){
        return {
            form:{
                username:"",
                password:"",
                

            }
        };
    },
    methods: {
        onsubmit(){
           this.$validator.validateAll().then(valid => {
               console.log(this.form);
           });
        },
        gotoRegister(){
        this.$router.push({name :"register"})
    }
    }
    
}
</script>

<style scope>
.login {
    max-width: 600px;
    margin: 3% auto;
}
.img-logo {
    /* โลโก้ */
    width: 100%;
    display: block;
    margin: auto;
    
    margin-bottom: 10px;
}
h1{
   /* แต่งฟ้อนท์ */
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    letter-spacing: 5px;
}
.card-body{
    /* ขอบซ้ายขวาของการ์ด */
    margin-left: 15%;
    margin-right: 15%;
}
.form-group{
    /* ขนาด,สีของชื่อฟอร์ม */
    color: dimgray;
    font-size: 18px;
}

.btn{
    width: 100%;
    font-size: 16px;
   
}
.btn:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}


</style>