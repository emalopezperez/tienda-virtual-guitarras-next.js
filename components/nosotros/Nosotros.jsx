import Image from "next/image";
import nosotros from "../../public/img/nosotros.jpg";

const people = [
  {
    name: "Emanuel Lopez",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/emanuel-lopez-b49824103/",
  },
  {
    name: "Emanuel Lopez",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/emanuel-lopez-b49824103/",
  },
  {
    name: "Emanuel Lopez",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/emanuel-lopez-b49824103/",
  },
  // More people...
];

const Nosotros = () => {
  return (
    <main className="container mt-3">
      <div className="flex justify-center flex-col">
        <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
          <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center sm:text-left">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl pb-8">
                The Guitarists
              </h2>

              <p className="">
                Somos una empresa dedicada a la venta de guitarras de alta
                calidad. Contamos con un amplio catálogo de instrumentos de las
                marcas más reconocidas en el mercado, así como con un equipo de
                profesionales altamente capacitados para brindar asesoramiento y
                atención personalizada a nuestros clientes. Además, a través de
                nuestro blog, compartimos información sobre temas relacionados
                con los instrumentos musicales, así como entrevistas con
                artistas y consejos para mejorar tu técnica en la guitarra. Nos
                enorgullecemos de ofrecer un servicio excepcional y de ayudar a
                nuestros clientes a encontrar el instrumento perfecto para sus
                necesidades.
              </p>
            </div>
          </div>

          <Image
            alt="Violin"
            src={nosotros}
            className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px]"
          />
        </section>
      </div>

      <div className="space-y-12 mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Equipo
          </h2>
          <p className="text-xl text-gray-500">
            Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor
            ultricies donec risus sodales. Tempus quis et.
          </p>
        </div>
        <ul
          role="list"
          className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
          {people.map((person) => (
            <li key={person.name}>
              <div className="space-y-4">
                <div className="aspect-w-3 aspect-h-2">
                  
                </div>

                <div className="space-y-2">
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3>{person.name}</h3>
                    <p className="text-indigo-600">{person.role}</p>
                  </div>
                  <ul role="list" className="flex space-x-5">
                    <li>
                      <a
                        href={person.twitterUrl}
                        className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Twitter</span>
                        <svg
                          className="h-5 w-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href={person.linkedinUrl}
                        className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">LinkedIn</span>
                        <svg
                          className="h-5 w-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Nosotros;
