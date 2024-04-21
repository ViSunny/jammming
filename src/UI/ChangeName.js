import React, { useState } from "react"

function ChangeName({ handleCancel, handleSavePLname, setPlaylistChange }) {
    const [newName, setNewName] = useState('');


    function handleOnChange(event) {
        setNewName(event.target.value)
    }


    function handleSaveclick() {
        handleSavePLname(newName)
setPlaylistChange(false)
    }

    return (

        <div>
            <input

                onChange={handleOnChange}
                type="text" />

            <button
                onClick={handleCancel}
            >Cancel</button>

            <button
                onClick={handleSaveclick} //sets new name
            >Save</button>

        </div>
    )

}
export default ChangeName