import React from 'react'

export default function Tempo({tempo}) {
  return (
    <div>
      <h2>{tempo.name}</h2>
      <p>{tempo.temperatura}</p>
      <p>{tempo.description}</p>
      <img src={tempo.icon}/>
    </div>
  )
}
