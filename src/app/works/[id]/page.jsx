import { WorksData } from "@/data/SiteData";

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
        <div>
            <h2>{Work.title}</h2>
            <p>{Work.text}</p>

        </div>
    )
}
export default WorkDetail;
 