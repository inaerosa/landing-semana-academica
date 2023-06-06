/* eslint-disable react/prop-types */
import './Cursos.css'

function ShowDescription(props) {

    return (
        <div className="curso-description">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
  )
}

export default ShowDescription;
