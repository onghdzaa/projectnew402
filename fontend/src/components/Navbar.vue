<template>
  <nav class="navbar navbar-light">
    <a class="navbar-brand" href="#">
      <img src="/img/logo_nav2.png" alt="" />
    </a>
    <!-- <div class="text-logout">
      <h3>ออกจากระบบ</h3>
    </div> -->

    <!-- <a class="btn-logout" href="">
      <i class="fa fa-sign-out" aria-hidden="true"></i>
    </a> -->
    <div class="topnav-right">
      <!-- <a href="#search"></a> -->
      <a @click="onLogout()">ออกจากระบบ
          <i class="fa fa-sign-out" aria-hidden="true"></i>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
name : "navbar",
methods:{
    onLogout(){
        console.log("Logout");
    }
}
};
</script>

<style>
.navbar {
  background-color: #fff;
  height: 95px;
  border-bottom: solid 1px #17a2bb;
  padding-right: 30px;
  padding-top: 0%;
}
.navbar-brand img {
  width: 288px;
  height: 68px;
  margin-left: 20px;
  margin-bottom: 10px;
}
/* .btn-logout {
  padding-top: 0px;
  border-radius: 4px;
  width: 100px;
  height: 50px;
  color: white;
  font-size: 30px;
  text-align: center;
  line-height: 50px;
  background-color: #17a2bb;
  /* margin-top: 0%; */
/* } */ 
.btn-logout:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.text-logout {
  margin-left: 0%;
}
.topnav-right {
  float: right;
  /* background-color: #17a2bb; */
}
.topnav-right a {
  float: left;
  color: #17a2bb;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 26px;
  cursor: pointer;
}
</style>