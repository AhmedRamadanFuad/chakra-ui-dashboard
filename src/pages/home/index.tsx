import { Folder, Globe, ShoppingCart, UserRoundPlus } from "lucide-react";
import Header from "../../components/Header";
import Card from "./_components/Card";
import Purity from "./_components/PurityUiDashboard";
import WorkWithTheRockets from "./_components/WorkWithTheRockets";
import BarChart1 from "./_components/BarChart";
import SalesOverview from "./_components/SalesOverview";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProjectsTable from "../../components/ProjectsTable";
import OrdersOverview from "./_components/OrdersOverview";
const cards = [
  {
    title: "Today’s Money",
    value: "$53,000",
    percentage: "+55%",
    icon: <Folder className="text-white" />,
  },
  {
    title: "Today’s Users",
    value: "2,300",
    percentage: "+5%",
    icon: <Globe className="text-white" />,
  },
  {
    title: "New Clients",
    value: "+3,052",
    percentage: "-14%",
    icon: <UserRoundPlus className="text-white" />,
  },
  {
    title: "Total Sales",
    value: "$173,000",
    percentage: "+8%",
    icon: <ShoppingCart className="text-white" />,
  },
];

function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // 👈 hidden below
      animate={isInView ? { opacity: 1, y: 0 } : {}} // 👈 fade + slide in when visible
      transition={{ duration: 0.6, ease: "easeOut" }}
      className=""
    >
      <Header title="Dashboard" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
      <div className="mt-[23.5px] grid grid-cols-1 xl:grid-cols-[minmax(0,_932px)_minmax(0,_674px)] gap-6">
        <Purity />
        <WorkWithTheRockets />
      </div>
      <div className="mt-6 grid min-[1800px]:grid-cols-[minmax(652px,_1fr)_minmax(924px,_1fr)] gap-6">
        <BarChart1 />
        <SalesOverview />
      </div>
      <div className="mt-6 grid grid-cols-1 xl:grid-cols-[minmax(0,_1097px)_minmax(0,_509px)] gap-6">
        <ProjectsTable />
        <OrdersOverview />
      </div>
    </motion.div>
  );
}

export default Home;
