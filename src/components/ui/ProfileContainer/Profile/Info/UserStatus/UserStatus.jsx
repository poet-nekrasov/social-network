import React, { useEffect, useState } from "react";

export const UserStatus = (props) => {
    let [status, setStatus] = useState(props.status);

    let [editMode, setEditMode] = useState(false);

    useEffect(() => setStatus(props.status), [props.status]);

    const handleActivateEditMode = () => setEditMode(true);

    const handleDeactivateEditMode = () => {
        setEditMode(false);
        props.updateProfileStatus(status);
    };

    const handleChangeStatus = (e) => setStatus(e.target.value);

    return (
        <div>
            {editMode ? (
                <div>
                    <input
                        onBlur={handleDeactivateEditMode}
                        onChange={handleChangeStatus}
                        type={"text"}
                        autoFocus
                        placeholder={"Enter text is here"}
                        value={status}
                    />

                    <button>Set status</button>
                </div>
            ) : (
                <span onDoubleClick={handleActivateEditMode}>{status}</span>
            )}
        </div>
    );
};
