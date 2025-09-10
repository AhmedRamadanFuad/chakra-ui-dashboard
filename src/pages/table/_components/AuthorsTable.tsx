import { cn } from "../../../lib/utils";
import author1 from "../../../assets/author1.png";
import author2 from "../../../assets/author2.png";
import author3 from "../../../assets/author3.png";
import author4 from "../../../assets/author4.png";
import author5 from "../../../assets/author5.png";
import author6 from "../../../assets/author6.png";

const authorsTable = [
  {
    image: author1,
    name: "Esthera Jackson",
    email: "esthera@simmmple.com",
    title: "Manager",
    job: "Organization",
    status: true,
    date: "14/06/21",
  },
  {
    image: author2,
    name: "Alexa Liras",
    email: "alexa@simmmple.com",
    title: "Programmer",
    job: "Developer",
    status: false,
    date: "14/06/21",
  },
  {
    image: author3,
    name: "Laurent Michael",
    email: "laurent@simmmple.com",
    title: "Executive",
    job: "Projects",
    status: true,
    date: "14/06/21",
  },
  {
    image: author4,
    name: "Freduardo Hill",
    email: "freduardo@simmmple.com",
    title: "Manager",
    job: "Organization",
    status: true,
    date: "14/06/21",
  },
  {
    image: author5,
    name: "Daniel Thomas",
    email: "daniel@simmmple.com",
    title: "Programmer",
    job: "Developer",
    status: false,
    date: "14/06/21",
  },
  {
    image: author6,
    name: "Mark Wilson",
    email: "mark@simmmple.com",
    title: "Designer",
    job: "UI/UX Design",
    status: false,
    date: "14/06/21",
  },
];

export default function AuthorsTable() {
  return (
    <div
      className={cn(
        "bg-white dark:bg-[#1a202c] rounded-2xl p-6 shadow w-full mx-auto"
      )}
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
              <th className="py-2">Author</th>
              <th className="py-2">Function</th>
              <th className="py-2">Status</th>
              <th className="py-2">Employed</th>
              <th className="py-2"></th>
            </tr>
          </thead>
          <tbody>
            {authorsTable.map((author) => (
              <tr
                key={author.email}
                className="border-b last:border-b-0 border-gray-100 dark:border-gray-800"
              >
                <td className="py-4 flex items-center gap-2 min-w-[200px]">
                  <img
                    src={author.image}
                    alt="logo"
                    className="w-10 h-10 rounded-[15px]"
                  />
                  <div className="flex flex-col font-semibold text-gray-700 dark:text-gray-200">
                    <span className="text-secondary font-bold">
                      {author.name}
                    </span>
                    <span className="text-accent">{author.email}</span>
                  </div>
                </td>
                <td className="py-4">
                  <div className="flex flex-col text-sm">
                    <span className="text-secondary font-bold">
                      {author.title}
                    </span>
                    <span className="text-accent">{author.job}</span>
                  </div>
                </td>
                <td>
                  <span
                    className={`py-1 px-2 rounded-[8px] font-bold text-sm text-white ${
                      author.status ? "bg-green-400" : "bg-gray-300"
                    }`}
                  >
                    {author.status ? "Online" : "Offline"}
                  </span>
                </td>
                <td className="py-4 text-secondary font-bold text-sm">
                  {author.date}
                </td>
                <td className="text-accent text-xs font-bold">Edit</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
