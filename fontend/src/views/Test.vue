<template> 
<div>
  <h2>users</h2>
    <ul> 
<li v-for="users" :key="users.url">
</li>
    </ul>
    
</div>
</template>

<script>
export default {
    data(){
        return {
            users:[]
            
        };
    },
    methods: {
        login(){
            axios.get('http://localhost:5000/logins').then(res=>{
                this.users=res.data.results;
            })
            .catch(error =>{ 
                console.error(error);
            });
        }
        
    }
}
</script>

<style>

</style>