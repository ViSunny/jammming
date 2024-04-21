import React from "react"

function ChangeName({ handleCancel }) {

    return (
        <div>
            <input
                // onChange={} 
                type="text" />
                
            <button
                onClick={handleCancel}
            >Cancel</button>

            <button
            //  onClick={}
            >Save</button>

        </div>
    )

}
export default ChangeName