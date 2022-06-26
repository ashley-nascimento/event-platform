import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";


export function Subscriber(){

    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [createSubscriber, {loading}] = useCreateSubscriberMutation()
    async function handleSubscribe(e:FormEvent){
        e.preventDefault()
        await createSubscriber({
            variables:{
                name,
                email,
            }
        })

        navigate('/event')
    }

    return(
        <main className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <img className="absolute" src="src/assets/react-icon.svg" alt="" />
            <div className="z-10 w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
                <div className="max-w-[640px]">
                    <Logo />
                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                        Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React JS</strong>
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed">
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>
                <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                    <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
                    <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                        <input 
                            type="text" 
                            className="bg-gray-900 rounded px-5 h-14" 
                            placeholder="Seu nome completo" 
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input 
                            type="email" 
                            className="bg-gray-900 rounded px-5 h-14" 
                            placeholder="Digite seu e-mail" 
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button 
                            type="submit"
                            disabled={loading} 
                            className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50">
                                Garantir minha vaga
                        </button>
                    </form>
                </div>
            </div>

            <img src="/src/assets/code-mockup.png" className="mt-10" alt="Codígo" />
        </main>
    )
}