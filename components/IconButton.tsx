
interface Props {
    iconClassName: string;
}

const IconButton = (props: Props) => {

    return (
    <button>
        <i className={props.iconClassName}></i>
    </button>
    )
}

export {IconButton}