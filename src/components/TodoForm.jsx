import {useState} from 'react'

const TodoForm = ({addTodo}) => {

  const[value, setValue] = useState("");
  const[category, setCategory] = useState("");


  const handdleSubmit = (e) => {
    e.preventDefault()
    //verificaçao
    if(!value ||!category) return;
    console.log(value, category)
    addTodo(value, category)
    setValue("")
    setCategory("")
  }

  return (
    <div className='todo-form'>
        <h2>Criar Tarefa</h2>
        <form onSubmit={handdleSubmit}>
            <input value={value} type="text" placeholder='Digite o Titulo' onChange={(e) => setValue(e.target.value)}/>
            <select value={category} onChange={(e)=> setCategory(e.target.value)}>
                <option value="">Selecione uma Categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudo">Estudo</option>
                
            </select>
            
            <button type="submit">Criar Tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm