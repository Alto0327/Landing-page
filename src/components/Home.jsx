import backpack from '../assets/backpack.png'
import amazon from '../assets/amazon.png'
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
      <div className="main-btn">
        <button>Shop Now</button>
        <button className="second-btn">Add to Cart</button>
      </div>
      <div className='amazon-container'>

      <p>Available on</p>
        <img src={amazon} alt="amazon" className='amazon'/>
        </div>
      </div>

      <div className="main-img-container">
        <img src={backpack} alt="" className='bigimg'/>
      </div>
    </main>
  );
}

export default Main;
