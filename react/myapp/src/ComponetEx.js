import ClassCompo from "./ClassCompo";

export default function Priya()
{
    return(
       <>
         <h1>Hello Functional Component</h1>
         <Vidhi/>
         <ClassCompo/>
        
       </>
    )
}

function Vidhi()
{
    const x=2;
    const y=20;


    return(
        <>
            <h1 style={{color:"blue"}}>Vidhi</h1>
           <h2 style={{color:"red"}}> Sum = 
           {
            // "sum"+ (x+y)
            x+y

           
           }
           </h2>
        </>
    )
}

// export default Priya;
// export default Vidhi;