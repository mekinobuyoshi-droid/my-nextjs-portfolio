import { SiteData } from "@/data/SiteData";
import { WorksData } from "@/data/SiteData";
import WorksCard from "../components/WorksCard";

export const metadata = {
    title: "Works",
};

const WorksPage = () => {
   const {title, text} = SiteData[1];
  return (
        <>
          <div className="page-title">
              <h2>{title}</h2>
              <p>{text}</p>
          </div>
          
          <div className="workdata-flex">
              {WorksData.map((work) => (
                <WorksCard key={work.id}  work={work} />
              ))}
          </div>
        </>
  )
}
export default WorksPage;
