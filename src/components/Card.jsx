export const Card = ({ image }) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      <img src={image.webformatURL} alt='random' className='w-full' />
      <div className='px-6 py-4'>
        <div className='font-bold text-cyan-500 text-xl mb-2s'>
          {image.name} by {image.user_name}
        </div>
      </div>
    </div>
  )
}
