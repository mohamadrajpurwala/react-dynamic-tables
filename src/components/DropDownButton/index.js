const DropDownButton = ({ label, style, btnStyle, isDisplayRemove, onActionTap, onRemoveTap, ...props }) => {
    const fields = ["Text", "Number", "Date", "Checkbox"];

    return (
        <div className={style}>
            <a className={btnStyle} href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {label}
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {fields && fields.map((field, index) => {
                    return (
                        <a key={index} href="" className="dropdown-item" onClick={(e) => {
                            e.preventDefault();
                            onActionTap(e, field);
                        }}>{field}</a>
                    )
                })}
                {isDisplayRemove && <a href="" onClick={(e) => {
                    e.preventDefault();
                    onRemoveTap(e);
                }} className="dropdown-item">Remove</a>}
            </div>
        </div>
    );
};

export default DropDownButton;