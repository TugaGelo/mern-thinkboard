import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import NoteDetailPage from './pages/NoteDetailPage.jsx'
import CreatePage from './pages/CreatePage.jsx'
import toast from 'react-hot-toast'

const App = () => {
  return (
    <div data-theme="forest" className="min-h-screen bg-base-200 p-4">
      <button className="btn">Button</button>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-ghost">Ghost</button>
      <button className="btn btn-link">Link</button>
      <button onClick={() => toast.error("congrats")} className='btn btn-outlined btn-primary m-4'>
        Click Me
      </button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/notes/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App