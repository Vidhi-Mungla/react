import React, { useContext } from 'react';

import { strVal } from './UseContext';
import { arrVal } from './UseContext';

function ChildPopat() {

    const data = useContext(strVal);
    const data1 = useContext(arrVal)

  return (
    <div>

        Child Popat
        
        <h1>{data + " " + data1.name} </h1>
      
    </div>
  )
}

export default ChildPopat
