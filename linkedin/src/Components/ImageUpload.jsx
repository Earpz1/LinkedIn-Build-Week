import { Button } from 'react-bootstrap'

const ImageUpload = () => {
  return (
    <>
      <input type="file" name="file" onChange={changeHandler} />
      <Button variant="primary" onClick={handleSubmission}>
        Submit
      </Button>
    </>
  )
}

export default ImageUpload
