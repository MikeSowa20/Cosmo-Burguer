
interface InputProps{
    label:string,
    value:string|number,
    handleChange:(e:any)=>void,
    placeHolder:string,
    className?:string,
}

export default function Input({label,value,handleChange,placeHolder,className}:InputProps){
    return(
        <div className={`${className}`}>
            <label htmlFor={label}>{label}:</label>
            <input id={label} value={value} onChange={handleChange} placeholder={placeHolder}
                className="p-2 w-full border-b-2 border-yellow-400 ring-0 outline-0 text-slate-700"
            />
        </div>
    )
}