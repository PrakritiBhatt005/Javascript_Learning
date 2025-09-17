const mainUser = new Object(); //singleton object

const mainUser2 = {}; //non-singleton object

mainUser.id = "123abc";
mainuser.name = "Sam";
mainUser.isLoggedIn = false;
//console.log(mainUser);

const regularüser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Emily",
            lastname: "Zelesky" 
        }
    }
}
//console.log(regularUser.fullname.userfullname firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};
//const obj3 (obji, obj2, obj4);
//const obj3 = Object assign((), obji, obj2, obj4); //good practice to declare () first, which means that all the object values are copied to the target 1.e; ()

const obj3 = {...obji, obj2, obj4}; //most preferred and used method
//console.log(obj3);

console.log(mainUser);
console.log(Object.keys(mainUser));
console.log(Object.values(mainUser));
console.log(Object.entries(mainUser));
console.log(mainUser.hasOwnProperty('isLoggedIn'));

//-----------Objects destructuring and JSON API------
const course = {
    courseName: "JavaScript One Shot",
    price: "500",
    courseInstructor: "Hitesh"
}
const {courseInstructor: instructor} = course;
console.log(instructor);


//example of destructuring wrt REACT
const navbar = (company) => {
}

navbar (company = "prakritibhatt");

 //randomuser.me api and jsonformatter for api
