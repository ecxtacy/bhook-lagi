
import { useEffect, useState } from "react";


export default function AutoHeading(props) {

  if (!props.speed || !props.text || !props.wait_time) {
    throw new Error('Please add props to your Auto Heading')
  }

  const HEADING_TEXT = props.text;
  
  // speed between 1 and 5000
  const SPEED = props.speed;
  const WAIT_TIME = props.wait_time;

  const [headingIndex, setHeadingIndex] = useState(8);

  useEffect(() => {
    
    let currIndex = 1;

    const intv_id = setInterval(() => {
      currIndex++;
      setHeadingIndex(currIndex);
      
      if (currIndex === HEADING_TEXT.length + (WAIT_TIME*SPEED/5000)) {
        currIndex = 1;
        setHeadingIndex(currIndex);
      };

    }, (5000/SPEED));
    

    // when demount
    return () => clearInterval(intv_id);

  }, [HEADING_TEXT.length, SPEED, WAIT_TIME]);

  return (
    <div className=" mx-6 max-w-[30rem] text-3xl md:max-w-[40rem] md:ml-12 md:text-4xl lg:ml-24 lg:text-5xl lg:max-w-[55rem] break-normal text-slate-50 font-extrabold">{ HEADING_TEXT.slice(0, headingIndex) }</div>
  )
}
