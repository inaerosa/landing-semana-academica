/* eslint-disable react/prop-types */
import './Card.css'

function Card(props) {

  return (
    <div id="Card">
      <div className="card-content">
        <div className="card-header">
          <h2>{props.title}</h2>
          <h3>{props.date}</h3>
          <h3>{props.sub}</h3>
        </div>
        <label>Nome
          <input type="text" name="nome" id="nome" placeholder="Seu nome"/></label>
          <label>CPF
            <input type="text" name="CPF" id="CPF" placeholder="Seu CPF"/></label>
        <label>E-mail
        <input type="text" name="email" id="email" placeholder="Seu email"/></label>
        <label>Escola ou instituição
        <input type="text" name="instituicao" id="instituicao" placeholder="Sua escola ou instituição"/></label>
      </div>
    </div>
  )
}

export default Card;
