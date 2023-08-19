const componente = () =>{
    return(
        <div className="flex justify-content-around p-4 px-8 bg-black-alpha-30 text-left">
            <div className="flex flex-column">
                <h4 className="mb-2">Developers</h4>
                <p className="ml-4">Joel Abraham Moron Ochannte</p>
                <p className="ml-4">Isaac Stevens Moron Ochante</p>
                <p className="ml-4">Jhair Hiraldo Rojas Gonzalo</p>
                <p className="ml-4">Leo Sebastian Hualpa Sovero</p>
            </div>
            <div className="flex flex-column">
                <h4 className="mb-2">Github</h4>
                <a className="ml-4" href="https://github.com/Joel-Moron?tab=repositories">github/Joel-Moron</a>
                <a className="ml-4" href="/">link</a>
                <a className="ml-4" href="/">link</a>
                <a className="ml-4" href="/">link</a>
            </div>
            <div className="flex flex-column">
                <h4 className="mb-2">Linkedin</h4>
                <a className="ml-4" href="https://www.linkedin.com/in/joel-moron-ochante-11342123b/">linkedin/joel-moron-ochante</a>
                <a className="ml-4" href="/">link</a>
                <a className="ml-4" href="/">link</a>
                <a className="ml-4" href="/">link</a>
            </div>
        </div>
    )
}

export default componente;