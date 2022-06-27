import { useGetLessonQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";
import { SidebarContext } from '../context/sidebar';
import { useContext } from "react";
import classNames from "classnames";

export function Sidebar(){
    const { sidebarIsOpen } = useContext(SidebarContext);
    const { data } = useGetLessonQuery()

    return(
        <aside className={classNames("md:w-[348px] bg-gray-700 p-6 border-l border-gray-600 md:block",{
            "fixed md:static top-[68px] right-0 left-0 bottom-0 z-50" : sidebarIsOpen,
            "hidden" : !sidebarIsOpen,
        })}>
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                Cronograma de Aulas
            </span>

            <div className="flex flex-col gap-8">
                {data?.lessons.map(lesson => (
                    <Lesson 
                        key={lesson.id}
                        title={lesson.title}
                        slug={lesson.slug}
                        availableAt={new Date(lesson.availableAt)}
                        type={lesson.lessonType}             
                    />
                ))}
            </div>
        </aside>
    )
}