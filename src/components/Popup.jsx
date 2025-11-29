import "../css/reset.css"
import "../css/style.css"

function Popup(props) {

    return (props.trigger) ? (
        <div className="popup">
            <div className="popupInner">
                <h3 className="popupTitle">DISCLAIMER</h3>
                <p>This website was created as part of an assignment. Please note that the locations and dates on this site <b>do not</b> reflect a real, scheduled wedding.</p>
                <button className="closePopupBtn" onClick={() => props.setTrigger(false)}>Got it!</button>
            </div>
        </div>
    ) : "";
}

export default Popup