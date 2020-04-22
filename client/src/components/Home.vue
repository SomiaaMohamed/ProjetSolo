<template>
    <div>
        <div class="page">
        <table class="table table-hover">
            <thead>
            <tr>
                <td style="font-weight: bold;">Mot</td>
                <td style="font-weight: bold;">Definition</td>
            </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in mots" :key="item._id">
                    <td style="font-weight: bold;">{{ item.name }}</td>
                    <td>{{ item.definition }}</td>
                    <td>  <a >
          <img style="max-width: 20px; max-height: 50px;" src="../assets/delete.png" v-on:click="delet(item._id,index)"/>
        </a></td>
                </tr>
            </tbody>
        </table>
    </div>
       <footer>
        <a id="collection-button" name="collection-button">
          <img style="max-width: 70px; max-height: 100px;" src="../assets/add.png" v-on:click="show()"/>
        </a>
      </footer>
    </div>
</template>

<script>
import axios from 'axios'
import CreateMot from './CreateMot'
/* eslint-disable */
    export default {
        data(){
            return{
                mots: []
            }
        },

        created: function()
        {
            this.fetchItems();
        },

        methods: {
            fetchItems()
            {
              let uri = 'http://localhost:4000/mot/getMot';
              axios.get(uri).then((response) => {
                  this.mots = response.data;
                  console.log(this.mots)
              });
            },
               show() {
      this.$modal.show(
        CreateMot,
      {
        'closed': (event) => { 
                      let uri = 'http://localhost:4000/mot/getMot';
      axios.get(uri).then(response => {
        this.mots = response.data;
        console.log(this.mots);
      });}
        },
         {
          draggable: true
        },
      );
    },
         delet(id,index)
            {
                       let uri = 'http://localhost:4000/mot/delete/';
              axios.delete(uri+id).then((response) => {
                  console.log(response)
              });
         this.mots.splice(index,1)
            },
        }
    }
</script>

<style scoped>
.page{
    text-align: center;
    padding-top: 1%;
    padding-left: 10%;
    padding-right: 10%;
}
#collection-button {
  position: fixed;
  bottom: 30px;
  right: 30px;
}
#collection-button:hover {
  zoom: 1.2;
}
</style>