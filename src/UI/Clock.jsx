import React,{useState,useEffect} from 'react'



const Clock = () => {

  const [days,setDays]=useState();
  const [hours,setHours]=useState();
  const [miniutes,setMiniutes]=useState();
  const [seconds,setSeconds]=useState();

  let interval;

  const countDown=()=>{
  const  destination= new Date('Mar 23, 2023').getTime();

  interval =setInterval(()=> {

    const now= new Date().getTime()
    const different =destination-now;
    const days=Math.floor(different/(1000*60*60*24))
    const hour= Math.floor(different% (1000*60*60*24)/(1000*60*60))
    const minutes=Math.floor(different%(1000*60*60)/(1000*60))
    const seconds=Math.floor(different%(1000*60)/(1000))
    if(destination<0) clearInterval(interval.current)
    else{

      setDays(days);
      setHours(hour);
      setMiniutes(minutes);
      setSeconds(seconds);
    }

  })


  }
  useEffect(()=>{

    countDown();
  })

  return (
   <div className="clock_wrappr d-flex align-items-center gap-3">
     <div className="clock_data d-flex align-items-center gap-3">
      <div className='text-center'>
        <h1 className='text-white fs-1 mb-2'>{days}</h1>
        <h5 className='text-white fs-6'>Days</h5>
      </div>
      <span className='text-white fs-3'>:</span>
    </div>
    <div className="clock_data d-flex align-items-center gap-3">
      <div className='text-center'>
        <h1 className='text-white fs-1 mb-2'>{hours}</h1>
        <h5 className='text-white fs-6'>Hour</h5>
      </div>
      <span className='text-white fs-3'>:</span>
    </div>

    <div className="clock_data d-flex align-items-center gap-3">
      <div className='text-center'>
        <h1 className='text-white fs-1 mb-2'>{miniutes}</h1>
        <h5 className='text-white fs-6'>Miniute</h5>
      </div>
      <span className='text-white fs-3'>:</span>
    </div>
    <div className="clock_data d-flex align-items-center gap-3">
      <div className='text-center'>
        <h1 className='text-white fs-1 mb-2'>{seconds}</h1>
        <h5 className='text-white fs-6'>Seconds</h5>
      </div>
      
    </div>
   </div>
  )
}

export default Clock
