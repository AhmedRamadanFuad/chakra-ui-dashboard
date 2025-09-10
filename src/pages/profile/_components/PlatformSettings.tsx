import { useState } from "react";
import { Switch } from "../../../components/ui/switch";
import { cn } from "../../../lib/utils";

const settings = [
  {
    section: "ACCOUNT",
    items: [
      { label: "Email me when someone follows me", checked: true },
      { label: "Email me when someone answers on my post", checked: false },
      { label: "Email me when someone mentions me", checked: true },
    ],
  },
  {
    section: "APPLICATION",
    items: [
      { label: "New launches and projects", checked: false },
      { label: "Monthly product updates", checked: false },
      { label: "Subscribe to newsletter", checked: true },
    ],
  },
];

export default function PlatformSettings() {
  const [array, setArray] = useState(settings);
  // console.log(checked[0].items[0]);

  return (
    <div className="bg-white rounded-[15px] shadow pt-7 px-5 pb-6 w-full ">
      <div className="font-bold text-lg text-secondary mb-[17px]">
        Platform Settings
      </div>
      {array.map((section) => (
        <div key={section.section} className="mb-6">
          <div className="text-[10px] uppercase font-bold text-accent mb-5">
            {section.section}
          </div>
          {section.items.map((item, i) => (
            <div key={i} className="flex items-center gap-2.5 mb-5">
              <Switch
                defaultChecked={item.checked}
                onClick={() => {
                  setArray((prev) =>
                    prev.map((s) =>
                      s.section === section.section
                        ? {
                            ...s,
                            items: s.items.map((it, idx) =>
                              idx === i ? { ...it, checked: !it.checked } : it
                            ),
                          }
                        : s
                    )
                  );
                }}
              />
              <span
                className={cn(
                  "text-sm",
                  item.checked ? "text-[#4fd1c5]" : "text-gray-400"
                )}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
