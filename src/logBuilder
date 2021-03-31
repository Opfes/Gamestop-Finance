import React from 'react';
import ReactDOM from 'react-dom';
import logo from './1280px-GameStop.png';
import './App.css';
<script src="https://unpkg.com/survey-react@1.8.35/survey.react.min.js"></script>


class SurveyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { isCompleted: false };
      this.onCompleteComponent = this.onCompleteComponent.bind(this);
    }
    onCompleteComponent() {
      this.setState({ isCompleted: true });
    }
    render() {
      let json = {
        "pages": [
         {
          "name": "page1",
          "elements": [
           {
            "type": "text",
            "name": "question1",
            "title": "Desc.",
            "isRequired": true
           },
           {
            "type": "text",
            "name": "question3",
            "title": "Date",
            "isRequired": true,
            "inputType": "date"
           },
           {
            "type": "text",
            "name": "amount",
            "title": "Amount",
            "isRequired": true,
            "inputType": "number"
           },
           {
            "type": "dropdown",
            "name": "question2",
            "title": "Category",
            "isRequired": true,
            "choices": [
             {
              "value": "ATM",
              "text": "ATM"
             },
             {
              "value": "Groceries",
              "text": "Groceries"
             },
             {
              "value": "Health Care",
              "text": "Health Care"
             },
             {
              "value": "Gas",
              "text": "Gas"
             },
             {
              "value": "Auto Repair",
              "text": "Auto Repair"
             },
             {
              "value": "Food & Drink",
              "text": "Food & Drink"
             },
             {
              "value": "Retail",
              "text": "Retail"
             },
             {
              "value": "Bills & Utilities",
              "text": "Bills & Utilities"
             },
             {
              "value": "Deposit",
              "text": "Deposit"
             },
             {
              "value": "Money Services",
              "text": "Money Services"
             }
            ],
            "otherText": "Subscription"
           }
          ]
         }
        ]
       }
       var surveyRender = !this.state.isCompleted ? (
        <Survey.Survey
          json={json}
          showCompletedPage={false}
          onComplete={this.onCompleteComponent}
        />
      ) : null;
      var onCompleteComponent = this.state.isCompleted ? (
        <div>The component after onComplete event</div>
      ) : null;
      return (
        <div>
          {surveyRender}
          {onCompleteComponent}
        </div>
      );
    }
    }
}



