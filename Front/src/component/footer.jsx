import { Link } from "react-router-dom";



const componente = () =>{
    return(
        <>
            <footer className="w-full pt-3 mt-3" style={{backgroundColor:'rgb(223, 223, 223)'}}>
                <div className="w-full flex justify-content-around">
                    <div className="flex flex-column text-left gap-1">
                        <h5 className="pb-1">Developers:</h5>
                        <p className="pl-4">Rojas Hidalgo Jhair Gonzalo</p>
                        <p className="pl-4">Sebastian Alexis Becerra Alvarado</p>
                        <p className="pl-4">Moron Ochante Joel Abrahan</p>
                        <p className="pl-4">Moron Ochante Isaac Stevens</p>
                        <p className="pl-4">Leo</p>
                    </div>
                    <div className="flex flex-column gap-1">
                        <h5 className="pb-1">GitHub:</h5>
                        <a href="https://github.com/RojasHidalgo" target="_blank" rel="noopener noreferrer">
                        https://github.com/RojasHidalgo
                        </a>
                        <a href="https://github.com/Joel-Moron?tab=repositories" target="_blank" rel="noopener noreferrer">
                            github/Joel-Moron/repositories
                        </a>
                        <a href="https://github.com/Joel-Moron?tab=repositories" target="_blank" rel="noopener noreferrer">
                            github/Joel-Moron/repositories
                        </a>
                        <a href="https://github.com/Joel-Moron?tab=repositories" target="_blank" rel="noopener noreferrer">
                            github/Joel-Moron/repositories
                        </a>
                        <a href="https://github.com/Joel-Moron?tab=repositories" target="_blank" rel="noopener noreferrer">
                            github/Joel-Moron/repositories
                        </a>
                    </div>
                    <div className="flex flex-column gap-1">
                        <h5 className="pb-1">Correo de Contacto:</h5>
                        <p className="pl-4">jhair030902@gmail.com</p>
                        <p className="pl-4">sebamano78@gmail.com</p>
                        <p className="pl-4">joelmpk6069@gmail.com</p>
                        <p className="pl-4">correo</p>
                        <p className="pl-4">correo</p>
                    </div>
                </div>
                <div class="pt-3"> &copy; 2023 <strong >Bonitos y Gorditos</strong>
                    <div>Derechos reservados por: Bonitos y Gorditos </div>
                </div>
            </footer>
        </>
    )
}

export default componente;