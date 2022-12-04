import "./css/App.css";
import "./components/Square";
import Square from "./components/Square";

function App() {
  const renderSquares = () => {
    let squares = [];
    for (let index = 0; index < 100; index++) {
      squares.push(<Square key={index} />);
    }
    return squares;
  };

  return <div className='App'>{renderSquares()}</div>;
}

export default App;
