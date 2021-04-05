<template>
  <div class="sidebar">
    <section class="card" style="background: none; border: NONE">
      <header class="card-header text-center">
        <h5 class="m-0">
          <i class="fa fa-unlock" style="font-size: 28px; font-weight: 600"></i>
          ส่วนของผู้ดูแลระบบ
        </h5>
      </header>
      <div class="card-body" style="margin-left: 0; margin-right: 0">
        <router-link to="/admin/Calendar" class="sidebar-link">
          <i class="fa fa-chevron-circle-right" style="color: #17a2bb"></i>
          ตารางงานของพนักงาน
        </router-link>

        <router-link to='/admin/List_income' class="sidebar-link">
          <i class="fa fa-chevron-circle-right" style="color: #17a2bb"></i>
          ข้อมูลรายรับประจำวัน
        </router-link>

        <router-link to="/admin/List_Price" class="sidebar-link">
          <i class="fa fa-chevron-circle-right" style="color: #17a2bb"></i>
          แก้ไขราคาค่าบริการ
        </router-link>

        <router-link to='/admin' class="sidebar-link">
          <i class="fa fa-chevron-circle-right" style="color: #17a2bb"></i>
          ระบุจำนวนพนักงาน
        </router-link>
      </div>
    </section>
<!-- card ส่วนที่ 2 -->
       <section class="card" style="background: none; border: NONE">
      <header class="card-header text-center">
        <h5 class="m-0">
          <i class="fa fa-cogs" style="font-size: 28px; font-weight: 600"></i>
          ตั้งค่าอื่นๆ
        </h5>
      </header>
      <div class="card-body" style="margin-left: 0; margin-right: 0">
        

        <router-link to="/admin/List_Customer" class="sidebar-link">
          <i class="fa fa-chevron-circle-right" style="color: #17a2bb"></i>
          ข้อมูลลูกค้า
        </router-link>

        <router-link to="/login" class="sidebar-link">
          <i class="fa fa-chevron-circle-right" style="color: #17a2bb"></i>
         ออกจากระบบ
        </router-link>

        <!-- <router-link to="/customer/Booking" class="sidebar-link">
          <i class="fa fa-chevron-circle-right" style="color: #17a2bb"></i>
         การจอง
        </router-link> -->

       
      </div>
    </section>
  </div>
</template>
<script>
export default {
  // // props:["item"]
  // props:["header" , "navs"]
};
</script>

<style scope>
.card {
  background: none;
  border: none;
  border-color: #eeeeee;
}
.card-body {
  padding: 1rem 0rem;

  margin-left: 0;
  margin-right: 0;
}
.sidebar-link {
  display: block;
  padding: 0.9rem 1rem;
  color: dimgray;
  font-weight: 500;
  font-size: 19px;
  text-decoration: none;
  /* background-color: none;
       background: none;  */
  border: none;
}

.sidebar-link:hover {
  background-color: #d3dadf !important;
}
.sidebar-link:hover,
.sidebar-link:hover .fa fa-chevron-circle-right {
  color: black;
}
</style>