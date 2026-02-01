export default function MicrostockUI() {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-6">

        <header>
          <h1 className="text-3xl font-bold text-purple-400">
            Microstock Genius
          </h1>
          <p className="text-gray-400">
            AI-powered prompt generator for microstock creators
          </p>
        </header>

        <section className="bg-slate-900 rounded-xl p-6 border border-purple-500/20">
          <h2 className="text-lg font-semibold mb-2">Upload Media</h2>
          <div className="border border-dashed border-gray-600 rounded-lg p-6 text-center text-gray-400">
            Upload area (UI only)
          </div>
        </section>

        <section className="bg-slate-900 rounded-xl p-6 border border-purple-500/20">
          <h2 className="text-lg font-semibold mb-2">Generated Prompts</h2>
          <div className="text-gray-500 text-sm">
            Result will appear here
          </div>
        </section>

      </div>
    </div>
  )
}
