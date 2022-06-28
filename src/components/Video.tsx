import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Lightning, ImageSquare } from "phosphor-react";
import { useGetLessonBySlugQuery } from "../graphql/generated";
import '@vime/core/themes/default.css'
import { Loading } from "./Loading";
import { Footer } from "./Footer";

interface VideoProps{
    lessonSlug: string;
}

export function Video(props : VideoProps){

    const { data } = useGetLessonBySlugQuery({
        variables: {
            slug: props.lessonSlug
        }
    })

    if(!data || !data.lesson){
        return(
            <Loading />
        )
    }

    return(
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                    <Player>
                        <Youtube videoId={data.lesson.videoId} />
                        <DefaultUi />
                    </Player>
                </div>
            </div>

            <div className="p-8 max-w-[1100px] mx-auto">
                <div className="md:flex items-start gap-16">
                    <div className="flex-1">
                        <h1 className="text-lg md:text-2xl font-bold">
                            {data.lesson.title}
                        </h1>
                        <p className="text-sm md:text-base text-gray-200 mt-4 leading-relaxed">
                            {data.lesson.description}
                        </p>

                        { data.lesson.teacher && (<div className="flex items-center gap-4 mt-6 mb-6 md:mb-0">
                            <img 
                            className="h-16 w-16 rounded-full border-2 border-blue-500"
                            src={data.lesson.teacher.avatarURL}
                            alt="" 
                            />
                            <div className="leading-relaxed">
                                <strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
                                <span className="text-gray-200 text-sm block">{data.lesson.teacher.bio}</span>
                            </div>
                        </div>)}
                    </div>
                    <div className="flex flex-col gap-4">
                        <a href="" className="p-4 text-sm bg-pink-500 border border-pink-500 flex items-center rounded font-bold gap-2 uppercase justify-center hover:bg-pink-700 hover:border-pink-700  transition-colors">
                            <DiscordLogo size={24} />
                            Comunidade do Discord
                        </a>
                        <a href="" className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold gap-2 uppercase justify-center hover:bg-blue-500 hover:text-black transition-colors">
                            <Lightning size={24} />
                            Acesse o desafio
                        </a>
                    </div>
                </div>

                <div className="gap-8 mt-20 grid md:grid-cols-2">
                    <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-4 md:gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-pink-700 h-full p-6 flex items-center">
                            <FileArrowDown size={40} />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-lg md:text-2xl">Material Complementar</strong>
                            <p className="text-gray-200 mt-2 text-xs md:text-sm">
                                Acesse  o material complementar para acelerar o seu desenvolvimento
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24} />
                        </div>
                    </a>
                    <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-4 md:gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-pink-700 h-full p-6 flex items-center">
                            <ImageSquare size={40} />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-lg md:text-2xl">Wallpapers</strong>
                            <p className="text-gray-200 mt-2 text-xs md:text-sm">
                                Baixe wallpapers exclusivos da Maratona Explorer e personalize a sua máquina
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24} />
                        </div>
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    )
}