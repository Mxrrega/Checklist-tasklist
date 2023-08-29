import { useEffect, useState } from "react";

function App() {

  const [ listaTarefas, setListaTarefas ] = useState( [] );
  const [ tarefa, setTarefa] = useState( { id: '' , texto: "" } );

  function AddTarefa()
  {
    if( tarefa.texto !== "" ) {
    setListaTarefas([...listaTarefas, tarefa ]);
    }
  }

  function excluirtarefa( id ) 
  {
    const novalista = listaTarefas.filter( tarefa => tarefa.id !== id );
    setListaTarefas( novalista );
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
        <input type="text" name="tarefa" placeholder="Digite sua tarefa" value={tarefa.texto} onChange={ (e) => setTarefa( { id: Math.random(), texto: e.target.value } ) }/>
        <button onClick={AddTarefa}>Adicionar</button>
      </div>
      <div>
          <ul>
            {listaTarefas.map( (item, index ) => (
                <li key={index}>{item.texto}<button onClick={ () => excluirtarefa(item.id)}>Excluir</button></li>
            ))}
          </ul>
      </div>
    </>
  );
}

export default App;
