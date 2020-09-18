import React from "react";
import ReactDOM from "react-dom";
import "./style";
import 'semantic-ui-css/semantic.min.css';
import { Button, Input, List, Dimmer, Loader, Image, Segment, Rating, Item } from 'semantic-ui-react';

class Start extends React.Component{
    constructor(props) {
        super(props);

        this.handleChangeContent = this.handleChangeContent.bind(this);
    }

    handleChangeContent(e){
        this.props.onChangeContent("Notification")
    }
    
    render(){
        return(
            <div>
                <div>
                    <h1 className="start-title">Сайты в 2020 году</h1>
                    <Button  className="start-btn" content='Standard' onClick={this.handleChangeContent} inverted>Продолжить</Button>
                </div>
                <footer className="footer">
                    <p className="footer-p">
                    Оригинальная идея из телеграм-канала <a target="_blank" href="https://t.me/uxlive/6571">uxlive</a>.
                    </p>
                    <p className="footer-p">
                    Автор идеи, которую использовал я – <a target="_blank" href="https://blog.bloomca.me/about">Сева Зайков</a> <a target="_blank" href="https://github.com/Bloomca/website-in-2018">(исходный код)</a>
                    </p>
                    <p className="footer-p"> 
                    Автор данного сайта – <a target="_blank" href="https://github.com/bekanoor">Евгений Бекануридзе</a> 
                    </p>
                </footer>
            </div>
        );
    }
}

class ResponseNotification extends React.Component{
    constructor(props){
        super(props);

        this.handleChangeContent = this.handleChangeContent.bind(this);
    }

    handleChangeContent(e){
        this.props.onChangeContent("Cookie")
    }

    render(){
        return (
        <div className="loader-wrapper">
            <div className="notification" >
                <p className="notification-text">2020.websites запрашивает</p>
                <p className="test">
                    <Image className="notification-icon" src="/src/source/pngwing.png"/>
                    Показывать уведомления
                </p>
                <Button className="yes-nt-button" onClick={this.handleChangeContent}>Разрешить</Button>
                <Button className="no-nt-button" onClick={this.handleChangeContent}>Блокировать</Button>
            </div>
            <div >
                <Image className="load-theme" src="/src/Gif/spinner.gif" />
            </div>
        </div>
        );
    }
}

class Cookie extends React.Component{
    constructor(props){
        super(props);

        this.handleChangeContent = this.handleChangeContent.bind(this);
    }

    handleChangeContent(e){
        this.props.onChangeContent("Age")
    }

    render(){
        return (
        <div className="loader-wrapper">
            <div className="cookie">
                <h1 className="cookie-title">Ваша конфиденциальность</h1>
                <p className="cookie-p">
                    Наш сайт использует cookie-файлы для того, чтобы отличить вас от других пользователей нашего ресурса. Это позволяет обеспечить удобный просмотр нашего сайта, более релевантную рекламу, а также даёт нам возможность улучшить наш сервис. Для того, чтобы продолжить работу с нашим сайтом, вам необходимо принять использование cookie-файлов.
                </p>
                <p className="cookie-p">
                    Если вы хотите узнать больше, пожалуйста, ознакомьтесь с нашей <a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">нашей политикой конфиденциальности</a> и <a target="_blank" href="https://www.youtube.com/watch?v=IelAyJvUQSg">условиями использования cookies</a>.
                </p>
                <Button className="cookie-btn" onClick={this.handleChangeContent}> Принять </Button>
            </div>
            <div>
                <Image className="load-theme" src="/src/Gif/spinner.gif" />
            </div>
        </div>
        );
    }
}

class Age extends React.Component{
    constructor(props){
        super(props);

        this.handleChangeContentTrue = this.handleChangeContentTrue.bind(this);
        this.handleChangeContentFalse = this.handleChangeContentFalse.bind(this);
    }

    handleChangeContentTrue(e){
        this.props.onChangeContent("Mailing")
    }

    handleChangeContentFalse(e){
        this.props.onChangeContent("Ban")
    }

    render(){
        return (
            <div className="choice-container">
                <div className="choice">
                    <h1 className="age-title">Вы знаете что это?</h1>
                    <Image className="choice-image" src="/src/source/ahago.jpg" size="small"/>
                    <div className="choice-btn">
                        <Button className="choice-btn-yes" basic inverted color='green' onClick={this.handleChangeContentTrue}>Да</Button>
                        <Button className="choice-btn-no" basic inverted color='red' onClick={this.handleChangeContentFalse}>Нет</Button>
                    </div>
                </div>
            </div>
        );
    }
}

class Ban extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
        <div className="ban">
           <h1 className="ban-title">Вы не можете посещать данный сайт</h1>
           <p className="ban-p">
                В соответствии с законодательством РФ и Гаагской конвенцией, мы не можем показывать содержимое этого сайта пользователям, не достигшим 18 лет.
           </p>
            <footer className="footer">
                <p className="footer-p">
                    Оригинальная идея из телеграм-канала <a target="_blank" href="https://t.me/uxlive/6571">uxlive</a>.
                </p>
                <p className="footer-p">
                    Автор идеи, которую использовал  я – <a target="_blank" href="https://blog.bloomca.me/about">Сева Зайков</a> <a target="_blank" href="https://github.com/Bloomca/website-in-2018">(исходный код)</a>
                </p>
                <p className="footer-p">
                    Автор данного сайта – Беканур 
                </p>
           </footer>
        </div> 
        );
    }
}

class Mailing extends React.Component{
    constructor(props){
        super(props);

        this.handleChangeContent = this.handleChangeContent.bind(this);
    }

    handleChangeContent(e){
        this.props.onChangeContent("Block")
    }

    render(){
        return (
        <div className="mailing-c">
            <div className="mailing">
                <Image className="mailing-close" src="/src/source/cancel.png" onClick={this.handleChangeContent} />
                <Image src="/src/source/malning.png" className="mailing-image"/>
                <h1 className="mailing-title">Подпишитесь на нашу рассылку</h1>
                <p className="mailing-p">
                    Всего один шаг — и вы cможете подписаться на нашу новостную рассылку, которая будет приходить к вам еженедельно. Вы будете получать на русском языке новости о самых интересных событиях, которые произошли за последнюю неделю.
                    Мы не используем никакие персональные данные для рассылки рекламы и не передаем адреса электронной почты третьим лицам.
                </p>
                <Input className="mailing-input" placeholder="Ваша электронная почта" type="email" ></Input>
                <Button className="mailing-btn" onClick={this.handleChangeContent}> Подписаться </Button>
            </div>
        </div>
        );
    }
}

class Block extends React.Component{
    constructor(props){
        super(props);

        this.handleChangeContent = this.handleChangeContent.bind(this);
    }

    handleChangeContent(e){
        this.props.onChangeContent("Support")
    }

    render(){
        return (
        <div className="block">
            <h1 className="block-title">Пожалуйста, отключите блокировщик рекламы</h1>
            <br/>
            <p className="block-top">
                Реклама – наш главный источник доходов. Мы всегда стараемся сделать самое лучшее, чтобы вы могли бесплатно пользоваться нашим сервисом, поэтому было бы замечательно, если вы внесёте наш сайт в список исключений для вашего блокировщика рекламы.
            </p>
            <p className="block-bot">
                Мы тоже не любим рекламу, но наша миссия – дать услугу самому большому числу пользователей, поэтому мы всегда будем бесплатны. К сожалению, без рекламы это невозможно.
            </p>
            <br/>
            <Button  className="block-btn" content='Standard' onClick={this.handleChangeContent} inverted>Хорошо</Button>
        </div>
        );
    }
}

class Support extends React.Component{
    constructor(props){
        super(props);

        this.handleChangeContent = this.handleChangeContent.bind(this);
    }

    handleChangeContent(e){
        this.props.onChangeContent("Found")
    }

    render(){
        return (
        <div className="block" >
            <h1 className="support-title">Поддержите нас</h1>
            <p className="support-top">
                Наш сайт финансово независим – никто не влияет на то, что и как мы делаем. Никто не указывает нам, как именно мы должны работать. Мы не распространяем то, что выгодно людям, стоящим за нами – потому что там никого нет. Однако, в отличие от многих, мы не вводим платную подписку, потому что нам важно, чтобы всё было в открытом доступе.
            </p>
            <p className="support-bot">
                К сожалению, доходы от рекламы падают, и чтобы иметь возможность продолжать нашу работу, нам нужно всё больше поддержки от наших пользователей. Жертвуя нам, вы не только помогаете этому сервису, но и ряду других, а также свободному интернету как таковому. Спасибо, что помогаете нам.
            </p>
            <br/>
            <Button  className="support-btn" content='Standard' onClick={this.handleChangeContent} inverted>Хорошо</Button>
        </div>
        );
    }
}

class Found extends React.Component{
    constructor(props){
        super(props);

        this.handleChangeContent = this.handleChangeContent.bind(this);
    }

    handleChangeContent(e){
        this.props.onChangeContent("Wrong")
    }

    render(){
        return(
            <div className="found-container">
            <div className="found">
                <h1 className="age-title">Нашли, что искали?</h1>
                
                <div className="found-btn">
                    <Button className="found-btn-yes" onClick={this.handleChangeContent}>Да</Button>
                    <Button className="found-btn-no" onClick={this.handleChangeContent}>Нет</Button>
                </div>
            </div>
        </div>
        );
    }
}

class Wrong extends React.Component{
    constructor(props){
        super(props);

        this.handleChangeContent = this.handleChangeContent.bind(this);
    }

    handleChangeContent(e){
        this.props.onChangeContent("Finish")
    }

    render(){
        return(
            <div >
                <div className="block">
                    <h1 className="wrong-title">Что-то пошло не так</h1>
                    <p className="wrong-p">
                    Наша бравая команда уже знает о проблеме и вовсю чинит эту досадную оплошность.
                    </p>
                    <Button className="wrong-btn"  content='Standard' onClick={this.handleChangeContent} inverted>Какая жалость =(</Button>
                </div>
                <footer className="rate-f">
                <h2 className="rate-title">Оцените вероятность, с которой вы посоветуете наш продукт своим друзьям, коллегам, близким</h2>
                <Rating className="rate" defaultRating={10} maxRating={10} disabled size="huge" />
                </footer>
            </div>
        );
    }
}

class Finish extends React.Component{
    constructor(props){
        super(props);

        this.handleChangeContent = this.handleChangeContent.bind(this);
    }

    handleChangeContent(e){
        this.props.onChangeContent("")
    }

    render(){
        return(
           <div>
                <div className="block">
                    <h1 className="block-title">Вы выдержали!</h1>
                    <p className="block-top">
                        Конечно, не всё так плохо, и полно хороших, быстрых, рабочих сайтов, которые сделаны людьми.
                    </p>
                    <p className="block-bot">
                        Возможно, кто-то задумается о том, чтобы стать лучше в веб и разрабатывать только хорошие сайты.
                    </p>
                    </div>
                <footer className="footer">
                    <p className="footer-p">
                    Оригинальная идея из телеграм-канала <a target="_blank" href="https://t.me/uxlive/6571">uxlive</a>.
                    </p>
                    <p className="footer-p">
                    Автор идеи, которую использовал  я – <a target="_blank" href="https://blog.bloomca.me/about">Сева Зайков</a> <a target="_blank" href="https://github.com/Bloomca/website-in-2018">(исходный код)</a>
                    </p>
                    <p className="footer-p">
                    Автор данного сайта – <a target="_blank" href="https://github.com/bekanoor">Евгений Бекануридзе</a> 
                    </p>
                </footer>
           </div>
        );
    }
}

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            whatContent: 'Start'

        }

        this.handleChangeContent = this.handleChangeContent.bind(this);
    }

    handleChangeContent(content){
        this.setState({
            whatContent: content 
        });
    }

    render () {
        const content = [];

        if(this.state.whatContent == 'Start'){
            content.push(<Start onChangeContent={this.handleChangeContent}/>)
        }
        else if(this.state.whatContent == 'Notification'){
            content.push(<ResponseNotification onChangeContent={this.handleChangeContent}/>)
        }
        else if(this.state.whatContent == 'Cookie'){
            content.push(<Cookie onChangeContent={this.handleChangeContent}/>)
        }
        else if(this.state.whatContent == 'Age'){
            content.push(<Age onChangeContent={this.handleChangeContent}/>)
        }
        else if(this.state.whatContent == 'Ban'){
            content.push(<Ban onChangeContent={this.handleChangeContent}/>)
        }
        else if(this.state.whatContent == 'Mailing'){
            content.push(<Mailing onChangeContent={this.handleChangeContent}/>)
        }
        else if(this.state.whatContent == 'Block'){
            content.push(<Block onChangeContent={this.handleChangeContent}/>)
        }
        else if(this.state.whatContent == 'Support'){
            content.push(<Support onChangeContent={this.handleChangeContent}/>)
        }
        else if(this.state.whatContent == 'Found'){
            content.push(<Found onChangeContent={this.handleChangeContent}/>)
        }
        else if(this.state.whatContent == 'Wrong'){
            content.push(<Wrong onChangeContent={this.handleChangeContent}/>)
        }  
        else if(this.state.whatContent == 'Finish'){
            content.push(<Finish onChangeContent={this.handleChangeContent}/>)
        }  

        return (
            <div className="mainBody">
                {content}
            </div>
        )
    }   
}

ReactDOM.render(<App/>, document.getElementById("root"));