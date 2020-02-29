<template>
  <div class="zeBox bg-dark rounded">
  <div class="row justify-content-around pt-4">
    <p class="text-light lead col-5">Difficulty : {{$store.getters.showDifficulty | capitalize}}</p>
  <p class="text-light lead col-5">Category : {{$store.getters.showCategory | capitalize}}</p>
  </div>

    <h3 v-if="!scoring" class="lead text-center bg-warning my-4 p-4" >{{this.questions[this.counter].question | quote}}</h3>
    <h3 v-if='scoring' class="lead text-center bg-warning my-4 p-4">Game Over, Your Score is {{currScore}}  <p v-show='inner'><br>You beat your previous high score of {{this.highScore}} <br>
      <button @click="mainPageNav()" class="mt-4 btn btn-success">
            Go to Main Page
      </button>
    </p> </h3>
    <ul v-else>
      <div class="row justify-content-center pt-4 px-4">
        <li class="btn btn-primary col-5 m-4" @click="nextQuestion()" v-for='(opt,index) in options' :key='index'>{{opt | quote}}</li>
      </div>
    </ul>
    <div class="row text-light">
        <p class="blockquote w-100 m-3">Your current Score : {{currScore}}</p>
        <p class="blockquote w-100 m-3">Your High Score : {{$store.getters.showHighScore}}</p>
    </div>
    <button @click="mainPageNav()" class="btn btn-success">
          Restart Game
    </button>
    <button @click="resetScore()" class="btn btn-danger">
          Reset High Score
    </button>
    <div class="progress mt-4">
      <div class="progress-bar bg-warning  progress-bar-striped progress-bar-animated" role="progressbar" style="width: 0%"></div>
    </div>
</div>
</template>

<script>
import oneMixin from "../mixins/apiCall"
export default {
  name: 'One',
  data () {
    return {
     currScore:0,
     highScore:this.$store.getters.showHighScore,
     counter: 0,
     questions: this.$store.getters.showQuestions,
     options: [],
     scoring: false,
     inner: false
    }
  },
  methods:{
    mainPageNav(){
      this.$router.push('two')
    },
    nextQuestion(){

      let diff = this.$store.getters.showDifficulty;
         if(this.questions[this.counter].correct_answer == event.target.textContent){
           switch (diff){
              case "easy":
                this.currScore+=2;
                break;
              case "medium":
                this.currScore+=4;
                break;
              case "hard":
                this.currScore+=6;
                break;
           }
      } else {

      }
     this.counter++;
      this.options = this.questions[this.counter].incorrect_answers;
      this.options.splice(Math.floor(Math.random() * 3 + 0),0, this.questions[this.counter].correct_answer);
       if(this.counter == 9){
           this.scoring = true;
          if(this.currScore>this.highScore){
            this.inner = true;
             this.$store.dispatch('changeScore',this.currScore )
           }
        }
    }, 
    resetScore(){
      this.$store.dispatch("changeScore", 0);
    }
  },
  mounted(){
      if(this.counter == 0){
        this.options = this.questions[this.counter].incorrect_answers;
        this.options.splice(Math.floor(Math.random() * 3 + 0),0, this.questions[this.counter].correct_answer);
      }
      
   },
   watch: {
    counter(val){
      document.querySelector('.progress-bar').setAttribute('style', `width:${this.counter+1}0%`)
    }
    
  },
  filters:{
    quote(name){
      let regOne = /&quot;/g 
      let regFive = /&ldquo;/g 
      let regSix = /&rdquo;/g
      let regTwo = /&amp;/g
      let regThree = /&#039;/g
      let regFour = /&Uuml;/g
      let regSeven = /&rsquo;/g
      return name.replace(regOne,  ' " ').replace(regTwo, '&').replace(regThree, "'").replace(regFour, 'ü').replace(regFive, '"').replace(regSix,'"').replace(regSeven,  "'")
    },
     capitalize(val){
      return `${val.toUpperCase()}`
    }
  },
  mixins: [],
  created(){
    //this.playing()
  // this.oneMixin.initialCall()

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.zeBox{
  margin : 0 10%;
}
ul li {
  list-style-type: none;
}
</style>
