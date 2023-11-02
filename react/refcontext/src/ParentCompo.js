import React from 'react'
import ChildCompo from './ChildCompo'
import ChildPopat from './ChildPopat'

function ParentCompo() 
{
  return (
    <div>
      Parent
      <ChildCompo/>
      <ChildPopat/>
    </div>
  )
}

export default ParentCompo