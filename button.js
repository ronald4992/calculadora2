function button ({onclick,children,...props}){
 return <button onclick={onclick}{...props}>
        {children}
    </button>
}
export default button;