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
      <div className="main-btn">
        <button>Shop Now</button>
        <button className="second-btn">Add to Cart</button>
      </div>

      </div>
      <div className="main-img-container">
        <img src={backpack} alt="" className='bigimg'/>
      </div>
    </main>
  );
}

export default Main;
