import "./style.css"

export const FormInput = ({type, eventHandler, title}) => {
    return (
        <div>
            <input type={type} placeholder={title} onChange={e => eventHandler(e.target.value)} className="inp"/>
        </div>
    )
} 