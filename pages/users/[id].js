import {useRouter} from 'next/router'
import s from '../../styles/user.module.scss'
import MainContainer from "../../components/MainContainer";

export default function User ({user}) {
    const {query} = useRouter()

    return (
        <MainContainer  keywords={user.name}>
            <div className={s.user}>
                <h1>
                    Пользователь c id {query.id}
                    <div>
                        Имя пользователя - {user.name}
                    </div>
                </h1>
            </div>
        </MainContainer>

    )
};

export async function getServerSideProps({params}){
    console.log(params)
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()

    return {
        props:{user},
    }
}