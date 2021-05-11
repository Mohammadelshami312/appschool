const Select = (props) => {
    const { label, placeholder, options, id } = props;
    return (
        <div class="form-group">
            <label for={` ${id} `}>{label}</label>
            <select class="form-control" id={` ${id} `} placeholder={` ${placeholder} `}>
                {
                    options.map(option =>
                        <option>{option}</option>
                    )
                }
            </select>
        </div>
    );
}
export default Select;