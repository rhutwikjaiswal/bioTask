import React from 'react'
import './App.css';

const Details2 = () => {
  return (
    <>

            <div className="grid-container1">
                    <div className="grid-item"><span><p style={{color:'#6B6B6B'}}>Gender</p><p>Female</p><div className='underLine line1'></div></span></div>
                    <div className="grid-item"><span><p style={{color:'#6B6B6B'}}>Birthday</p><p>Feb 24th, 1997</p><div className='underLine line2'></div></span></div>
                    <div className="grid-item"><span><p style={{color:'#6B6B6B'}}>Phone Number</p><p>(239)555-0108</p><div className='underLine line3'></div></span></div>
                    <div className="grid-item"><span><p style={{color:'#6B6B6B'}}>Registered Date</p><p>Feb 24th, 1997</p><div className='underLine line4'></div></span></div>
                    <div className="grid-item"><span><p style={{color:'#6B6B6B'}}>Street Address</p><p>JL. Diponegoro No. 21</p><div className=' line5'></div></span></div>
                    <div className="grid-item"><span><p style={{color:'#6B6B6B'}}>City</p><p>Cilacap</p><div className=' line6'></div></span></div>
                    <div className="grid-item"><span><p style={{color:'#6B6B6B'}}>Zip Code</p><p>655849</p><div className=' line7'></div></span></div>
                    <div className="grid-item"><span><p style={{color:'#6B6B6B'}}>Member Status</p><p>Active Member</p><div className=' line8'></div></span></div>
  
            </div>
            <div className="files2">
                    <a className="appointment1" href="/"> 
                    <p className="checkup" style={{color:'#4469BA'}}>Upcomming Appointments</p></a>
                    <a className="appointment2" href="/">
                    <p className="checkup">Past Appointments</p></a>
                    <a className="record" href="/"><p className="checkup">Medical Records</p></a>
            </div>


            <div className="container2">
                <div className="treatmentName">
                    <p className='rootTreat'>Root Canal Treatment</p>  
                    <button className='showTreat'>Show Previous Treatments</button>
                </div>

                 <div className="rowLine"></div>

                 <div class="grid-container001">
                    <div class="grid-item1"><span><p className='textSize28'>26 Nov '19</p><p style={{color:'#6B6B6B'}} className='textSize15'>09.00-10.00</p><div className='columnLine1'></div></span></div>
                    <div class="grid-item1"><span><p style={{color:'#6B6B6B'}} className='textSize15' >Treatment</p><p className='textSize21' >Open Access</p><div className='columnLine2'></div></span></div>
                    <div class="grid-item1"><span><p  style={{color:'#6B6B6B'}} className='textSize15'>Dentist</p><p className='textSize21'>Drg. Adam H.</p></span></div>
                    <div class="grid-item1"><span><p  style={{color:'#6B6B6B'}} className='textSize15'>Nurse</p><p className='textSize21'>Jessicamila</p></span></div>
                    <div class="grid-item1"><a className="NoteimgA" href="/"><img className="noteImg" src="note 2.png" alt="img" /><p className="noteP">Note</p></a></div>
                    <div class="grid-item1"><span><p className='textSize28' >12 Nov '19</p><p style={{color:'#6B6B6B'}}  className='textSize15' >09.00-10.00</p><div className='columnLine3'></div></span></div>
                    <div class="grid-item1"><span><p style={{color:'#6B6B6B'}} className='textSize15' >Treatment</p><p className='textSize21' >Root Canal</p><div className='columnLine4'></div></span></div>
                    <div class="grid-item1"><span><p  style={{color:'#6B6B6B'}} className='textSize15'>Dentist</p><p className='textSize21'>Drg. Adam H.</p><div className=''></div></span></div>
                    <div class="grid-item1"><span><p  style={{color:'#6B6B6B'}} className='textSize15'>Nurse</p><p className='textSize21'>Jessicamila</p><div className=''></div></span></div>
                    <div class="grid-item1"><a className="NoteimgA" href="/"><img className="noteImg" src="note 2.png" alt="img" /><p className="noteP2">Note</p></a></div>

                </div>


            </div>

 </>
  )
}

export default Details2;
