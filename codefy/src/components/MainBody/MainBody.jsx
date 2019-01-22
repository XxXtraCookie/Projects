import React from 'react';
import './mainBody.scss';

import Card from '../Card';
import { CardFullDescription } from '../Card/CardFullDescription/CardFullDescription';

const htmlImg = require('../../_images/html_5_v3.png');
const cssImg = require('../../_images/css_3_v4.png');
const jsImg = require('../../_images/javascript.png');
const reactImg = require('../../_images/react.svg');
const reduxImg = require('../../_images/redux_v2.svg');

class MainBody extends React.Component {
  render() {
    return (
      <div className="main-body-wrapper">
        <div className="cards-container">
        <Card
          imgSrc={htmlImg}
          imgAlt="HTML"
          description="HyperText Markup Language"
        />

        <Card
          imgSrc={cssImg}
          imgAlt="CSS"
          description="Cascading Style Sheets"
        />

        <Card
          imgSrc={jsImg}
          imgAlt="JavaScript"
          description="JavaScript"
        />

        <Card
          imgSrc={reactImg}
          imgAlt="React"
          description="React"
        />

        <Card
          imgSrc={reduxImg}
          imgAlt="Redux"
          description="Redux"
        />
        </div>
        <div className="description-container">
          <CardFullDescription
           description="HTML (съкращение от термина на английски: HyperText Markup Language, произнасяно най-често като „ейч-ти-ем-ел“, в превод „език за маркиране на хипертекст“) е основният маркиращ език за описание и дизайн на уеб страници. HTML е стандарт в Интернет, а правилата се определят от международния консорциум W3C. Текущата версия на стандарта е HTML 5.0 (от 28 октомври 2014 г.)
            Описанието на документа става чрез специални елементи, наречени HTML елементи или маркери, които се състоят от етикети или тагове (HTML tags) и ъглови скоби (като например елемента <html>). HTML елементите са основната градивна единица на уеб страниците. Чрез тях се оформят отделните части от текста на една уеб страница, като заглавия, цитати, раздели, хипертекстови препратки и т.н. Най-често HTML елементите са групирани по двойки <h1> и </h1>.
            В повечето случаи HTML кодът е написан в текстови файлове и се хоства на сървъри, свързани към Интернет. Тези файлове съдържат текстово съдържание с маркери – инструкции за браузъра за това как да се показва текстът. Например <маркер> Някакъв текст. </край на маркера>. Предназначението на уеб браузърите е да могат да прочетат HTML документите и да ги превърнат в уеб страници. Браузърите не показват HTML таговете, а ги използват, за да интерпретират съдържанието на страницата.
            Основното предимство на HTML е, че документите, оформени по този начин, могат да се разглеждат на различни устройства, а не само на екрана. Документът може да бъде правилно оформен и върху монитора на персонален компютър, и върху миниатюрния дисплей на пейджър или мобилен телефон.
            HTML може да прикрепя скриптове писани на езици като JavaScript, което променя поведението на уеб страницата. Може да се използва Cascading Style Sheets (CSS), който определя изгледа и оформлението на текста и други материали. World Wide Web Consortium (W3C) поддържа и двете CSS и HTML и насърчава използването на CSS в HTML страниците от 1997. Това допринася за разделяне съдържанието и структурата на уеб страниците от тяхното визуално представяне."
          />
        </div>
      </div>
    );
  }
}

export default MainBody;
