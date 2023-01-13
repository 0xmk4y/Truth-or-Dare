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
        input.setAttribute("class","players")
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

    player = document.querySelectorAll('.players')
    console.log(player)

    // for (var i = 0; i < 5; i++) {
    //   console.log(player[i])
    // }


}


//appending players to the list
const start = document.querySelector('.start-btn')
start.addEventListener('click', append_players())




