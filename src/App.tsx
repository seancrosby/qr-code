import QRCodeGenerator from './components/QRCodeGenerator'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col items-center justify-center p-4">
      <main className="flex-grow flex items-center justify-center w-full">
        <QRCodeGenerator />
      </main>
      <Footer />
    </div>
  )
}

export default App
