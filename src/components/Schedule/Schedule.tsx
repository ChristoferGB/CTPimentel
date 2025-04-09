import { Clock } from "lucide-react";

function Schedule() {
  const days = [
    {
      day: "Segunda-feira",
      events: [
        "18:30 - Turma infantil (até 6 anos)",
        "19:30 - Turma geral",
        "20:30 - Kickboxing",
      ],
    },
    {
      day: "Terça-feira",
      events: ["19:30 - Turma geral"],
    },
    {
      day: "Quarta-feira",
      events: [
        "18:30 - Turma infantil (até 6 anos)",
        "19:30 - Projeto social",
        "20:30 - Kickboxing",
      ],
    },
    {
      day: "Quinta-feira",
      events: ["19:30 - Turma geral"],
    },
    {
      day: "Sexta-feira",
      events: ["18:30 - Turma infantil (até 6 anos)", "20:30 - Kickboxing"],
    },
  ];

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
          {days.map((d) => (
            <div key={d.day} className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4">{d.day}</h3>
              <ul className="space-y-2">
                {d.events.map((e) => (
                  <li>{e}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Schedule;
