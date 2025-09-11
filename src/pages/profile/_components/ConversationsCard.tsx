import { cn } from "../../../lib/utils";

const conversations = [
  {
    avatar: "/assets/author1.png",
    name: "Esthera Jackson",
    message: "Hi! I need more informations...",
  },
  {
    avatar: "/assets/author2.png",
    name: "Esthera Jackson",
    message: "Awesome work, can you change...",
  },
  {
    avatar: "/assets/author3.png",
    name: "Esthera Jackson",
    message: "Have a great afternoon...",
  },
  {
    avatar: "/assets/author4.png",
    name: "Esthera Jackson",
    message: "About files I can...",
  },
];

export default function ConversationsCard() {
  return (
    <div
      className={cn("bg-white rounded-[15px] shadow pt-7 px-5 pb-6 w-full  ")}
    >
      <div className="font-bold text-lg text-secondary mb-4">Conversations</div>
      <div className="flex flex-col gap-6">
        {conversations.map((item, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={item.avatar}
                alt="avatar"
                className="w-12 h-12 rounded-[15px] object-cover"
              />
              <div>
                <div className="font-bold text-sm text-secondary dark:text-gray-200 mb-1">
                  {item.name}
                </div>
                <div className="text-sm text-accent">{item.message}</div>
              </div>
            </div>
            <button className="cursor-pointer text-[#4fd1c5] font-bold text-xs">
              REPLY
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
