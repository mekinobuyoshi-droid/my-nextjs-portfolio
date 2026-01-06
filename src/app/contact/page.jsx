import { SiteData } from "@/data/SiteData";
import { ContactData } from "@/data/SiteData";

const Contact = () => {
    const {title, text} = SiteData[3];
    return (
        <section className="wrapper">
            <div className="back-seet">
                <div className="page-title">
                    <h2>{title}</h2>
                    <p>{text}</p>
                 </div>
                 <div className="contact-flex">
                    <div className="contact-text">
                        <div className="contact-section">
                            <h2>{ContactData.contact.title}</h2>
                            {ContactData.contact.items.map((section, index) => (
                                    <div key={index}>
                                        <h3>{section.label}</h3>
                                        <p><a href={section.link} target="_blank" rel="noopener noreferrer">{section.value}</a></p>
                                    </div>
                                ))}
                        </div>
                        <div className="sitestructure-section">
                            <h2>{ContactData.siteStructure.title}</h2>
                            <p>{ContactData.siteStructure.description}</p>
                            {ContactData.siteStructure.points.map((section, index) => (
                                <div key={index}>
                                    <h3>{section.subtitle}</h3>
                                    <p>{section.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>{/* contact-text */}
                    <figure className="contact-img"><img src={ContactData.image.url} alt={ContactData.image.alt} /></figure>
                 </div>{/* contact-flex */}

            </div>{/* back-seet */}
         </section>
    )
};
export default Contact;
