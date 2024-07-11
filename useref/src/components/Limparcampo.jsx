import { useRef } from "react";

function Limparcampo(){
    let inputRef = useRef(null);

    let handleClick = () => {
        inputRef.current.value = ""
        inputRef.current.focus();
    }

    return(
        <div>
            <input type="text" ref={inputRef} />
            
            <button onClick={handleClick}>
                Click me!
            </button>
        </div>
    )
}
export default Limparcampo;