export default {
      methods:{
       initialCall(){
         let url
           url = 'comments'
          alert(this.msg)
          fetch(`https://jsonplaceholder.typicode.com/${url}`)
          .then(response => response.json())
          .then(json => this.todo = json)
       }
  },
 created(){
   //this.initialCall()
 }
}