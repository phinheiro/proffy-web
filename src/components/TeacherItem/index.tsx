import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

interface TeacherItemProps {

}

const TeacherItem: React.FC<TeacherItemProps> = (props) => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/54939186?s=460&u=8db5e6ad922c7795f1d9a98414f6d8330d13fe46&v=4" alt="Foto proffy" />
                <div>
                    <strong>Pedro Pinheiro</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de química avançada.
                    <br /><br />
                    Apaixonado por explodir coisas em alboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma de minhas explosões.
                    </p>

            <footer>
                <p>
                    Preço/hora
                        <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                        Entrar em contato
                    </button>
            </footer>
        </article>
    );
}

export default TeacherItem;