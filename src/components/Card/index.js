import DropDownButton from "../DropDownButton/index";

const Card = ({ title, onActionTap, onRemoveTap, renderAddFieldButton, ...props }) => {

    const renderAddFieldsButton = () => {
        return (
            <DropDownButton
                style="dropdown"
                btnStyle="btn btn-primary dropdown-toggle"
                label="Add Fields"
                onActionTap={onActionTap}
            />
        );
    };

    return (
        <div className="card">
            <div className="card-header">
                {title}
                <a href="" className="float-right" onClick={(e) => {
                    e.preventDefault();
                    onRemoveTap(e);
                }}>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </a>
            </div>
            <div className="card-body">
                {props.children}
            </div>
            {renderAddFieldButton && (
                <div className="card-footer text-muted">
                    {renderAddFieldsButton()}
                </div>
            )}
        </div>
    );
}

export default Card;