import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProfileHeader from "./_components/ProfileHeader";
import PlatformSettings from "./_components/PlatformSettings";
import ConversationsCard from "./_components/ConversationsCard";
import ProfileInfoCard from "./_components/ProfileInfoCard";
import ProjectsCards from "./_components/ProjectsCards";

function Profile() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-full"
    >
      <ProfileHeader />
      <div className="mt-18 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <PlatformSettings />
        <ProfileInfoCard />
        <ConversationsCard />
      </div>
      <ProjectsCards />
    </motion.div>
  );
}

export default Profile;
