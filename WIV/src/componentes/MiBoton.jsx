export const MiBoton = ({children, color, click}) => {
    const style = {
background: color,
color: "white",
fontWeight: "700",
textAlign: "center",
border: "none",
borderRadius: "5px"}

    return (
        <button style={style} onClick={click}>
{children}
        </button>
    )
}