///////////////////////////
//       Players 
//////////////////////////
players = []

function num_players(){
    let n = document.getElementById('numofplayers')
    nums = n.value
    // listofplayers.append(input)
    for (i = 0; i < nums; i++) {
        var input = document.createElement('input')
        var listofplayers = document.querySelector('.list-players')
        input.setAttribute("placeholder", "player"+(i+1))
        input.setAttribute("id","player"+(i+1))
        listofplayers.appendChild(input)
    }

    let start = document.querySelector('.start-btn')
    start.style.display = 'block'


}
//event after choosing number of players
const btn = document.querySelector('.btn').addEventListener('click', num_players)

function append_players(){
    let n = document.getElementById('numofplayers')
    nums = n.value
    
    var ul = document.querySelector(".list-players");
    var player = ul.getElementsByTagName("input");

    for (var i = 0; i < nums; i++) {
        players.append(player[i])
      // do something with items[i], which is a <li> element
    }
    

}


//appending players to the list
const start = document.querySelector('.start-btn')
start.addEventListener('click', append_players())

