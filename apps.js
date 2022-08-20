const playGame = (opt) => {
    const imgList = ['rockhand.png','paperhand.png','scissorsHand.png'];
    const optArry = ['rock','paper','scissors'];
    let computerChoice = Math.floor(Math.random() * 3);
    // Image selected by player 
    switch (opt) {
        case 'rock':
            document.getElementById('player').innerHTML = `<img src= image/${imgList[0]} alt="rock">`;
            break;
        case 'paper':
            document.getElementById('player').innerHTML = `<img src= image/${imgList[1]} alt="paper">`;
            break;
        case 'scissors':
            document.getElementById('player').innerHTML = `<img src= image/${imgList[2]} alt="scissors">`;
            break;
        default:
           break;    
    }
    // Image selected by computer
    switch (optArry[computerChoice]) {
        case 'rock':
            document.getElementById('computer').innerHTML = `<img src= image/${imgList[0]} alt="rock">`;
            break;
        case 'paper':
            document.getElementById('computer').innerHTML = `<img src= image/${imgList[1]} alt="paper">`;
            break;
        case 'scissors':
            document.getElementById('computer').innerHTML = `<img src= image/${imgList[2]} alt="scissors">`;
            break;
        default:
           break;    
    }
    // Display the result
    switch (opt) {  
        case 'rock':
            if (optArry[computerChoice] === 'rock') {
                document.getElementById('result').innerHTML = 'Draw';
            } else if (optArry[computerChoice] === 'paper') {
                document.getElementById('result').innerHTML = 'Computer Wins!';
            } else if (optArry[computerChoice] === 'scissors') {
                document.getElementById('result').innerHTML = 'You Won!';
            } else {
                document.getElementById('result').innerHTML = 'Invalid option';              
            }
            break;

        case 'paper':
            if (optArry[computerChoice] === 'rock') {
                document.getElementById('result').innerHTML = 'You Won!';
            } else if (optArry[computerChoice] === 'paper') {
                document.getElementById('result').innerHTML = 'Draw';
            } else if (optArry[computerChoice] === 'scissors') {
                document.getElementById('result').innerHTML = 'Computer Wins!';
            } else {
                document.getElementById('result').innerHTML = 'Invalid option';
            }
            break;

        case 'scissors':
            if (optArry[computerChoice] === 'rock') {
                document.getElementById('result').innerHTML = 'Computer Wins!';
            } else if (optArry[computerChoice] === 'paper') {     
                document.getElementById('result').innerHTML = 'You Won!';                
            } else {
                document.getElementById('result').innerHTML = 'Draw';            
            }
            break;

        default:
            document.getElementById('result').innerHTML = 'Invalid option';           
            break;
    }
};