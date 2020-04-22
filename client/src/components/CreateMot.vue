<template>
  <div>
      <div>
    <h1 id="titre">Create Categorie</h1>
    <h1></h1>
    <form v-on:submit.prevent="addWord"  id="coll" name="coll" >
      <div>
        <label>Word:</label>
        <input type="text" class="form-control col-md-10" name="word" v-model="word" />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" class="form-control col-md-10" name="description" v-model="description" />
      </div>
      <br />
      <div class="form-group">
        <button class="btn btn-primary" @click="$emit('close')">Add Word</button>
      </div>
    </form>
      </div>
  </div>
</template>

<style scoped>
#titre {
  font-weight: bold;
  margin-top: 1%;
  text-align: center;
}
input {
  width: 70%;
  margin-left: 15%;
}
#coll {
  text-align: center;
  font-family: serif;
}
</style>

<script>
/* eslint-disable */
import router from '../router'
import axios from 'axios'
export default {
  data(){
      return{
        word:'',
       description:'',
      }
  },
methods: {
    addWord(){
       const wordData = {
        name : this.word,
        definition : this.description,
    }
    if(this.word !=='' && this.description!==''){
        axios.post('http://localhost:4000/mot/addMot', wordData).then((response) => {
        //   console.log(response)
        })
    }
    else{
        alert("petit con")
    }
    },
    hide(){
        console.log(this.cat)
        // document.getElementById('StudentModal').style.visibility = 'hidden'
        
    },
}
}

</script>
