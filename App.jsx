import { useEffect, useState } from 'react'
import { Card } from './components/Card'
import { ImageSearch } from './components/ImageSearch.jsx'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';


function App () {
  
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState('')
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [name, setName] = useState('')
  const [user_name, setUserName] = useState('')
  const [webformatURL, setWebformatURL] = useState('')

const handleSubmit = (event) => {
  event.preventDefault();
  addImage({ name, user_name, webformatURL });
};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/images');
        const data = await response.json();
        setImages(data);
        setIsLoading(false);
        console.log('Response from API:', data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchData();
  }, [term]);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const addImage = async (image) => {
    try {
      const response = await fetch('http://localhost:8080/images', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(image),
      });
      const data = await response.json();
      setImages([...images, data]);
      toggleModal();
      window.location.reload()
    } catch (error) {
      console.error('Error adding image: ', error);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="p-6 max-w-2 mx-auto bg-white flex items-center justify-center space-x-4">
        <h1 className="text-7xl text-center mt-16 font-medium">Photo Gallery</h1>
        <button className="my-auto bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded translate-y-25" onClick={toggleModal}>
          Add a New Image!
        </button>
      </div>

      <ImageSearch searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && <h2 className="text-3xl text-center mx-auto mt-32">No search results</h2>}

      {isLoading ? (
        <h2 className="text-5xl text-center mx-auto mt-32">Loading...</h2>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center gap-2">
          {images.map((image) => (
            <Card key={image.id} image={image} />
          ))}
        </div>
      )}


<div className={`fixed inset-0 bg-black opacity-50 ${modalIsOpen ? 'fixed' : 'hidden'}`} onClick={toggleModal}></div>

<Modal isOpen={modalIsOpen} toggle={toggleModal} centered={true} backdrop="fixed" className="modal fixed inset-0 flex items-center justify-center">
  <div className="bg-white rounded-lg shadow-lg p-6 " >
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-medium">Add New Image</h2>
      <button className="text-gray-500 hover:text-gray-700 focus:outline-none" onClick={toggleModal}>
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <div className="mt-6">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Image Name</label>
          <input type="text" className="form-control border-2 border-grey-300 rounded m-2" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Image Author</label>
          <input type="text" className="form-control w-3/12 border-2 border-grey-300 rounded m-2" value={user_name} onChange={(event) => setUserName(event.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input type="text" className="form-control w-10/12 border-2 border-grey-300 rounded m-2" value={webformatURL} onChange={(event) => setWebformatURL(event.target.value)} />
        </div>
        <div className="flex justify-end">
          <button className="my-auto bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded translate-y-25" >
            Add Image
          </button>
        </div>
      </form>
    </div>
  </div>
</Modal>
    </div>
  );
}

export default App
