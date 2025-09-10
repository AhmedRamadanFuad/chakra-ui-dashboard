import Header from "../../components/Header";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProjectsTable from "../../components/ProjectsTable";
import AuthorsTable from "./_components/AuthorsTable";

function Table() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // 👈 hidden below
      animate={isInView ? { opacity: 1, y: 0 } : {}} // 👈 fade + slide in when visible
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-w-full"
    >
      <Header title="Table" />
      <div className="mt-[23.5px] w-full">
        <AuthorsTable />
      </div>
      <div className="mt-[23.5px] w-full">
        <ProjectsTable />
      </div>
    </motion.div>
  );
}

export default Table;
