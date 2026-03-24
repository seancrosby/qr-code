import QRCodeGenerator from './components/QRCodeGenerator'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-900 flex flex-col items-center justify-center p-4 relative">
      <a 
        href="https://github.com/seancrosby/qr-code" 
        target="_blank" 
        rel="noopener noreferrer"
        className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
        aria-label="GitHub Repository"
      >
        <svg className="w-8 h-8">
          <use href="/icons.svg#github-icon" />
        </svg>
      </a>
      <main className="flex-grow flex items-center justify-center w-full">
        <QRCodeGenerator />
      </main>
      <Footer />
    </div>
  )
}

export default App
