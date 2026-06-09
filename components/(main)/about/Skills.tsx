import ListCard from "@/components/common/card/ListCard";
import siteConfig from "@/config/site-config";

export default function Skills() {
  return (
    <div>
      <ListCard list={siteConfig.profile.skills} />
    </div>
  );
}
