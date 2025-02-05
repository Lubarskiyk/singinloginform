import { DynamicIcon, IconName } from "lucide-react/dynamic";
import { cn } from "../utils/utils.ts";

export default function SocialIcons() {
  const icons: IconName[] = ["facebook", "github", "linkedin", "youtube"];
  return (
    <ul className="flex w-full items-center justify-center gap-8">
      {icons.map((icon: IconName, index) => (
        <li key={index}>
          <a
            href="#"
            className={cn(
              "my-5 block rounded-lg border border-neutral-500 p-1 " +
                "transition-scale duration-[250ms] ease-in-out hover:scale-110"
            )}
          >
            <DynamicIcon size={24} name={icon} color="#737373" />
          </a>
        </li>
      ))}
    </ul>
  );
}
