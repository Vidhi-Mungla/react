import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function EmpListing() {
    const [empdata,setempdata] = useState("");
    
    const [show, setShow] = useState(false);
    const [name,setname]=useState();
    const [email,setemail]=useState();

    const[editingid,seteditingid]=useState();
    const[editingname,seteditingname]=useState();
    const[editingemail,seteditingemail]=useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{return res.json()})
        .then((data)=>{setempdata(data)})
        .catch((err)=>{console.log(err.message)})
    },[])

   
    const saveUser = () => {
      const updateUser = empdata.map((el) =>
        el.id === editingid ? { ...el, name: editingname, email: editingemail } : el
      );
    
      fetch(`https://jsonplaceholder.typicode.com/users/${editingid}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: editingname, email: editingemail }),
      })
        .then((res) => {
           res.json();
        })
        .then(() => {
          setempdata(updateUser);
          setLgShow(false);
          alert("Data saved successfully....!");
        })
    };
    
    const handleSubmit = () => {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: name, email: email })
        })
            .then((res) => res.json())
            .then((data) => setempdata([...empdata, {
              id:empdata.length+1,
              name:name,
              email:email
            }]))
            .catch((err) => console.log(err.message));
        handleClose();
        setname("");
        setemail("");
    };
   const Loaddelete = (id)=>{
    fetch(`https://jsonplaceholder.typicode.com/users${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        }).then((res)=>alert("deleted successfully...!"))
        .then((data)=>setempdata((data)=>empdata.filter((el)=>el.id!==id)))
   }

   const [lgShow, setLgShow] = useState(false);

    const loadEdit = (id,text,email)=>{
        seteditingid(id);
        seteditingemail(email);
        seteditingname(text);
        setLgShow(true)
    }

  return (
    <>  
    <div className='container'>
       <h2>Search : </h2> <input></input>
        <h1 className='mt-3'>Employee-Listing</h1>

        <Button variant="primary mt-3 my-3" onClick={handleShow}>
        Add Users
      </Button>
      <table className='table'>
        <thead className='table-dark'>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ACTION</th>
            </tr>
        </thead>
        <tbody>
            {
                empdata && empdata.map((item)=>(
                    <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                    <Button onClick={() =>loadEdit(item.id,item.name,item.email)} className="bg-success me-3">
                          Edit
                    </Button>


                         
                        <button onClick={()=>Loaddelete(item.id)} className='btn btn-danger me-3'>DELETE</button>
                    </td>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="name@example.com"
                autoFocus
                value={name}
                onChange={(e)=>setname(e.target.value)}
              />
              <Form.Label>Email </Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                value={email}
                onChange={(e)=>setemail(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
             
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
           Submit
          </Button>
        </Modal.Footer>
      </Modal>                             
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
           Edit User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>


        <Form.Label>id</Form.Label>
              <Form.Control
                type="text"
                disabled
                autoFocus
                value={editingid}
              />
               <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                value={editingname}
                onChange={(e)=>seteditingname(e.target.value)}
              />
                 <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                value={editingemail}
                onChange={(e)=>seteditingemail(e.target.value)}
              />
              
              <Modal.Footer>
        
          <Button variant="primary" onClick={saveUser}>
           Save
          </Button>
        </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default EmpListing