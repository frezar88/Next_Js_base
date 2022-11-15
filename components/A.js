import Link from "next/link";
import s from '../styles/A.module.css'

export default function A ({text,href}) {
    return(
        <Link className={s.link} href={href}>{text}</Link>
    )
}