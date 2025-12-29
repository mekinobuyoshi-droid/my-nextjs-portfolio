import Link from "next/link";

const Button = ({title, url, target}) => {
    const urlStats = url.startsWith("http");
    return (
        <li className="btn">
            <Link 
                href={url} 
                target={target ? "_blank" : undefined} 
                rel={target ? "noopener noreferrer" : undefined}
                className={urlStats ? "external-rink" : ""}>
                    {title}
            </Link>
        </li>
    )
};
export default Button;
