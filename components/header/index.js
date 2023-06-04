import styles from './header.module.scss'
export default function Header() {
    return (
        <header className={`${styles.header}`}>
            <a className={`${styles.logo}`} href='#'>TaskMan</a>
            <button className={`button button__secondary`}>Try free </button>
        </header>
    )
}