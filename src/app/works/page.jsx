import { SiteData } from "@/data/SiteData";

export const metadata = {
    title: "Works",
};

const Works = () => {
   const {title, text} = SiteData[1];
  return (

    <section className="wrapper">
      <div className="back-seet">
            <div className="page-title">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>

      </div>
    </section>
  )
}
export default Works;
