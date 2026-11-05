interface ButtonProps{
    label:string,
    disabled?:boolean,
    handleClick:()=>void,
    className:string,
}

export default function Button({label,handleClick,className,disabled=false  }:ButtonProps){
    return(
        <button className={`cursor-pointer text-slate-50 shadow rounded transition-all px-4 py-3 ${className} `} 
                onClick={handleClick}
                disabled = {disabled}
        >
            {label}
        </button>
    )
}