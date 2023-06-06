/* eslint-disable react/prop-types */
import './Card.css'
import FirstDayContent from './FirstDayContent';
import SecondDayContent from './SecondDayContent';
import ThirdDayContent from './ThirdDayContent';

function checkContent(props) {    
  if(props.content === 'first-day') {
    return FirstDayContent()
  } else if(props.content === 'second-day'){
    return SecondDayContent()
  } else if(props.content === 'three-day'){
    return ThirdDayContent();
  } else {
    return showInfo();
  }
}


function showInfo() {
  return <div id="info">
        <label>Nome</label><input type="text" name="nome" id="nome" placeholder="Seu nome"/>
        <label>CPF</label><input type="text" name="CPF" id="CPF" placeholder="Seu CPF"/> 
        <label>E-mail</label><input type="text" name="email" id="email" placeholder="Seu email"/>
        <label>Escola ou instituição</label><input type="text" name="instituicao" id="instituicao" placeholder="Sua escola ou instituição"/>
  </div>
}

const Card = (props) => {
  return(
    <div id="Card">
      <div className="card-content">
        <div className="card-header">
          <h2>{props.title}</h2>
          <h3>{props.date}</h3>
          <h3>{props.sub}</h3>
        </div>    
        {checkContent(props)}
      </div>
    </div>
  )
}

export default Card;
