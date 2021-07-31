
interface Props {
    iconClassName: string;
    onClick: (guestID: string) => void;
    guestId : string;
}

const IconButton = (props: Props) => {

    return (
    <button>
        <i className={props.iconClassName} onClick={() => props.onClick(props.guestId)}></i>
    </button>
    )
}

export {IconButton}