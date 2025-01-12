import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets_frontend/assets'
import RelatedEngr from '../components/RelatedEngr'

const Appointment = () => {

  const {engrId} = useParams()
  const {engineers, currencySymbol} = useContext(AppContext)
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT']

  const [engrInfo, setEngrInfo]= useState(null)
  const [engrSlots, setEngrSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  const fetchEngrInfo = async () => {
    const engrInfo = engineers.find(engr => engr._id === engrId)
    setEngrInfo(engrInfo)
    
  }

  const getAvailableSlots  = async () => {
    //  first clear previous slots
    setEngrSlots([])

    // getting current date
    let today = new Date()

    for(let i=0; i<7; i++){
      // getting date with index
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate()+i)

      // setting end time of the date with index
      let endTime = new Date()
      endTime.setDate(today.getDate()+i)
      endTime.setHours(21,0,0,0)

      // setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      } else {
        // if date isnt today (future date)
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []

      while(currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12:true})
        
        // add slot to array
        timeSlots.push({
          dateTime: new Date(currentDate),
          time: formattedTime
        })

        // increment current time by 30min
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }
      setEngrSlots(prev => ([...prev, timeSlots]))
    }
  }

  useEffect(()=>{
    fetchEngrInfo()
  },[engineers, engrId])

  useEffect(()=>{
    getAvailableSlots()
  },[engrInfo])

  useEffect(()=>{
    console.log(engrSlots);
    
  },[engrSlots])

  return engrInfo && (
    <div>
      {/* engineer details */}
      <div className='flex flex-col sm:flex-row gap-4 text-white'>
        <div className=' w-full sm:max-w-72 '>
          <img className='bg-orange-200 rounded-lg w-full sm:max-w-72 h-full object-cover' src={engrInfo.image} alt="" />
        </div>

        <div className='flex-1 border border-orange-500 rounded-lg p-8 py-7 mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          {/* engr info */}
          <p className='flex items-center gap-2 text-2xl font-medium '>
            {engrInfo.name}
            <img className='w-5' src={assets.verified_icon} alt="" />
          </p> 
          <div className='flex items-center gap-2 text-sm mt-1 text-orange-500'>
            <p>{engrInfo.degree} - {engrInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full '>{engrInfo.experience}</button>
          </div>

          {/* engr about */}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium mt-3'>
              About 
              <img src={assets.info_icon} alt="" />
            </p>
            <p className='text-sm text-gray-100 max-w-[700px] mt-1'>{engrInfo.about}</p>
          </div>
          <p className='text-gray-100 font-medium mt-4'>
            Charges: <span className='text-orange-500'>{currencySymbol}{engrInfo.fees}</span>
          </p>
        </div>
      </div>

      {/* BOOTKING SLOTS */}
      <div className='sm:ml-72 sm:pl-4 font-medium text-white'>
        <p>Booking Slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            engrSlots.length && engrSlots.map((item,index)=>(
              <div onClick={()=> setSlotIndex(index)} className={`flex flex-col justify-center text-center overflow-hidden mx-3 py-4 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-orange-200 text-orange-500 !important' : 'border border-orange-200'}`} key={index}>
                <p className='inline-block bg-inherit'>{item[0] && daysOfWeek[item[0].dateTime.getDay()]}</p>
                <p className='inline-block bg-inherit'>{item[0] && item[0].dateTime.getDate()}</p>
              </div>
            ))
          }
        </div>

        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4 '>
          {
            engrSlots.length && engrSlots[slotIndex].map((item,index)=>(
              <p onClick={()=>setSlotTime(item.time)} key={index} className={`text-sm font-light flex-shrink-0 px-3 py-2 mx-3 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-orange-200 text-orange-500' : 'text-gray-300 border border-orange-200'}`}>
                {item.time.toLowerCase()}
              </p>
            ))
          }
        </div>
        <button className='bg-orange-500 text-white text-sm font-light px-14 py-3 rounded-full my-6'>Schedule an Appointment</button>
      </div>
       
       {/* related engineers */}
       <RelatedEngr engrId={engrId} speciality={engrInfo.speciality}/>
    </div>
  )
}

export default Appointment