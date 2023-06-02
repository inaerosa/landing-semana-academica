import './MesaRedonda.css'
import MesaRedondaImage from './../assets/mesa-redonda.png'

function MesaRedonda() {

  return (
    <>
        <div id="MesaRedonda">
        <h1>Mesa Redonda</h1>
            <div className="mesa-redonda-content">
                <img src={MesaRedondaImage} alt=""  />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium architecto illo provident, dolorum, sapiente sint, veritatis quidem odit expedita porro assumenda cupiditate! Doloremque, tempora odio eius hic suscipit rerum facere.</p>
            </div>
          
        </div>
    </>
  )
}

export default MesaRedonda;
