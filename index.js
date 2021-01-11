var body = document.body;
var table = document.querySelector('.table');
var lines = [];
var blocks = [];
var turn = "X";
var count = 0;

function gameEnd(){
    count = 0;
    turn = "X";
    blocks.forEach(function(line){
        line.forEach(function(block){
            block.textContent = '';
        })
    })
} 


function game(e){    
    var lineOrder = lines.indexOf(e.target.parentNode);
    var BOrder = blocks[lineOrder].indexOf(e.target);
    var victory = false;
 
   
    if(e.target.textContent === ''){
        console.log("빈칸");
        count++
        e.target.textContent = turn;
         //가로줄
         if(blocks[lineOrder][0].textContent === turn && 
            blocks[lineOrder][1].textContent === turn && 
            blocks[lineOrder][2].textContent === turn){
                victory = true;
        }
        //세로줄
        if(blocks[0][BOrder].textContent === turn && 
            blocks[1][BOrder].textContent === turn && 
            blocks[2][BOrder].textContent === turn ){
                victory = true;
        }
        //대각선줄1
        if(lineOrder - BOrder === 0 ){
            if (blocks[0][0].textContent === turn && 
                blocks[1][1].textContent === turn && 
                blocks[2][2].textContent === turn){
                victory = true;
            }
        }
            
        //대각선줄2
        if(Math.abs(lineOrder - BOrder) === 2){
            if(blocks[0][2].textContent === turn && 
                blocks[1][1].textContent === turn && 
                blocks[2][0].textContent === turn ){
                victory = true;
            }
         }
        if(victory){
            console.log(turn + "님이 승리");
            setTimeout(gameEnd,1000);

        }

        
        
        else{
            if(count >= 9){
        
                console.log("gameover");
                setTimeout(gameEnd,1000)
                }
            if(turn === "X"){
           
                turn = "O"
            }else{
                turn = "X";

        }
        

        }

        


    }else {
        console.log("빈칸아님")
    }
    console.log(lines);
/*     lines.forEach(function(line){
        line.forEach(function(block){
            if(block.textContent !== ''){
                count++
                console.log(count)
                
            }
            
        })
    })
 */

}

for(i=0; i<=2; i++){
    var line = document.createElement('tr');
    lines.push(line);
    blocks.push([]);
    for(j=0; j<=2; j++ ){
        var block = document.createElement('td');
        block.classList.add('block')
        block.addEventListener('click',game);
        blocks[i].push(block);
        line.appendChild(block);
    }
    //1번 완료되면 완전한 줄1개가 만들어짐
    table.appendChild(line);
   //lines와 blocks은 배열이고 line과 block은 실제 태그(화면)임
}
