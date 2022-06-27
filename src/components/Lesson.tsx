import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';
import LessonDetailIcon from '../assets/lesson-detail-icon.svg'
import classNames from 'classnames'
import { SidebarContext } from "../context/sidebar";
import { useContext } from 'react';


interface LessonProps{
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps){
    const { slug } = useParams<{ slug: string }>() 
    const { handleCloseSidebar } = useContext(SidebarContext);

    function handleHiddenSidebar() {
        handleCloseSidebar();
          return;
      }

    const isLessonAvailable = isPast(props.availableAt)
    const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm",{
        locale: ptBR
    })

    const isActiveLesson = slug == props.slug
    return(
        <Link 
            to={`/event/lesson/${props.slug}`} 
            onClick={handleHiddenSidebar}
            className={classNames("first-letter:uppercase group",{
                'pointer-events-none' : !isLessonAvailable
            })}
        >
            <span className="text-gray-300 ">
                {availableDateFormatted}
            </span>
            <div className={classNames('rounded border p-4 mt-2 relative',{
                'bg-green-500 border-green-500 group-hover:border-green-500': isActiveLesson,
                'border-gray-500' : !isActiveLesson

            })}>

                {isActiveLesson && (<img src={LessonDetailIcon} className="absolute left-[-10px]" alt="Lesson Arrow" />)}

                <header className="flex items-center justify-between">
                    {isLessonAvailable ? (
                    <span className={classNames('text-sm  font-medium flex items-center gap-2',{
                        'text-white' : isActiveLesson,
                        'text-blue-500' : !isActiveLesson,
                        
                    })}>
                        <CheckCircle size={20} />
                        Conteúdo liberado
                    </span>
                    ) : (
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                            <Lock size={20} />
                            Em breve
                        </span>
                    )}

                    <span className={classNames("text-xs rounded px-2 py-[0.125rem] text-white border font-bold",{
                        'border-white' : isActiveLesson,
                        'border-green-300' : !isActiveLesson,
                    })}>
                       {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>
                <strong className={classNames(' mt-5 block',{
                    'text-white' : isActiveLesson,
                    'text-gray-200' : !isActiveLesson,
                    
                })}>
                    {props.title}
                </strong>
            </div>
        </Link>
    )
}