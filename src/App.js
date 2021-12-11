import Routes from './routes';

const App = () => {
  console.log('cloudinary', process.env.REACT_APP_CLOUDINARY_URI)
  return (
    <Routes />
  )
}

export default App;