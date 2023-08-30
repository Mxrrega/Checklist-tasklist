import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [listaTarefas, setListaTarefas] = useState([]);
  const [tarefa, setTarefa] = useState({ id: "", texto: "", status: "" });
  const [mostrarInput, setMostrarInput] = useState(false);
  const [mostrarExcluir, setMostrarExcluir] = useState(false);

  function AddTarefa() {
    if (tarefa.texto !== "") {
      setListaTarefas([...listaTarefas, tarefa]);
      setTarefa({ id: "", texto: "", status: "" });
    }
  }

  function excluirTarefa(id) {
    const novalista = listaTarefas.filter((tarefa) => tarefa.id !== id);
    setListaTarefas(novalista);
  }

  function handleToggleStatus(id) {
    const updatedTarefas = listaTarefas.map((tarefa) => tarefa.id === id ? { ...tarefa, status: !tarefa.status } : tarefa);
    setListaTarefas(updatedTarefas);
  }

  useEffect(() => {
    setTarefa({ id: "", texto: "", status: "" });
  }, [listaTarefas]);

  return (
    <>
      <header className="header">
          <h1>Lista De Tarefas</h1>
        </header>
      <div className="container">
        <div className="box">
          <div className="titulo">
            <h1>Eventos</h1>
            <button className="botao-adicionar-tarefa"onClick={() => setMostrarInput(!mostrarInput)}><i class="fa-solid fa-plus"></i></button>
          </div>
          <div className="linha"></div>
          <div>
            {mostrarInput && (
              <div>
                <input className="input" type="text" name="tarefa" placeholder="Digite sua tarefa" value={tarefa.texto} onChange={(e) => setTarefa({ id: Math.random() , texto: e.target.value, status: false, })}/>
                <button className="adicionar-tarefa" onClick={AddTarefa}>Adicionar</button>
              </div>
            )}
          </div>
          <div>
            <ul>
              {listaTarefas.map((item, index) => (
                <li className={item.status ? "item-ativo" : "item-inativo"} key={index}><input type="checkbox" checked={item.status} onChange={() => handleToggleStatus(item.id)}/>{item.texto}<div className="div-check">{item.status && <i className="fa-solid fa-check" style={{ color: "#008000" }}></i>}{" "}</div>
                 {mostrarExcluir && (
                    <button className="excluir-button" onClick={() => excluirTarefa(item.id)}><i class="fa-solid fa-xmark"></i></button>
                  )}
                </li>
              ))}
            </ul>
            <div className="div-botao-modo-excluir">
                <button className="botao-modo-excluir" onClick={() => setMostrarExcluir(!mostrarExcluir)}><i class="fa-solid fa-trash"></i></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
