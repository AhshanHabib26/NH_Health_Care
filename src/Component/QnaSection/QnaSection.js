import React from 'react';
import './QnaSection.css'

const QnaSection = () => {
    return (
        <div className='qna_section_container'>
            <h1> Q&A Section</h1>
            <div className="qna_section">
            <div className="inner_section">
                    <h2>Props VS State?</h2>
                    <ul>
                    <h4>Props:</h4>
                        <li>Props Read Only</li>
                        <li>Props Are Change Immutable</li>
                        <li>Props Use One Component To Another Component Pass Data</li>
                        <li>Props Makes A Component Reusable</li>
                        <li>Props Are Controled Whereever And Whenever Or Any Component</li>
                        <li>Props Used Child Component</li>
                    </ul>
                    <ul>
                    <h4>State:</h4>
                        <li>State Changed Asunchronous Way</li>
                        <li>State Are Change mutable</li>
                        <li>Props Just Use One Component And Hold Only It's Data Or Information</li>
                        <li>State Don't Reusable</li>
                        <li>State Are Controled Internal Component</li>
                        <li>State Cannot Used Child Component</li>
                    </ul>
                </div>
                <div className="inner_section">
                    <h2>How React Works?</h2>
                    <p>At Present, React Is a Most Popular JavaScript Library. React Basically Works Browser DOM. When We Any Change On Website , React Behind the Sceene Create Virtual DOM And Track Which Is Actually Changed. Are Known As : JSX (Javascript XML), Render.React.DOM, Props And Most Powerful Objective Is, It Is Gives Us Componnent Based Sugar.</p>
                </div>
                <div className="inner_section">
                    <h2>How useState Works?</h2>
                    <p>useState() is a Most Uses React Hook. To Use useState You Can First import useState From React Libarray. UseState Is a Special Functions it Takes Two Intiaal state As An Paarameetr. Such As: first One is 'Intital State" And Second is 'function Which Is Track And Also Used Updating State.</p>
                </div>
            </div>
        </div>
    );
};

export default QnaSection;