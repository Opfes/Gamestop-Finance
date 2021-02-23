import { VictoryPie } from 'victory';
import LoginReturnButton from './LoginReturnButton.js'

function sheet(props){
    let sheetClass = 'sheet'

    const data=[
      { x: "Equity", y: 40},
      { x: "Bonds", y: 15},
      { x: "Savings", y: 10},
      { x: "401k", y: 30}
    ];
    if (props.sheetType === 'dashboard') {
      sheetClass += ' dashboard';
    }
    if (sheetClass === "sheet dashboard") {
      return (
        <div className={sheetClass}>
          <div className="dashboardChild">
            <VictoryPie
              style={{
                labels: {
                  fill: "white",
                  font: "wingdings"
                }
              }}
              data={data}
              width={600}
              colorScale="red"
              sortOrder="descending"
              padAngle={5}
              innerRadius={100}
            />
          </div>  
            <div className="dashboardChild">
              <h1>Header</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
              <LoginReturnButton path="/" text="return to login" />
            </div>
        </div>
      )
    }
    else {
      return (
        <div className={sheetClass}>
            <h1>This is an example of a sheet</h1>
        </div>
      )
    }
  }

export default sheet;