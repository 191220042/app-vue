<template>
    <div id="employee-form">
        <form v-on:submit.prevent="handleSubmit">
            <label for="">Player name</label>
            <input 
                type="text" 
                v-bind:class="{'has-error':submitting&&invalidName}"
                v-model="employee.name"
                v-on:focus="clearStatus"
                v-on:keyboard="clearStatus"
                />
            <label for="">Sore</label>
            <input 
                type="text" 
                v-bind:class="{'has-error':submitting&&invalidRole}"
                v-model="employee.role"
                v-on:focus="clearStatus"
                v-on:keyboard="clearStatus"
                />
            <button>Add Player</button>
        </form>
    </div>
</template>

<script>

export default {
    name:'employee-form',
    computed:{
        invalidName(){
            return this.employee.name == ''
        },
        invalidRole(){
            return this.employee.role == ''
        }
    },
    data(){
        return{
            submitting:false,
            error:false,
            success:false,
            employee:{
                name:'',
                role:'',
            }
        }
    },
    methods:{
        handleSubmit(){
            this.submitting=true
            this.clearStatus()
            if(this.invalidName||this.invalidRole){
                this.error=true;
                return;
            }
            
           this.$emit("add:employee",this.employee)
           this.employee={
                name:'',
                role:''
            }

           this.error=false,
           this.success=true,
           this.submitting=false
        },
        clearStatus(){
            this.error=false,
            this.success=false
        }
    }
}
 
</script>
