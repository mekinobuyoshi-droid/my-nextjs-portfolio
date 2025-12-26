import { WorksData } from "@/data/SiteData";

export const generateMetadata = async ({params}) => {
    const {title} = await params;
    return{
        title: title,
    }
}
