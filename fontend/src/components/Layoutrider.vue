<template>
  <div class="layout">
      <Navbar />
      <div class="container">
          <slot name="buttons"> </slot>
            <div class="row">
                <div class="col-lg-9">
                   <slot> </slot> 
                
                </div>
                <div class="col-lg-3">
                    <sidebar />
                </div>
            </div>
      </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Sidebar from "../components/SidebarNavrider";

export default {
    components:{
        Navbar,
        Sidebar
        
        
    }
}
</script>

<style  scoped>
.container {
  margin-top: 40px;
}
</style>>

