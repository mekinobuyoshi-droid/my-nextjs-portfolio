import Link from "next/link";
import Button from "./Button";
const WorksCard = ({work}) => {
    return (
        <div className="work-card">
            <h2>{work.title}</h2>
            <figure><img src={work.img} alt={work.title} /></figure>
            <p>{work.text}</p>
            <ul>
               <Button url={`/works/${work.id}`} title={`詳細ページ`} />
            </ul>
        </div>
    )
}
export default WorksCard;