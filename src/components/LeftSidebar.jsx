import { ListItem } from "./List";
import { SidebarSection } from "./SidebarSection";


export const LeftSidebar = () => (
  <div className=" w-80 p-4 border-r hidden h-screen overflow-auto  sm:block border-gray-200">
    <SidebarSection title="Contacts" addNewText="New Contact">
      <ListItem icon="👤" text="Jenny" />
      <ListItem icon="👤" text="Sightmeeti" />
    </SidebarSection>
    <SidebarSection title="Projects" addNewText="New Project">
      <ListItem icon="🚀" text="4939 test" rightIcon />
      <ListItem icon="📊" text="G test 2346" rightIcon />
    </SidebarSection>
    <SidebarSection title="Albums" addNewText="New Album">
      <ListItem icon="📁" text="1971 Portfolio" rightIcon />
      <ListItem icon="🤖" text="AI Partners" rightIcon />
    </SidebarSection>
  </div>
);
