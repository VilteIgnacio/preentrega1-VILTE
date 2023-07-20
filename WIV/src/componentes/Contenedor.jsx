export const Contenedor = ({children}) => {
    
    const estilos = {
        background: "grey" , 
        color: "white", 
        padding: "20px", 
        margin:"0 auto", 
        maxWidth: "1000px"};

    return (
        <div style={estilos}>
            <h2>Un titulo</h2>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quasi, sed voluptatem vero voluptate, itaque mollitia laboriosam possimus nulla quibusdam aliquam reiciendis rem alias deleniti temporibus neque officiis a debitis.
            Necessitatibus dolorum asperiores et, sit tempora incidunt vero nobis aliquam saepe ducimus atque illum molestias pariatur tempore impedit laudantium minus porro dolore quasi cumque enim numquam. At nobis inventore illum.
            Vitae recusandae sunt autem dignissimos quasi rem. Delectus veniam est, corporis, nostrum deleniti minus vel soluta id architecto rem perferendis voluptate reiciendis, neque laudantium. Cumque m

            </p>
            {children}
        </div>
    )
}