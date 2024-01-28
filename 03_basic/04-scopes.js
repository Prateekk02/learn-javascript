function one(){
    let a = "One"
    console.log(a)

    function two(){
        let b = "Two"
        console.log(a)

    }
    // console.log(b)  // Will give error.
    two()
}

one()