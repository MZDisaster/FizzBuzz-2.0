window.onload = function () {
    document.getElementById("numberSubmit").addEventListener("click", fizzbuzzresult);
    fizzbuzzresult();

}

function startNumberValue() {
    return document.getElementById("startNumber").value;
}

function endNumberValue() {
    return document.getElementById("endNumber").value;
}

function fizzvalue() {
    return document.getElementById("fizznumber").value;
}

function buzzvalue() {
    return document.getElementById("buzznumber").value;
}


function fizzbuzzresult() {
    var fizz = fizzvalue();
    var buzz = buzzvalue();
    var startNumber = startNumberValue();
    var endNumber = endNumberValue();

    var fizzresultitem = document.getElementById("fizzresultUL");
    var buzzresultitem = document.getElementById("buzzresultUL");
    var fizzbuzzresultitem = document.getElementById("fizzbuzzresultUL");
    var excludedresultitem = document.getElementById("excludedresultUL");

    fizzresultitem.innerHTML = '';
    buzzresultitem.innerHTML = '';
    fizzbuzzresultitem.innerHTML = '';
    excludedresultitem.innerHTML = '';

    for (var i = startNumber; i < endNumber; i++) {
        if (i % fizz == 0 && i % buzz == 0)
        {
            fizzbuzzresultitem.innerHTML += "<li>FizzBuzz: " + i + "</li>";
        } else if (i % fizz == 0)
        {
            fizzresultitem.innerHTML += "<li>Fizz: " + i + "</li>";
        }
        else if (i % buzz == 0)
        {
            buzzresultitem.innerHTML += "<li>Buzz: " + i + "</li>";
        }
        else
        {
            excludedresultitem.innerHTML += "<li>" + i + "</li>";
        }
    }
}