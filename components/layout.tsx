interface Props {
    children: React.ReactNode
}

const Layout = (props: Props) => {

    return (
        <main className="m-10">
            {props.children}
        </main>
    )
}

export { Layout }