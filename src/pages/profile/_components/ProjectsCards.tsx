import { cn } from "../../../lib/utils";

import jorge from "../../../assets/jorge.png";

const projects = [
  {
    id: 1,
    title: "Modern",
    description:
      "As Uber works through a huge amount of internal management turmoil.",
    image: jorge,
    members: [
      "/assets/author1.png",
      "/assets/author2.png",
      "/assets/author3.png",
      "/assets/author4.png",
    ],
  },
  {
    id: 2,
    title: "Scandinavian",
    description:
      "Music is something that every person has his or her own specific opinion about.",
    image: jorge,
    members: [
      "/assets/author2.png",
      "/assets/author3.png",
      "/assets/author4.png",
      "/assets/author5.png",
    ],
  },
  {
    id: 3,
    title: "Minimalist",
    description:
      "Different people have different taste, and various types of music.",
    image: jorge,
    members: [
      "/assets/author3.png",
      "/assets/author4.png",
      "/assets/author5.png",
      "/assets/author6.png",
    ],
  },
];

export default function ProjectsCards() {
  return (
    <div
      className={cn(
        "bg-white rounded-[15px] px-5 flex flex-col gap-6 shadow-sm py-6"
      )}
    >
      <div>
        <h2 className="text-xl font-bold text-gray-700">Projects</h2>
        <p className="text-gray-400 text-sm mt-1">Architects design houses</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex-1 bg-white rounded-2xl shadow-sm flex flex-col"
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[191.5px] object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#313860]/30 to-[#151928]/80 rounded-[15px]"></div>
            </div>
            <div className="p-4 flex flex-col flex-1">
              <span className="text-xs text-gray-400 mb-1">
                Project #{project.id}
              </span>
              <h3 className="text-lg font-bold text-gray-700 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <button className="border border-primary text-primary rounded-lg px-4 py-1 text-sm font-semibold hover:bg-primary transition duration-300 hover:text-white cursor-pointer">
                  VIEW ALL
                </button>
                <div className="flex -space-x-2">
                  {project.members.map((member, idx) => (
                    <img
                      key={idx}
                      src={member}
                      alt="member"
                      className="w-7 h-7 rounded-full border-2 border-white shadow"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="flex-1 flex items-center justify-center bg-gray-100 rounded-2xl border border-gray-200">
          <div className="flex flex-col items-center justify-center">
            <span className="text-3xl text-gray-400 mb-2">+</span>
            <span className="text-lg font-semibold text-gray-500">
              Create a New Project
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
