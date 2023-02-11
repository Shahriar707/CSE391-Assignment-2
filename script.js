function quoteBox(){
    var quotes = ["Wait for a hero? Barbara Joan Gordon. Be your own damn hero.", "You either die a hero, or you live long enough to see yourself become the villain.", "The past can talk to the future, if the present has ears to hear and eyes to see with.", "Sometimes it is only madness that makes us what we are.", "Criminals, by nature, are a cowardly and superstitious lot. To instill fear into their hearts, I became a bat. A monster in the night. And in doing so, have I become the very thing that all monsters become - alone?", "Did I finally reach the limits of reason? And find the Devil waiting? And was that fear in his eye?", "You Can not Throw Morality In The Garbage Just Because Life is Tough!", "Dreams Save Us. Dreams Lift Us Up And Transform Us.", "I Believe In Second Chances, I Believe In Redemption, But, Mostly, I Believe In My Friends.", "You Will Be Different, Sometimes You will Feel Like An Outcast, But You will Never Be Alone.", "It is About What You Do.It is About Action."];
    var len = quotes.length;
    var num = Math.floor(Math.random() * (len - 1 - 0 + 1)) + 0;
    document.getElementById('quote').innerText = quotes[num];
}   

function styleChange(box){
    if (box === "box-1"){
        document.getElementById('quotes-box').style.backgroundColor = 'aquamarine';
        document.getElementById('quotes-box').style.color = 'red';
        document.getElementById('quotes-box').style.border = 'red';
        document.getElementById('quotes-box').style.fontFamily = 'Arial';
        document.getElementById('quotes-box').style.fontSize = '15px';
    }

    else if (box === "box-2"){
        document.getElementById('quotes-box').style.backgroundColor = 'blue';
        document.getElementById('quotes-box').style.color = 'white';
        document.getElementById('quotes-box').style.border = 'white';
        document.getElementById('quotes-box').style.fontFamily = 'Georgia';
        document.getElementById('quotes-box').style.fontSize = '16px';
    }

    else if (box === "box-3"){
        document.getElementById('quotes-box').style.backgroundColor = 'blueviolet';
        document.getElementById('quotes-box').style.color = 'yellow';
        document.getElementById('quotes-box').style.border = 'yellow';
        document.getElementById('quotes-box').style.fontFamily = 'Impact';
        document.getElementById('quotes-box').style.fontSize = '17px';
    }

    else {
        document.getElementById('quotes-box').style.backgroundColor = 'aqua';
        document.getElementById('quotes-box').style.color = 'green';
        document.getElementById('quotes-box').style.border = 'green';
        document.getElementById('quotes-box').style.fontFamily = 'Trebuchet MS';
        document.getElementById('quotes-box').style.fontSize = '18px';
    }
}

function conversion(converter, unit){
    if (converter === "Pounds_to_KG"){
        var pound = unit;
        var kgs = pound / 2.20462;

        document.getElementById('output').innerText = kgs + " Kilograms";
    }
    else {
        var kg = unit;
        var pounds = kg * 2.20462;

        document.getElementById('output').innerText = pounds + " Pounds";
    }
}

function produce(){
    var values = document.getElementById('bar').value.split(/,/g);
    var sum = values.reduce(function(a, b){
        return parseInt(a) + parseInt(b);
    });
    document.querySelector('#max').innerHTML = values.max();
    document.querySelector('#min').innerHTML = values.min();
    document.querySelector('#sum').innerHTML = sum;
    document.querySelector('#avg').innerHTML = (sum / values.length).toFixed(15);
    document.querySelector('#reverse').innerHTML = values.reverse().join(",");
}

Array.prototype.max = function (){
    return Math.max.apply(null, this);
}

Array.prototype.min = function (){
    return Math.min.apply(null, this);
}

function del(){
    document.getElementById('magic').value = "";
};

function cap(){
    var text = document.getElementById('magic').value; 
    var newtext = text.split('\n');
    var array = [];
    for (var i = 0; i < newtext.length; i++){
        array.push(newtext[i].toUpperCase());
    }
    document.getElementById('magic').value = array.join('\n');
};

function sort(){
    var text = document.getElementById('magic').value; 
    var newtext = text.split('\n');
    var array = [];
    for (var i = 0; i < newtext.length; i++){
        array.push(newtext[i].toUpperCase());
    }
    array.sort();
    document.getElementById('magic').value = array.join('\n');
};

function reverse(){
    var text = document.getElementById('magic').value; 
    var newtext = text.split('\n');
    var array = [];
    for (var i = 0; i < newtext.length; i++){
        array.push(newtext[i].toUpperCase());
    }
    array.reverse();
    document.getElementById('magic').value = array.join('\n');
};

function strip(){
    var text = document.getElementById('magic').value; 
    var newtext = text.split('\n');
    var array = [];
    for (var i = 0; i < newtext.length; i++){
        var temp = newtext[i].trimStart();
        if (temp != ''){
            array.push(temp.trimEnd());
        }
    };
    document.getElementById('magic').value = array.join('\n');
};

function add(){
    var text = document.getElementById('magic').value; 
    var newtext = text.split('\n');
    var array = [];
    for (var i = 0; i < newtext.length; i++){
        array.push((i + 1) + ". " + newtext[i]);
    }
    document.getElementById('magic').value = array.join('\n');
};

function shuffle(){
    var text = document.getElementById('magic').value; 
    var newtext = text.split('\n');
    var array = [];
    for (var i = 0; i < newtext.length; i++){
        array.push(newtext[i].toUpperCase());
    }
    array.sort(function () {
        return Math.random() - 0.5;
      });
    document.getElementById('magic').value = array.join('\n');
};