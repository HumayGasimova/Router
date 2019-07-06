import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom';
import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    articles = () => {
        const courses = this.state.courses;
        let queryParams = [];
        let queryString = [];
     
        courses.map((i)=>{
            for(let y in i){
               queryParams.push(encodeURIComponent(y) + '=' + encodeURIComponent(i[y]))
            } 
           
         return  queryParams.push("split");
        })
        queryString = queryParams.join('&').split('&split&');

        return(
            <div>
                {this.state.courses.map( (course, i )=> {
                    return (
                        <Link to={{
                            pathname: this.props.location.pathname + '/Course' + course.id,
                            search: '?' +  queryString[i]
                             }}
                            key={course.id}>
                            <article 
                                className="Course"
                                >
                                {course.title}
                                </article>
                        </Link>
                    )
                } )}
            </div>
        )
   
} 
    render () {
        return (
            <div>
                {/* <h1>Amazing Udemy Courses</h1> */}
                {console.log(this.props)}
                <section className="Courses">
                    { this.articles()}
                </section>
            </div>
        );
    }
}

export default Courses;