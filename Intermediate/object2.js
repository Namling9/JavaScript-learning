// De-structuring Object

const course = {

    courseName: "FrontEnd",
    price: 999,
    courseInstructor: "Hitesh"
}

console.log(course.courseInstructor); // Hitesh

// destructuring

const{courseInstructor}= course;

console.log(courseInstructor); // Hitesh

// Can also give name to the object
const{courseInstructor : instructor} = course;

console.log(instructor); // Hitesh