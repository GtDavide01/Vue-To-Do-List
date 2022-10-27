// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.


//Collego vue 
const {createApp} = Vue; 

createApp({
    data(){
        return{
            userTodo:"",
            todo: [
               
            ],
        }
    },
    methods: {
        addTodo: function(){
            if(this.userTodo){
                this.todo.unshift({ name: this.userTodo , done: false});
                this.userTodo = "";
            }
        },
        removeTodo: function(indexTodo){
            this.todo.splice(indexTodo , 1);
        },
        todoConcluded: function(index){
            if( this.todo[index].done === false){
                console.log('hello: ', index);
                this.todo[index].done = true;
                console.log(this.todo[index].done);
            }else{
                this.todo[index].done = false;
            }
        }
    }
}).mount("#app");