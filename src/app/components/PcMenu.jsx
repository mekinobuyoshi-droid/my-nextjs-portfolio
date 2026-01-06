import { SiteData } from "@/data/SiteData";
import Button from "./Button";
const PcMenu = () => {
    return(
        <nav className={`global-manu`}>
            <ul className="nav-flex">
                {SiteData.slice(1).map((data) => (
                    <Button key={data.id} title={data.title} url={data.url} />
                ))}
            </ul>
        </nav>
    )
}
export default PcMenu;
