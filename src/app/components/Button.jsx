import Link from "next/link";

const Button = ({title, url}) => {
    return (
        <li className="btn">
            <Link href={url}>{title}</Link>
        </li>
    )
};
export default Button;
