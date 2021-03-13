<template>
  <nav class="navbar  navbar-light ">
       <a class="navbar-brand" href="#"> 
           <img src="/img/logo_nav2.png" alt="">
       </a>
       <div class="btn-logout" href="">
    ออกจากระบบ
       </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
.navbar {
    background-color: #fff;
    height: 95px;
    border-bottom: solid 1px  #17A2BB;
    padding-right: 30px;
    padding-top: 0%;
    
    
    
}
.navbar-brand img{
    width: 288px;
    height: 68px;
    margin-left: 20px;
    margin-bottom: 10px ;
}
 .btn-logout{
     padding-top: 0px;
     border-radius: 4px;
     width: 200px;
    height: 50px;
   background-color:  #17A2BB;
    /* margin-top: 0%; */ 
 } 
 .btn-logout:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

</style>