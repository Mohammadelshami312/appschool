/* Readable Scalable Secure */

const Input = (props) => {
    const { type, label, placeholder, id, classInp } = props;
    return (
        <div class="form-group">
            <label for={`${id}`}>{label}</label>
            <input type={`${type}`} className={` ${classInp} `} id={` ${id} `} placeholder={` ${placeholder} `} />
        </div>
    );
}
export default Input;