import './Section.css'

export function Section(){
    return (
        <> 
           <section>  
                <div>
                    <form>
                        <h1>Formulário de Login</h1>
                        <label for="email">Email:  <input id="email"></input> </label>
                        <label for="senha">Senha: <input id="senha"></input></label>
                    </form>
                </div>
            </section>
        </>
    )
}