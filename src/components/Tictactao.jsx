import React from "react";

export const Tictactao = () => {
  const [turn, setturn] = React.useState("x");
  const [move, setmove] = React.useState(0);
  const [win, setwin] = React.useState("");
  const [cells, setcells] = React.useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  // console.log(cells);

  const calculateWinner = () => {
    //Horizontal 
    if (cells[0][0] === "x" && cells[0][1] === "x" && cells[0][2] === "x") {
      setwin("X is winner");
    }else
    if (cells[1][0] === "x" && cells[1][1] === "x" && cells[1][2] === "x") {
      setwin("X is winner");
    }else
    if (cells[2][0] === "x" && cells[2][1] === "x" && cells[2][2] === "x") {
      setwin("X is winner");
    }else

    //Vertical
    if (cells[0][0] === "x" && cells[1][0] === "x" && cells[2][0] === "x") {
      setwin("X is winner");
    }else
    if (cells[0][1] === "x" && cells[1][1] === "x" && cells[2][1] === "x") {
      setwin("X is winner");
    }else
    if (cells[0][2] === "x" && cells[1][2] === "x" && cells[2][2] === "x") {
      setwin("X is winner");
    }else


    // Digonal
    if (cells[0][0] === "x" && cells[1][1] === "x" && cells[2][2] === "x") {
      setwin("X is winner");
    }else
    if (cells[2][0] === "x" && cells[1][1] === "x" && cells[0][2] === "x") {
      setwin("X is winner");
    }else




    //Horizontal 
    if (cells[0][0] === "o" && cells[0][1] === "o" && cells[0][2] === "o") {
      setwin("O is winner");
    }else
    if (cells[1][0] === "o" && cells[1][1] === "o" && cells[1][2] === "o") {
      setwin("O is winner");
    }else
    if (cells[2][0] === "o" && cells[2][1] === "o" && cells[2][2] === "o") {
      setwin("O is winner");
    }else

    //Vertical
    if (cells[0][0] === "o" && cells[1][0] === "o" && cells[2][0] === "o") {
      setwin("O is winner");
    }else
    if (cells[0][1] === "o" && cells[1][1] === "o" && cells[2][1] === "o") {
      setwin("O is winner");
    }else
    if (cells[0][2] === "o" && cells[1][2] === "o" && cells[2][2] === "o") {
      setwin("O is winner");
    }else


    // Digonal
    if (cells[0][0] === "o" && cells[1][1] === "o" && cells[2][2] === "o") {
      setwin("O is winner");
    }else
    if (cells[2][0] === "o" && cells[1][1] === "o" && cells[0][2] === "o") {
      setwin("O is winner");
    }else
    if(win==="" && move === 8){
      setwin("Draw");
    }
    setmove(move+1)
    


    
  };

  const handleclick = (num) => {
    // console.log(num);
    if (cells[num[0]][num[1]] !== "") {
      alert("Already Clicked");
      return;
    }
    if (turn === "x") {
      cells[num[0]][num[1]] = "x";
      setturn("o");
    } else {
      cells[num[0]][num[1]] = "o";
      setturn("x");
    }
    setcells(cells);
    // console.log(cells);
    
    calculateWinner();
  };

  const Cell = ({ num }) => {
    // console.log(num);
  
    return (
      <td className={turn==='x' ? 'plear1':'plear2'}
        onClick={() => {if(win===""){
          handleclick(num);
        }}}
      >
        {cells[num[0]][num[1]]}
      </td>
    );
  };
  return (
    <div>
      <div className="gamestatus">
        <div className={win==='X is winner'? 'winp1': ''}></div>
        <div className={win==='O is winner'? 'winp2': ''}></div>
        <div className={win==='Draw'? 'draw': ''}></div>

      </div>
        <div className="plears">
          <div className={turn==='x' ? 'pt1' : 'p1'}><p>PLAYER: 1</p></div>
          <div className={turn==='o' ? 'pt2' : 'p2'}><p>PLAYER: 2</p></div>
        </div>
        <div className="trurnicon">{turn}</div>
    <table>
      <tbody>
        <tr>
          <Cell num={[0, 0]} />
          <Cell num={[0, 1]} />
          <Cell num={[0, 2]} />
        </tr>
        <tr>
          <Cell num={[1, 0]} />
          <Cell num={[1, 1]} />
          <Cell num={[1, 2]} />
        </tr>
        <tr>
          <Cell num={[2, 0]} />
          <Cell num={[2, 1]} />
          <Cell num={[2, 2]} />
        </tr>
      </tbody>
      </table>
      <div className="winner">
      <h3>{win}</h3>
      </div>
      <div className="restart">
      <button onClick={()=>{setwin("")
        
        setmove(0)
        setturn("x")
        setcells([
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ])
      }}>RESTART</button>
      </div>
      </div>
  );
};
