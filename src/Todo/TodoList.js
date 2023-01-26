import React, { Component } from 'react';

class Todolist extends Component {
    constructor(){
        super();
        this.state = {
            userInput: '',
            items: [],
        }
    }
     //Fonction ou méthode //
     onChange(event){
        this.setState({
            userInput:event.target.value
        })
    };
      
    // Fonction pour ajouter les todos //
    addTodo(event){
        event.preventDefault();
        this.setState({
            userInput: " ",
            items:[...this.state.items, this.state.userInput] // méthode pour inserer les valeurs tapées dans le tableau items //

        })
    };
    // fonction pour supprimer les todos //
    deleteTodo(event){
        event.preventDefault(); 
        const array = this.state.items;
        const index = array.indexOf(event.target.value);
        array.splice(index, 1);
        this.setState({
            items : array,
        });
    }


    // retour de la vue des Todos ajouter //
    renderTodos(){
        return this.state.items.map((item)=>{
            return (
               <div className='itemTodo mt-3'>
                {item} | <button onClick={this.deleteTodo.bind(this)}>X</button>
               </div>
            )}
    )};

    // retour du rendu (de la vue)  
    render(){
        return(
            <div>
                <h1 align='center' className='p-3'>My TodoList with React.js</h1>
                <form className='form-row align-items-center'>
                    <input value={this.state.userInput}
                     type ="text" placeholder='Entrer votre liste' onChange={this.onChange.bind(this)}
                     className ="form-control mb2"
                     ></input>
                    <button className='btn btn-primary mt-2' onClick={this.addTodo.bind(this)}>Ajouter</button>
                </form>
                <div className='mt-3' >{this.renderTodos()}</div>
            </div>
            
        );
    }
}
export default Todolist;