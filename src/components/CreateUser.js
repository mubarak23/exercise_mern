import React from 'react';
//import { Link } from 'react-router-dom';

class CreateUser extends React.Component{
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);

        this.state ={   
            username: ''
        }

    }    

    onChangeUsername = (e) =>{
        this.setState({
            username: e.target.value
        });
    }

    onSubmit = (e) =>{
    e.preventDefault();
       const user = {
           username: this.state.username
       };

       this.setState({
           username: ''
       });

       console.log(user);
   } 

    render(){
        return(
            <div>
                <h3>Create Exercise</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                       <label>Username</label>
                        <input type="text" 
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange = {this.onChangeUsername} />   
                    </div>
                    <div className="form-group">
                        <input type="submit" 
                        className="btn btn-primary"
                        value="Create Username"
                         />   
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateUser;

//ExerciseList