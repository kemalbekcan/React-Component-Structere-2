class App extends React.Component{
    constructor(props){
        super(props);
        this.addPerson = this.addPerson.bind(this);
        this.resetPerson = this.resetPerson.bind(this);
        this.state = {
            name : '',
            surname : '',
            age: ''
        }
    }

    addPerson(e){
        e.preventDefault();
        this.setState({
            name : e.target.elements.txtname.value,
            surname : e.target.elements.txtsurname.value,
            age : e.target.elements.txtage.value
        });
    }

    resetPerson(){
        this.setState({
            name : "",
            surname : "",
            age : ""
        })
    }

    render(){
        return (
            <div>
                <ul>
                    <li>Name : {this.state.name}</li>
                    <li>Surname : {this.state.surname}</li>
                    <li>Age : {this.state.age}</li>
                </ul>
                <hr></hr>
                <button onClick={this.resetPerson}>Reset</button>
                <form onSubmit={this.addPerson}>
                    <label htmlFor="txtname">Name :</label><br></br>
                    <input type="text" name="txtname" id="txtname"></input><br></br>
                    <label htmlFor="txtsurname">Surname :</label><br></br>
                    <input type="text" name="txtsurname" id="txtsurname"></input><br></br>
                    <label htmlFor="txtage">Age :</label><br></br>
                    <input type="number" name="txtage" id="txtage"></input><br></br><br></br>
                    <button type="submit">Add Person</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));