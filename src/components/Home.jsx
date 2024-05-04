import backpack from '../../public/images/backpack.png'
import './component.css'

function Main() {
  return (
    <main className="landing container">
      <div className="main-text">

      <h1>YOUR EVERYDAY ESSENTIALS DESERVE THE BEST.</h1>
      <p>
        PRESENTING YOU THE MOST AMAZING AND LUXURIOUS BACKPACKS THAT CAN BE USED
        FOR SCHOOL,COLLEGES,UNIVERSITIES BUSINESS TRIPS OR JUST A SIMPLE PICNIC.
      </p>
      <button className='main-btn'>Shop Now</button>

      </div>
      <div className="main-img-container">
        <img src={backpack} alt="" className='main-img'/>
      </div>
    </main>
  );
}

export default Main;
