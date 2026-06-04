import siteConfig from "@/config/site-config";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="mt-12 mb-5 animate">
      <div className="pt-5 border-t border-muted-foreground/30">
        <div className="flex flex-row gap-4 mx-auto items-center justify-center">
          {siteConfig.profile.socials.map((social) => (
            <Icon
              key={social.name}
              icon={social.icon}
              className="size-6 hover:text-primary transition-colors cursor-pointer"
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
