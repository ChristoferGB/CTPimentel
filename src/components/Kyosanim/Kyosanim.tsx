import { Component } from "react";

export default class Kyosanim extends Component {
  render() {
    return (
      <section id="sensei" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-top lg:space-x-8">
            <div className="lg:w-1/2">
              <img
                className="rounded-lg shadow-xl"
                src="images/Mídia (2).jpg"
                alt="Kyosanim Alysson"
              />
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Kyosanim Alysson
              </h2>
              <p className="text-lg text-gray-600">
                With over 30 years of experience in Taekwondo, Master Kim holds
                a 7th-degree black belt and has trained champions across the
                globe. His teaching philosophy emphasizes both traditional
                values and modern training techniques.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
