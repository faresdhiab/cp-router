import { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';


function AddMovie({add}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //init state
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [rate, setRate] = useState("")
  const [posterUrl, setPosterUrl] = useState("")

  //Update state
  const handleTitle =(e)=>{
    setTitle(e.target.value)
  };
  const handleDescription =(e)=>{
    setDescription(e.target.value)
  };
  const handleRate =(e)=>{
    setRate(e.target.value)
  };
  const handlePosterUrl =(e)=>{
    setPosterUrl(e.target.value)
  };
  const handleMovie = (e)=>{
    let newMovie={title, description, rate, posterUrl};
add(newMovie);
handleClose();

  };
  return (
    <>
    <Button variant="primary" onClick={handleShow}>
      Add Movie
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form.Label>Movie Title</Form.Label>
      <Form.Control type="text" placeholder="Enter movie title" value={title} onChange={(event)=>handleTitle(event)} />
      <Form.Label>Movie description</Form.Label>
      <Form.Control type="text" placeholder="Enter movie description" value={title} onChange={(event)=>handleDescription(event)} />
      <Form.Label>Movie rate</Form.Label>
      <Form.Control type="number" placeholder="Enter movie rate" value={title} onChange={(event)=>handleRate(event)}/>
      <Form.Label>Movie poster</Form.Label>
      <Form.Control type="url" placeholder="Enter movie poster" value={title} onChange={(event)=>handlePosterUrl(event)}/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={()=>handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={()=>handleMovie}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </>

  )
}

export default AddMovie