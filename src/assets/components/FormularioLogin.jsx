import './formularioLogin.css'
import { useState } from 'react'

export function FormularioLogin(){
    return (
        <>
           <section>
                <div>
                    <form>
                        <h1>Formulário de Login</h1>
                        <label for="email">Email:
                              <input id="email" type='emial' placeholder='Digite seu email'></input>
                        </label>
                        <label for="senha">Senha: <input id="senha"></input></label>

                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </section>
        </>
    )
}