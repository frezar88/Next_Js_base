import A from "./A";
import Head from "next/head";


const MainContainer = ({children,keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={"frezar " + keywords}></meta>
                <meta name={"description"} content={'ssssssssssss'} />
                <title>тест</title>
            </Head>
            <div className="navbar">
                <A text={'Главная'} href={'/'}/>
                <A text={'Пользователи'} href={'/users'}/>
            </div>
            <div>
                {children}
            </div>
            <style >
                {`
                        .navbar{
                          background: orange;
                          padding: 15px;
                        }
                    `}
            </style>
        </>
    );
};

export default MainContainer;