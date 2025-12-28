import Link from "next/link";
import Button from "./Button";
const WorksCard = ({work}) => {
    return (
        <div>
            <h3>{work.title}</h3>
            <p>{work.text}</p>
            <Button url={`/works/${work.id}`} title={`${work.title}ページ`} />
        </div>
    )
}
export default WorksCard;