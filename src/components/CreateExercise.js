import React from 'react';
//import { Link } from 'react-router-dom';

class CreateExercise extends React.Component{
    constructor(props){
        super();

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            description:'',
            duration: 0,
            date: new Date(),
            users:[]
        }
    }

    componentDidMount(){
        this.setState({
            users : ['test user'],
            username : ['Test User'],
        })
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }

    onChangeDescription(e){
        this.setState({
            description: e.target.value
        });
    }

    onChangeDuration(e){
        this.setState({
            duration: e.target.value
        });
    }
    onChangeDate(date){
        this.setState({
            date: date
        });
    }
    onSubmit(e){
        e.preventDefault();

        const exercise ={
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }
        console.log(exercise);
        window.location = '/';
    }

    render(){
        return(
            <div>
                Create Exercise Component;
            </div>
        )
    }
}

export default CreateExercise;
//CreateExercise