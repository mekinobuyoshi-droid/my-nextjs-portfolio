import { WorksData } from "@/data/SiteData";
import Button from "@/app/components/Button";

export const generateMetadata = async ({params}) => {
    const {id} = await params;
    const work = WorksData.find((a) => a.id === Number(id));

    return{
        title: work.title,
    }
}

const WorkDetail = async ({params}) => {
    const {id} = await params;
    const Work = WorksData.find((a) => a.id === Number(id));
    console.log(params);
    if(!Work) return <p>記事が見つかりません</p>;

    return (
        <div className="work-pages">
            <h2>{Work.title}</h2>
            <p>{Work.text}</p>
            <figure><img src={Work.img} alt={Work.title} /></figure>
            {Work.explanation.map((section,index) => (
                <div key={index} className="explanation-sec">
                    <h3>{section.heading}</h3>
                    <p>{section.content}</p>
                </div>
            ))}
            <ul>
              <Button url={Work.url} title={"作品サイト"} target />
            </ul>
        </div>
    )
}
export default WorkDetail;
 