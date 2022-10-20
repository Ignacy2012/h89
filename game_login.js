var player1_name = "";
var player2_name = "";

function add(){
    player1_name = document.getElementById("user1").value;
    localStorage.setItem("player1_name", player1_name);

    player2_name = document.getElementById("user2").value;
    localStorage.setItem("player2_name", player2_name);

    window.location ="game_page.html";
}