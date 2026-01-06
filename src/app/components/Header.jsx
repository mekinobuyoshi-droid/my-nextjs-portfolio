import { SiteData } from "@/data/SiteData";
import Button from "./Button";
import Link from "next/link";
import GlobalMenu from "./GlobalMenu";
const Header = () => {
    // const {id, title, url} = SiteData;
    return (
        <header>
            <div className="wrapper header-flex">
               <h1> <Link href="/">meki nobuyoshi</Link></h1>
                <GlobalMenu />
            </div>
        </header>
    )
};
export default Header;

