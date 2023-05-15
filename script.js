function greet()
    {
        var name = document.getElementById("nameinput").value
        var string = document.getElementById("greeting")
        string.innerHTML = `Hello ${name}!`
    }