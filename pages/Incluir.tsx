import axios from "axios"
import { useState } from "react"

export function Incluir () {
    const [nome,setNome] = useState ("")
    const [sobrenome,setSobrenome] = useState ("")

    const sendToApi = () => {
        axios.post('/api/clientes' , {
        nome,
        sobrenome
        })
    }

    return (
        <form>
            <div>
                <label>
                    Nome:
                    <input type="text" name="name" onChange={(e) => setNome(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Sobrenome:
                    <input type="text" name="name" onChange={(e) => setSobrenome(e.target.value)} />
                </label>
            </div>
            <button type="submit" onClick={sendToApi}>Salvar</button>
        </form>
    )
}