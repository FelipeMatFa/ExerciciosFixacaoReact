import { useRef } from "react";

function Limparcampo(){
    let inputRef = useRef(null);

    let handleClick = () => {
        // Focus serve para sempre focar em determinado campo ou elemento
        inputRef.current.focus();
        inputRef.current.value = ""
    }

    return(
        <div>
            <input type="text" ref={inputRef} />
            
            <button onClick={handleClick}>
                Limpe
            </button>
        </div>
    )
}
export default Limparcampo;