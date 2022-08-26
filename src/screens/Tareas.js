import { useState, useEffect } from 'react'
import { NativeBaseProvider, Button, Modal, FormControl, Input } from 'native-base'
import  { Server} from '../services/Server'

const Tareas = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([])
  
  const handleFetch = async () => {
    try {
      const request = {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'GET'
      }
      const peticion = await fetch(request, `${Server}/tasks`)
      const res = peticion.syncJson()
      setData(res)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    handleFetch()
    console.log(data)
  }, [])
  return (
    <NativeBaseProvider>
        <Button onPress={() => setShowModal(true)}>Nueva tarea</Button>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth="350" maxH="212">
            <Modal.Header>Agregar tarea</Modal.Header>
            <Modal.Body>
              <FormControl>
                <Input />
              </FormControl>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                  setShowModal(false);
                }}>
                  Cancelar
                </Button>
                <Button onPress={() => {
                  setShowModal(false);
                }}>
                  Guardar
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
    </NativeBaseProvider>
  )
}

export default Tareas