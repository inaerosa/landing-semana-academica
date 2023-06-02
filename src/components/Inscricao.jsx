import Card from './Card';
import './Inscricao.css'

function Inscricao() {

  return (
    <>
        <div id="Inscricao">
            <h1>Inscrições</h1>
            <form action="" method="post">
              <div className="form-content">
                <Card title="Informações Pessoais"/>
                <Card title="Primeiro dia" date="22/08 - Terça-feira" sub="das 19h15 às 22h30"/>
                <Card title="Segundo dia" date="23/08 - Quarta-feira" sub="das 19h15 às 22h30"/>
                <Card title="Terceiro dia" date="24/08 - Quinta-feira" sub="das 19h15 às 22h30"/>

              </div>
              <button type="submit">Inscrever-se</button>
            </form>
      
        </div>
    </>
  )
}

export default Inscricao;
