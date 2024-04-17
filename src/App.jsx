import { useEffect, useState } from 'react'
import { Card } from './components/Card'
import { ImageSearch } from './components/ImageSearch.jsx'

function App () {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState('')

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

  return (

    <div className='container mx-auto'>
      <h1 className='text-7xl text-center mx-auto mt-16  font-medium'>Photo Gallery</h1>

      <ImageSearch searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && <h2 className='text-3xl text-center mx-auto mt-32'>No search results</h2>}

      {isLoading
        ? <h2 className='text-5xl text-center mx-auto mt-32'>Loading...</h2>
        : (
          <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center gap-2'>
            {images.map(image => (
              <Card key={images.id} image={image} />
            ))}
          </div>
          )}
    </div>

  )
}

export default App
