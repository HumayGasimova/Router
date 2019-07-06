import React, { Component } from 'react';

class Course extends Component {
    state = {
        courses: {}
    }

    componentDidMount = () => {
        const query = new URLSearchParams (this.props.location.search);
        const courses = {};
        for (let i of query.entries()){
            courses[i[0]] = i[1]
        }
        
        this.setState({
            courses: courses
        })
    }

    render () {
        return (
            <div>
                <h1>{this.state.courses.title}</h1>
                <p>{"You selected the Course with ID: " + this.state.courses.id}</p>
            </div>
        );
    }
}

export default Course;