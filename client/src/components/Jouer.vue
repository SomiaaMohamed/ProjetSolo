<template>
    <div>
        <div class="page">
        <table class="table table-hover">
            <thead>
            <tr>
                <td style="font-weight: bold;">Mot</td>
                <td style="font-weight: bold;">Answer</td>
                <td style="font-weight: bold;" id="tet" hidden>Definition</td>
            </tr>
            </thead>
            <tbody>
                <tr v-for="(item) in mots" :key="item._id">
                    <td style="font-weight: bold;">{{ item.name }}</td>
                      <td><input type="text" class="answer" ></td>
                    <td hidden class="def">{{ item.definition }}</td>
                </tr>
            </tbody>
        </table>
        <h1 class="def" hidden>Score : {{ score}} / 20</h1>
    </div>
        <footer id="foot">
        <a id="collection-button" name="collection-button">
          <img style="max-width: 70px; max-height: 100px;" src="../assets/see.png" v-on:click="show()"/>
        </a>
      </footer>
      <footer id="foot2" hidden>
        <a id="collection-button" name="collection-button">
          <img style="max-width: 70px; max-height: 100px;" src="../assets/restart.png" v-on:click="restart()"/>
        </a>
      </footer>
    </div>
</template>

<script>
import axios from 'axios'
/* eslint-disable */
    export default {
        data(){
            return{
                mots: [],
                score:0
            }
        },

        created: function()
        {
            this.fetchItems();
        },

        methods: {
            fetchItems()
            {
              let uri = 'http://localhost:4000/mot/getRandom';
              axios.get(uri).then((response) => {
                  this.mots = response.data;
                  console.log(this.mots)
              });
            },
            restart(){
                this.fetchItems()
                document.getElementById("foot").hidden = false;
                document.getElementById("foot2").hidden = true;
                var element=  document.getElementsByClassName("def"); 
                for(var i=0; i<element.length; i++) {
                     var answer=answer= document.getElementsByClassName("answer")
                    element[i].hidden = true
                    document.getElementById("tet").hidden = true;
                      answer[i].value =""

                }
            },
             show()
              {
                   var element=  document.getElementsByClassName("def"); 
                   for(var i=0; i<element.length; i++) {
                       var answer=answer= document.getElementsByClassName("answer")
                       if(element[i].hidden == false){
                           document.getElementById("tet").hidden = true;
                           element[i].hidden = true
                            answer[i].value =""
                            answer[i].style.color ="black"
                           this.score=0
                           
                       }
                       else{
                           document.getElementById("tet").hidden = false;
                           document.getElementById("foot").hidden = true;
                           document.getElementById("foot2").hidden = false;
                           element[i].hidden = false  
                           if(answer[i].value){
                               if(element[i].innerHTML === answer[i].value){
                                   answer[i].style.color ="green"
                                   this.score+=2
                               }   
                                else{
                                    answer[i].style.color ="red"
                                }
                           }
                                      
                       }
            
                    }

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