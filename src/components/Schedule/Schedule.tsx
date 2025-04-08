import { Clock } from "lucide-react";
import { Component } from "react";

export default class Schedule extends Component {
  render() {
    return (
      <section id="schedule" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Clock className="mx-auto h-12 w-12 text-red-600" />
            <h2 className="mt-4 text-3xl font-bold text-gray-900">
              Horários Semanais
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Segunda-feira", "Terça-feira", "Quinta-feira"].map((day) => (
              <div key={day} className="bg-gray-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-4">{day}</h3>
                <ul className="space-y-2">
                  <li>18:30 - Turma infantil (até 6 anos)</li>
                  <li>19:30 - Turma geral</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
