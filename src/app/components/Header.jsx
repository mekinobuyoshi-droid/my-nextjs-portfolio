import { SiteData } from "@/data/SiteData";
import Button from "./Button";
import Link from "next/link";
const Header = () => {
    // const {id, title, url} = SiteData;
    return (
        <header>
            <div className="wrapper header-flex">
               <h1> <Link href="/">meki nobuyoshi</Link></h1>
                <nav>
                    <ul className="nav-flex">
                        {SiteData.map((data) => (
                            <Button key={data.id} title={data.title} url={data.url} />
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
};
export default Header;

