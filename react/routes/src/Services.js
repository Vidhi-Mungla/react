import React, { useState } from 'react';

function Services() 
{
  const [openServices, setOpenServices] = useState([]);

  const toggleService = (service) => {
    if (openServices.includes(service)) 
    {
      setOpenServices(openServices.filter((s) => s !== service));
    } 
    else 
    {
      setOpenServices([...openServices, service]);
    }
  };

  return (
    <>
      <div>

        <p onClick={() => toggleService('p')}>THIS IS SERVICE PAGE</p>
      
        {openServices.includes('p') && <div> Service 1 </div>}
        {openServices.includes('p') && <div> Service 2 </div>}
        {openServices.includes('p') && <div> Service 3 </div>}

      </div>
    </>
  );
}

export default Services;
