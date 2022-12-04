import '../css/square.css';

import { useEffect, useState } from 'react';
import { getColor } from "../axios/color";

const Square = () => {
  const [color, setColor] = useState();
  useEffect(() => {
    const setInitialState = async () => {
      const c = await getColor();
      setColor(c);
    }
    setInitialState();
  }, []);

  useEffect(() => {
    const interval = setInterval(async () => {
      const c = await getColor();
      setColor(c);
    }, randomTimeInterval());
    return () => clearInterval(interval);
  }, [color]);

  const randomTimeInterval = () => {
    return Math.floor(Math.random() * (5000 - 1000 + 1) + 1000);
  }
  return ( 
    <div className={"square"} style={{ "backgroundColor": color} }>
    </div>
   );
}
 
export default Square;