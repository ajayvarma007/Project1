import React, { Component } from 'react'
import './App.css'





let position, name, salary, empcode, checkall
position = name = salary = empcode = checkall = 0


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            studentdata: [
                { position: "Devloper ", name: "Ajay",age: "22", salary: "10000", empcode: "101", ckecked: false, checkboxname: "item1" },
                { position: "Tester ", name: "Abhishek",age: "25", salary: "10000", empcode: "102", ckecked: false, checkboxname: "item2" },
                { position: " Devloper", name: "Nandivardhan",age: "19", salary: "10000", empcode: "103", ckecked: false, checkboxname: "item3" },
                { position: " Designer", name: "Pankaj",age: "18", salary: "10000", empcode: "104", ckecked: false, checkboxname: "item4" },
                { position: " Devloper", name: "Vivek",age: "22", salary: "10000", empcode: "105", ckecked: false, checkboxname: "item5" },
            ],
            data: [],
            search: '',
            name: '',
            position: '',
            salary: '',
            age: '',
            empcode: '',
            selectCheckbox: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    handleInputChange = (event) => {
        const name = event.target.name
        const value = event.target.value;
        console.log(name, value)
        this.setState({
            [name]: value
        })
    }

    selectAllCheckbox = () => {
        const { studentdata } = this.state
        console.log(studentdata)
        studentdata.map((data, index) => {
            if (checkall % 2 === 0) {
                studentdata[index]['ckecked'] = true
            }
            else {
                studentdata[index]['ckecked'] = false
            }
        })
        checkall = checkall + 1
        this.setState({})
    }

    updateRow = () => {
        const { position, name,age, salary, empcode } = this.state
        let row = {}
        row['position'] = position
        row['name'] = name
        row['age'] = age
        row['salary'] = salary
        row['empcode'] = empcode
        row['ckecked'] = false
        row['checkboxname'] = "item" + this.state.studentdata.length + 1
        this.state.studentdata.push(row)
        this.setState({})
    }


    sort(sortkeyword) {
        const { studentdata, } = this.state
        //studentdata.sort((a, b) => a.price - b.price);
        if (sortkeyword === 'position') {
            if (position % 2 === 0) {

                studentdata.sort((a, b) => JSON.stringify(b.position).localeCompare(JSON.stringify(a.position)));
            }
            else {
                studentdata.sort((a, b) => JSON.stringify(a.position).localeCompare(JSON.stringify(b.position)));
            }
            position = position + 1
            console.log(position)
        }
        if (sortkeyword === 'name') {
            if (name % 2 === 0) {
                studentdata.sort((a, b) => JSON.stringify(b.name).localeCompare(JSON.stringify(a.name)));
            }
            else {
                studentdata.sort((a, b) => JSON.stringify(a.name).localeCompare(JSON.stringify(b.name)));
            }
            name = name + 1
            console.log(name)
        }

        if (sortkeyword === 'salary') {

            if (salary % 2 === 0) {

                studentdata.sort((a, b) => JSON.stringify(b.salary).localeCompare(JSON.stringify(a.salary)));
            }
            else {
                studentdata.sort((a, b) => JSON.stringify(a.salary).localeCompare(JSON.stringify(b.salary)));
            }
            salary = salary + 1
            console.log(salary)
        }


        if (sortkeyword === 'empcode') {

            if (empcode % 2 === 0) {

                studentdata.sort((a, b) => JSON.stringify(b.empcode).localeCompare(JSON.stringify(a.empcode)));
            }
            else {
                studentdata.sort((a, b) => JSON.stringify(a.empcode).localeCompare(JSON.stringify(b.empcode)));
            }
            empcode = empcode + 1
            console.log(empcode)
        }
        
        this.setState({})
    }

    checkUncheck = (index) => {
        const { studentdata } = this.state
        console.log(index)
        studentdata[index]['ckecked'] = !studentdata[index]['ckecked']
        this.setState({})
    }


    serachData = () => {
        const { search, studentdata } = this.state
        console.log(search)
        this.setState({ data: studentdata })
        let data = []
        studentdata.map(row => {
            if (row['name'].toLocaleLowerCase().includes(search)) {
                data.push(row)
            }
        });
        this.setState({ studentdata: data })

    };




    render() {
        const { studentdata } = this.state

        return (
            <div style={{ marginTop: '1%' }} className="container " >
                    
                    <h2 className="text-align: center">Employee Management System</h2>
                <div className='row mt-5'>
                    <div className='col-4'>
                        <input onChange={this.handleInputChange} type="text" className="form-control mb-3" name="search" />
                    </div>

                    <div className='col-2'>
                        <button onClick={() => this.serachData()} className="button">search</button>

                    </div>
                    <div className='col-4'></div>

                    
                </div>

                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" className="h5" id="exampleModalLabel" >UPDATE TABLE :</h5>
                                
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <input placeholder="Position" onChange={this.handleInputChange} type="text" className="form-control mb-4" name="position"></input>
                                <input placeholder="Name" onChange={this.handleInputChange} type="text" className="form-control mb-4" name="name"></input>
                                <input placeholder="Age" onChange={this.handleInputChange} type="text" className="form-control mb-4" name="age"></input>
                                <input placeholder="Salary" onChange={this.handleInputChange} type="text" className="form-control mb-4" name="salary"></input>
                                <input placeholder="empcode" onChange={this.handleInputChange} type="text" className="form-control mb-4" name="empcode"></input>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="button" data-dismiss="modal">Close</button>
                                <button onClick={() => this.updateRow()} type="button" className="button">Update</button>
                            </div>
                        </div>
                    </div>
                </div>
                    
                <table className="table table-bordered table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col"><input value={'selectall'} onClick={() => this.selectAllCheckbox()} type="checkbox" /></th>
                            <th scope="col">S.NO</th>
                            <th scope="col">Position<button onClick={() => this.sort('position')} style={{ color: "white" }} className="fa white btn fa-sort text-right"></button></th>
                            <th scope="col">Name<button onClick={() => this.sort('name')} style={{ color: "white" }} className="fa white btn fa-sort text-right"></button></th>
                            <th scope="col">Age</th>
                            <th scope="col">Salary<button style={{ color: "green" }} onClick={() => this.sort('salary')} className="fa white btn fa-sort text-right"></button></th>
                            <th scope="col">Empcode<button style={{ color: "green" }} onClick={() => this.sort('empcode')} className="fa white btn fa-sort text-right"></button></th>


                        </tr>
                    </thead>
                    <tbody>

                        {
                            studentdata.map((data, index) =>
                                <tr>
                                    <td><input neme={data['checkboxname']} onClick={() => this.checkUncheck(index)} checked={data['ckecked']} type="checkbox"></input></td>
                                    <td>{index + 1}</td>
                                    <td>{data['position']}</td>
                                    <td>{data['name']}</td>
                                    <td>{data['age']}</td>
                                    <td>{data['salary']}</td>
                                    <td>{data['empcode']}</td>
                                </tr>
                            )

                        }


                    </tbody>
                </table>
            </div>
        )
    }
}

export default App