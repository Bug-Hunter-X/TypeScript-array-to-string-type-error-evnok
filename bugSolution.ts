function greeter(person: string) {
    return "Hello, " + person;
}

let user = ["Jane User", "John Smith"];

user.forEach(person => {
    console.log(greeter(person)); // Correct usage
});