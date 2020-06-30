import React from 'react';
import {connect} from 'react-redux'
import {reset} from 'redux-form'

import ToDoForm from './ToDoForm'
import {createToDo, getToDo} from '../actions'

class ToDoCreate extends React.Component{
    formOnChangeSubmit = () => {
        return null
        // is this the right way to do this?
    }
    onFormSubmit = (formValues, dispatch) => {
        this.props.createToDo(formValues).then( () => dispatch(reset('create-todo')) )
    }
    arrowsKeyPress = (event) => {
        // up arrow
        if(event.keyCode === 38){
            const nextItemIndex = this.props.todos.length - 1;
            this.props.getToDo(this.props.todos[nextItemIndex])
        }
    }
    render(){
        if (this.props.activeToDo.id ){
            return <input></input>
            
        } else {
            return (
                <ToDoForm 
                    formOnSubmit = {this.onFormSubmit} 
                    formOnChangeSubmit = {this.formOnChangeSubmit} 
                    arrowsKeyPress = {this.arrowsKeyPress}
                    />
            )
        }
        
    }
}

const mapStateToProps = state => {
    return {
        activeToDo : state.activeToDo, 
        todos: Object.values(state.todos)
    }
}

export default connect(mapStateToProps, {createToDo, getToDo})(ToDoCreate);

////
// i think dispatch is a redux thing
// this.props.createToDo(formValues).then( () => dispatch(reset('create-todo')) ); ////!!!!!!!!!