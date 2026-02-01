
import { useState } from 'react'

export default function App() {
  const [theme, setTheme] = useState('')
  const [prompt, setPrompt] = useState('')

  const generatePrompt = () => {
    if (!theme) {
      setPrompt('Masukkan tema dulu')
      return
    }

    setPrompt(
      `High-quality editorial photo about ${theme}, natural lighting, authentic moment, non-generic composition, realistic emotion, suitable for Adobe Stock`
    )
  }

  return (
    <div style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1>Microstock Genius</h1>

      <input
        type="text"
        placeholder="Masukkan tema (contoh: urban lifestyle, family, nature)"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        style={{ width: '100%', padding: 10, marginBottom: 12 }}
      />

      <button onClick={generatePrompt} style={{ padding: '10px 16px' }}>
        Generate Prompt
      </button>

      {prompt && (
        <div style={{ marginTop: 20, padding: 12, background: '#f3f3f3' }}>
          <strong>Prompt:</strong>
          <p>{prompt}</p>
        </div>
      )}
    </div>
  )
}
