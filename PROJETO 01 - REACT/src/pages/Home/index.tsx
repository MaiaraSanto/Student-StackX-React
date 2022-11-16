import { useState } from "react";
import { Click} from "../../components/const/Click";
import { Header } from "../../components/const/Header";
import { TechTabela } from "../../components/const/Tabela";
import { Container_content, ResumoProfissional } from "./styles";




export const Home = () => { 

    
    const idioma = [{
        en:"Hello, my name is Maiara Santos and I am a Front-End Developer, Technologies that I have experience:", 
        pt: "Olá, meu nome é Maiara Santos e eu sou Desenvolvedora Front-End, Tecnologias que tenho experiência:",
        es:"Hola, mi nombre es Maiara Santos y soy Desarrolladora Front-End, Tecnologías en las que tengo experiencia:"
    }]
   
    
    const [language, setLanguage] = useState(idioma[0].pt)

    const handleLanguage=(Text:string) => {
        
        if (Text == 'Português') {
            setLanguage(idioma[0].pt) 
        } else if (Text == 'Español') {
            setLanguage(idioma[0].es)
        } else {
            setLanguage(idioma[0].en)  
        }
       
    }
    
    return (
        <>
            <Header /> 
            <Container_content>
            <ResumoProfissional>
                    {language}
            </ResumoProfissional>
            <TechTabela/>
           </Container_content>
            <Click languages={handleLanguage} />
           
        </>

    )
}