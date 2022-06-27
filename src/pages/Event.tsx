import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
import PlayVideoImg from "../../src/assets/play-video.svg"
import { SidebarProvider } from "../context/sidebar";

export function Event(){
    const { slug } = useParams<{ slug: string }>();

    return(
        <SidebarProvider>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex flex-1">
                    { slug 
                        ? <Video lessonSlug={slug} /> 
                        : <div className="flex flex-1 items-center justify-center text-gray-300">
                            <div className="flex flex-col text-center">
                                <img className="mx-6 md:w-96 mb-8" src={PlayVideoImg} alt="Clique na Aula" /> 
                                Clique em uma aula para exibir o conteúdo
                            </div>
                        </div>
                    }
                    <Sidebar />
                </main>
            </div>
        </SidebarProvider>
    )
}