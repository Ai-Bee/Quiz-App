<template>
  <div class="zeBox bg-dark rounded text-light">
    <!-- From here -->
    <p class="display-4 text-success">Welcome</p>
    <hr>
    <p class="lead text-light">Pick a category</p>
    <hr>
    <div class="row justify-content-center mb-3">
      <div class='col-md-3 col-sm-10 '>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="radio" name="cadres" id="muiscl" v-model="category" value="12" checked>
          Music
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="radio" name="cadres" v-model="category"  value="11">
        Movies
        </label>
      </div>
      <div class="form-check ">
        <label class="form-check-label">
          <input class="form-check-input" type="radio" name="cadres" v-model="category" value="23" >
          History
        </label>
      </div>
      <div class="form-check ">
        <label class="form-check-label">
          <input class="form-check-input" type="radio" name="cadres" v-model="category" value="9" >
          General Knowledge
        </label>
      </div>
      </div>
      <div class='col-md-3 col-sm-10'>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="radio" name="cadres" v-model="category" value="22" >
          Geography
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="radio" name="cadres"  value="19" v-model="category">
        Maths
        </label>
      </div>
      <div class="form-check ">
        <label class="form-check-label">
          <input class="form-check-input" type="radio" name="cadres" value="27"  v-model="category">
          Animals
        </label>
      </div>
      <div class="form-check ">
        <label class="form-check-label">
          <input class="form-check-input" type="radio" name="cadres" value="10" v-model="category">
          Books
        </label>
      </div>
      </div>
    </div>
    <hr>  
    <p class="lead text-light">Pick a Difficulty Level</p>
    <hr>
    <div class="form-check form-check-inline">
      <label class="form-check-label">
        <input class="form-check-input" type="radio" name="difficulty" value="any" v-model="dificultyLevel" checked> Any
      </label>
      </div>
      <div class="form-check form-check-inline">
        <label class="form-check-label">
          <input class="form-check-input" type="radio" name="difficulty" value="easy" v-model="dificultyLevel"> Easy
        </label>
      </div>
      <div class="form-check form-check-inline disabled">
        <label class="form-check-label">
          <input class="form-check-input" type="radio" name="difficulty"  value="medium"  v-model="dificultyLevel"> Medium
        </label>
      </div>
      <div class="form-check form-check-inline disabled">
        <label class="form-check-label">
          <input class="form-check-input" type="radio" name="difficulty"  value="hard"  v-model="dificultyLevel"> Hard
        </label>
      </div>
      <br>
    <button class="my-4 btn btn-success text-center" @click="callQuiz()">Go to Quiz</button>

</div>
</template>

<script>
import mixins from "../mixins/apiCall"
import axios from 'axios'
export default {
  name: 'two',
  data () {
    return {
     category:"",
    dificultyLevel: '',
    }
  },
   methods:{
     async callQuiz(){
       if(Boolean(this.category) && Boolean(this.dificultyLevel)){
         let defDifficulty = this.dificultyLevel == 'any'? 'easy' : this.dificultyLevel;
           axios
            .get(`https://opentdb.com/api.php?amount=10&category=${this.category}&difficulty=${defDifficulty}&type=multiple`)
            .then(response => {
              this.$store.dispatch('changeDifficulty', defDifficulty);
              this.$store.dispatch("changeCategory", response.data.results[0].category)
              this.$store.dispatch("changeQuestions", response.data.results)
              this.fixFormat(this.$store.getters.showQuestions)
              this.$router.push("one")
            })
            .catch(error => {
              console.log(error)
            })
 
       } else {
         alert("Please fill in all fields")
       }
       
     },
     fixFormat(oldForm){
       let old = oldForm;
       let newForm = []
       for(var val in old){
         oldForm[val].id = val;
        //  newForm[val] = {
        //    title: old[val].question,
        //    rightOption: old[val].correct_answer,
        //    wrongAnswer: old[val].incorrect_answers
        //  }
        // console.log(old[val])
       }
        this.$store.dispatch("changeQuestions",old)
     }
  },
  filters:{
   
  },
  created(){
    //this.initialCall()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
