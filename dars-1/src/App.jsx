import React from "react";

const countries = [
  {
    name: "Uzbekistan",
    cities: ["Tashkent", "Samarkand", "Bukhara"],
  },
  {
    name: "USA",
    cities: ["New York", "Los Angeles", "Chicago"],
  },
  {
    name: "Germany",
    cities: ["Berlin", "Munich", "Frankfurt"],
  },
  {
    name: "Japan",
    cities: ["Tokyo", "Osaka", "Kyoto"],
  },
  {
    name: "Brazil",
    cities: ["São Paulo", "Rio de Janeiro", "Brasilia"],
  },
];

const news = [
  {
    title: "New Tech Innovation in 2025",
    image: "https://example.com/news1.png",
    description:
      "A groundbreaking technology has been released that is set to change the world of computing.",
  },
  {
    title: "Global Sports Championship Begins",
    image: "https://example.com/news2.png",
    description:
      "The most anticipated sports event of the year kicks off with record-breaking attendance.",
  },
  {
    title: "Climate Action: Major Progress",
    image: "https://example.com/news3.png",
    description:
      "World leaders agree on a new strategy to significantly reduce carbon emissions by 2030.",
  },
  {
    title: "Uzbekistan Hosts International Summit",
    image: "https://example.com/news4.png",
    description:
      "Tashkent welcomed international delegates to discuss regional development and cooperation.",
  },
  {
    title: "New Discoveries in Space",
    image: "https://example.com/news5.png",
    description:
      "Astronomers have discovered new exoplanets that could potentially support life.",
  },
];

const App = () => {
  return (
    <>
      <div className="flex h-full w-full justify-between gap-15 items-center bg-black">
        {countries.map((country) => {
          const { cities } = country;
          return (
            <div className="flex-1 border border-red-400 rounded-2xl p-12 text-center">
              <h1 className="text-orange-400 text-3xl" key={country.name}>
                {country.name}
              </h1>

              {cities.map((city) => (
                <h1 className="text-blue-400 text-2xl" key={cities.city}>
                  {city}
                </h1>
              ))}
            </div>
          );
        })}
      </div>

      <div className="flex my-40 px-20 space-x-4">
        {/* news */}
        {news.map((n) => (
          <div className="border border-gray-400 rounded-2xl p-12">
            <img src={n.image} alt="image news" key={n.image} />
            <h1 className="text-2xl text-green-400" key={n.title}>{n.title}</h1>
            <p className="text-blue-400" key={n.description}>{n.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
