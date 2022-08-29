import { useMemo } from "react";
import Input from "../../components/HomeTest07/Input";

const Form = ({ onSubmit, onChange, item, lists }) => {
    const disabled = useMemo(() => {
        return item.name === "" || item.phone === "";
    }, [item]);

    return (
        <div>
            {/* Start of Input (Import) */}

            <div>
                {/* Name */}
                <Input
                    id="form-name"
                    className="form-control"
                    name="name"
                    onChange={onChange}
                    lists={lists}
                    item={item}
                />
            </div>
            <div>
                {/* Phone */}
                <Input
                    id="form-name"
                    className="form-control"
                    name="phone"
                    onChange={onChange}
                    lists={lists}
                    item={item}
                />
            </div>
            {/* End of Input (Import) */}
            <div className="modal-footer">
                <button
                    type="button"
                    className="btn btn-secondary"
                >
                    Back
                </button>
                <button
                    disabled={disabled}
                    onClick={onSubmit}
                    type="button"
                    className="btn btn-primary"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Form;
