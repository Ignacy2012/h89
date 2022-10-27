var player1_name = "";
var player2_name = "";
var player1_score = 0;
var player2_score = 0;

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

player1_name = localStorage.getItem("player1_name");
document.getElementById("player1_name").innerHTML=player1_name + " : ";

player2_name = localStorage.getItem("player2_name");
document.getElementById("player2_name").innerHTML=player2_name + " : ";

document.getElementById("question").innerHTML="Question turn : " + player1_name;
document.getElementById("answer").innerHTML="Answer turn : " + player2_name;

function send(){
number1 = document.getElementById("num1").value;
number2 = document.getElementById("num2").value;
actual_answer = parseInt(number1) * parseInt(number2);

question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_number + input_box + check_button;

document.getElementById("output").innerHTML = row;
document.getElementById("num1").value = "";
document.getElementById("num2").value = "";
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";
}



question_turn = "player_2";
answer_turn = "player_1";

function check(){
    get_answer = document.getElementById("input_check_box").value;

    if(get_answer == actual_answer){
        if(answer_turn == "player_1"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if(question_turn == "player_1"){
        question_turn = "player_2";
        document.getElementById("question").innerHTML="Question turn : " + player2_name;
    }
    else{
        question_turn = "player_1";
        document.getElementById("question").innerHTML="Question turn : " + player1_name;
    }


if(answer_turn == "player_1"){
    answer_turn = "player_2";
    document.getElementById("answer").innerHTML="Answer turn : " + player2_name;
}
else{
    answer_turn = "player_1";
    document.getElementById("answer").innerHTML="Answer turn : " + player1_name;
}
document.getElementById("output").innerHTML="";
    

}
