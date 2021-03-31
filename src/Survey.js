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
        pages: [
            {
            "name": "page1",
            "elements": [
            {
                "type": "radiogroup",
                "name": "question1",
                "title": "Choose the option that best describes your relationship status",
                "choices": [
                {
                "value": "item1",
                "text": "Single"
                },
                {
                "value": "item2",
                "text": "Married"
                },
                {
                "value": "item3",
                "text": "Widowed"
                }
                ]
            },
            {
                "type": "radiogroup",
                "name": "question2",
                "visibleIf": "{question1} = 'item3'",
                "title": "Did your spouse die within the past two tax years?",
                "choices": [
                {
                "value": "item1",
                "text": "Yes"
                },
                {
                "value": "item2",
                "text": "No"
                }
                ]
            },
            {
                "type": "radiogroup",
                "name": "question4",
                "visibleIf": "{question1} = 'item2'",
                "title": "Are you filing jointly with your spouse?",
                "choices": [
                {
                "value": "item1",
                "text": "Yes"
                },
                {
                "value": "item2",
                "text": "No"
                }
                ]
            },
            {
                "type": "radiogroup",
                "name": "question3",
                "visibleIf": "{question1} = 'item1' or {question2} = 'item2'",
                "title": "If you say answer 'Yes' to both of these questions answer 'Yes', if not, answer 'No'. Did you pay more than half the cost of keeping up a home for the year AND did a qualifying person lived with you in the home for more than half the year?",
                "choices": [
                {
                "value": "item1",
                "text": "Yes"
                },
                {
                "value": "item2",
                "text": "No"
                }
                ]
            }
            ]
            }
            ]
        };
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

function Survey(){

    return(
        <div id="surveyContainer">
            <h1>What is your filing status?</h1>
            <SurveyComponent />
        </div>
    );
}
const rootElement = document.getElementById("surveyContainer");
ReactDOM.render(<Survey />,rootElement);

export default Survey;