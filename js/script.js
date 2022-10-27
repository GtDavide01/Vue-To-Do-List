// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

//Collego vue 
const {createApp} = Vue; 

createApp({
    data(){
        return{
            userTodo:"",
            todo: [
                {
                    name: "Fare i compiti per casa",
                    done: false
                },
                {
                    name: "Andare in palestra",
                    done:false
                }
            ],
        }
    },
    methods: {
        addTodo: function(){
            this.todo.unshift({ name: this.userTodo , done: false});
            this.userTodo = "";
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