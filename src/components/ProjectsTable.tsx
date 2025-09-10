import { EllipsisVertical } from "lucide-react";
import { cn } from "../lib/utils";

const projects = [
  {
    company: "Chakra Soft UI Version",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-original.svg",
    members: [
      "/avatars/avatar1.png",
      "/avatars/avatar2.png",
      "/avatars/avatar3.png",
      "/avatars/avatar4.png",
    ],
    budget: "$14,000",
    completion: 60,
    color: "#4fd1c5",
  },
  {
    company: "Add Progress Track",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/atlassian/atlassian-original.svg",
    members: ["/avatars/avatar1.png", "/avatars/avatar2.png"],
    budget: "$3,000",
    completion: 10,
    color: "#4fd1c5",
  },
  {
    company: "Fix Platform Errors",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
    members: ["/avatars/avatar1.png", "/avatars/avatar2.png"],
    budget: "Not set",
    completion: 100,
    color: "#4fd1c5",
  },
  {
    company: "Launch our Mobile App",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spotify/spotify-original.svg",
    members: [
      "/avatars/avatar1.png",
      "/avatars/avatar2.png",
      "/avatars/avatar3.png",
      "/avatars/avatar4.png",
    ],
    budget: "$32,000",
    completion: 100,
    color: "#4fd1c5",
  },
  {
    company: "Add the New Pricing Page",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    members: [
      "/avatars/avatar1.png",
      "/avatars/avatar2.png",
      "/avatars/avatar3.png",
    ],
    budget: "$400",
    completion: 25,
    color: "#4fd1c5",
  },
  {
    company: "Redesign New Online Shop",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/inkscape/inkscape-original.svg",
    members: ["/avatars/avatar1.png", "/avatars/avatar2.png"],
    budget: "$7,600",
    completion: 40,
    color: "#4fd1c5",
  },
];

export default function ProjectsTable() {
  return (
    <div
      className={cn("bg-white dark:bg-[#1a202c] rounded-2xl p-6 shadow w-full")}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="font-bold text-lg text-secondary">Projects</div>
        <div className="text-xs text-[#4fd1c5] font-semibold flex items-center gap-1">
          <span className="inline-block w-2 h-2 bg-[#4fd1c5] rounded-full mr-1"></span>
          30 done{" "}
          <span className="text-gray-400 font-normal ml-1">this month</span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-xs text-gray-400 font-semibold">
              <th className="py-2">COMPANIES</th>
              <th className="py-2">MEMBERS</th>
              <th className="py-2">BUDGET</th>
              <th className="py-2">COMPLETION</th>
              <th className="py-2"></th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr
                key={project.company}
                className="border-b last:border-b-0 border-gray-100 dark:border-gray-800"
              >
                <td className="py-4 flex items-center gap-2 min-w-[150px]">
                  <img
                    src={project.logo}
                    alt="logo"
                    className="w-6 h-6 rounded"
                  />
                  <span className="font-semibold text-gray-700 dark:text-gray-200">
                    {project.company}
                  </span>
                </td>
                <td className="py-4">
                  <div className="flex -space-x-2">
                    {project.members.map((avatar, i) => (
                      <img
                        key={i}
                        src={avatar}
                        alt="member"
                        className="w-7 h-7 rounded-full border-2 border-white dark:border-[#1a202c] object-cover"
                        style={{ zIndex: 10 - i }}
                      />
                    ))}
                  </div>
                </td>
                <td className="py-4 font-semibold text-gray-700 dark:text-gray-200">
                  {project.budget}
                </td>
                <td className="py-4 min-w-[120px]">
                  <div className="flex items-center gap-2">
                    <span className="text-[#4fd1c5] font-semibold text-xs min-w-[32px]">
                      {project.completion}%
                    </span>
                    <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${project.completion}%`,
                          background: project.color,
                        }}
                      />
                    </div>
                  </div>
                </td>
                <td className="py-4 px-5  flex justify-center text-accent">
                  <EllipsisVertical className="w-5 h-5" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
