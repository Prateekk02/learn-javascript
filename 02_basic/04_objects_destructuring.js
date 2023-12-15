const course={
    courseName : "Web Development",
    courcePrice : "1000",
    courseInstructor : "Anakin Skywalker"
}


// De structuring the object.
console.log(course.courseInstructor);

const {courseInstructor} = course
console.log(courseInstructor)


const {courseName : Name} = course;

console.log(Name)

// Arrays can also be destructured.
// Apis returns values in the form of json.