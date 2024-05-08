import React from 'react'

const Teste = ({itens}:any) => {
  return (
    <div>
      {
        itens.map((element:any)=>(<h1>
          {element.description}
        </h1>))
      }
      
      </div>
  )
}

export default Teste