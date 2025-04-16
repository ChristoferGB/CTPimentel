import { UserRound } from 'lucide-react'

function Affiliates() {
  return (
    <section id="affiliates" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <UserRound className="mx-auto h-12 w-12 text-red-600" />
          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            Afiliados
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Affiliates