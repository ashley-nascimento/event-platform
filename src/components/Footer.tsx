import { GithubLogo } from "phosphor-react";

export function Footer(){
    return (
        <footer className="bg-gray-900 border-t border-t-gray-600 py-6 px-6 flex justify-between">
            <span className="text-gray-300 block leading-tight">
                Desenvolvido por Ashley Nascimento
            </span>

            <a className="text-gray-300 flex gap-2 leading-tight hover:text-green-500" href="">
                <GithubLogo size="18" />
                GitHub
            </a>

        </footer>
    )
}