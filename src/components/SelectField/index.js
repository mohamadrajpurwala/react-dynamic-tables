const SelectField = ({ name, items, value, onChange }) => {
    return (
        <select name={name} className="form-control" value={value} onChange={(e) => {
            e.preventDefault();
            onChange(e.target.name, e.target.value);
        }}>
            <option value=""></option>
            {items && items.map((item, index) => {
                return (
                    <option key={index} value={item.id}>{item.name}</option>
                );
            })}
        </select>
    );
}

export default SelectField;