import { useEffect, useState } from "react";

function App() {

  const [ listaTarefas, setListaTarefas ] = useState( [] );
  const [ tarefa, setTarefa] = useState( { id: '' , texto: "" , status: "" } );

  function AddTarefa()
  {
    if( tarefa.texto !== "" ) {
    setListaTarefas([...listaTarefas, tarefa ]);
    }
  }

  function excluirTarefa( id ) 
  {
    const novalista = listaTarefas.filter( tarefa => tarefa.id !== id );
    setListaTarefas( novalista );
  }

  function statusTarefa( id, status )
  {
    const index = listaTarefas.findIndex( (tarefa) => tarefa.id === id );
    listaTarefas[index].status = !status;
    setListaTarefas( [...listaTarefas] );
  }

    useEffect( () => {
      setTarefa( { id: "" , texto: "" } );
    }, [ listaTarefas ] )

  return (
    <>
    <header>
      <h1>React DO</h1>
    </header>
      <div>
        <input type="text" name="tarefa" placeholder="Digite sua tarefa" value={tarefa.texto} onChange={ (e) => setTarefa( { id: Math.random(), texto: e.target.value, status: false } ) }/>
        <button onClick={AddTarefa}>Adicionar</button>
      </div>
      <div>
          <ul>
            {listaTarefas.map( (item, index ) => (
                <li key={index}>{item.texto} <button onClick={ () => statusTarefa(item.id, item.status)}>{item.status ? 'Concluida' : 'Não Concluida' }</button> <button onClick={ () => excluirTarefa(item.id)}>Excluir</button></li>
            ))}
          </ul>
      </div>
    </>
  );
}

export default App;
