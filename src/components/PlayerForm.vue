<template>
    <div id="player-form">
        <form v-on:submit.prevent="handleSubmit">
            <label for="">Player name</label>
            <input 
                type="text" 
                v-bind:class="{'has-error':submitting&&invalidName}"
                v-model="player.name"
                v-on:focus="clearStatus"
                v-on:keyboard="clearStatus"
                />
            <label for="">Sore</label>
            <input 
                type="text" 
                v-bind:class="{'has-error':submitting&&invalidScore}"
                v-model="player.score"
                v-on:focus="clearStatus"
                v-on:keyboard="clearStatus"
                />
            <button>Add Player</button>
        </form>
    </div>
</template>

<script>

export default {
    name:'player-form',
    computed:{
        invalidName(){
            return this.player.name == ''
        },
        invalidScore(){
            return this.player.score == ''
        }
    },
    data(){
        return{
            submitting:false,
            error:false,
            success:false,
            player:{
                name:'',
                score:'',
            }
        }
    },
    methods:{
        handleSubmit(){
            this.submitting=true
            this.clearStatus()
            if(this.invalidName||this.invalidScore){
                this.error=true;
                return;
            }
            
           this.$emit("add:player",this.player)
           this.player={
                name:'',
                score:''
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
