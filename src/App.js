function App() {

    // handleClick event handler
    const handleClick = () => { 
    // Assign a random number integer between 1 and 3 included to randomNum.  
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt('type a number'); 
    if (randomNum == userInput) { 
      alert("Congrats, good guess!") }
    else ( 
      alert(`Computer number: ${randomNum}, Your guess: ${userInput}`));
  }

  return (
    <div>
        <h1>Task: Add a button and handle a click event</h1>
      {/* Add a React onClick event */}
      <button onClick={handleClick}>
        Guess the number between 1 and 3.   
      </button>
    </div>
  );
}

export default App;
