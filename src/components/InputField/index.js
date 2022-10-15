const InputField = ({ name, type, value, onChange }) => {

    const renderInput = () => {
        if (type === 'Checkbox') {
            return (
                <input name={name} type={type} checked={value ? 'checked' : ''} onChange={(e) => {
                    onChange(e.target.name, e.target.checked);
                }} />
            );
        }
        else {
            return (
                <input name={name} type={type} className="form-control" value={value ?? ''} onChange={(e) => {
                    onChange(e.target.name, e.target.value);
                }} />
            );
        }
    }

    return (renderInput());
}

export default InputField;