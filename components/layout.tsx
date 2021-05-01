import styles from '../styles/Layout.module.css'

interface Props {
    children: React.ReactNode
}

const Layout = (props: Props) => {

    return (
        <main className={styles.color}>
            {props.children}
        </main>
    )
}

export { Layout }