import { useEffect } from "react";

type Props = {
    message: string;
}

function Hello({ message }: Props){

    useEffect(() => {
        //chamada para API para buscar os produtos
        console.log('Componente iniciou');
        
    }, []);

    return(
        <h1>Componente {message}</h1>
    )
}

export default Hello;