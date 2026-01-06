import { SiteData } from "@/data/SiteData";
import { AboutData } from "@/data/SiteData";
export const metadata = {
    title: "About",
};

const About = () => {
    const {title, text} = SiteData[1];
    return (
     <section className="wrapper">
      <div className="back-seet">
           <div className="page-title">
              <h2>{title}</h2>
              <p>{text}</p>
          </div>
          <div className="about-section">
            <div className="about-profile">
                <figure><img src={AboutData.profileImage} alt={AboutData.name} /></figure>
                <div>
                    <h2><ruby>{AboutData.name}<rt>{AboutData.ruby}</rt></ruby></h2>
                    <p>{AboutData.profileText}</p>
                </div>
            </div>
            {AboutData.sections.map((section, index) => (
                <div>
                    <h3>{section.heading}</h3>
                    <p>{section.content}</p>
                </div>
            ))}


          </div>
      </div>
    </section>
    )
}
export default About;
